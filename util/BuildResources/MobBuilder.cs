using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

using BuildResources;

using Lumina;


enum TMobCategory
{
    EliteMark = 1,
    SpecialEliteMark = 2,
    SpecialFATE = 3,
    None = 999
}

enum TMobRank
{
    S = 1,
    A = 2,
    B = 3,
    None = 999
}

class MobMapData(uint id, TMobCategory category, TMobRank rank)
{
    [JsonPropertyOrder(0)]
    public uint id { get; set; } = id;
    [JsonPropertyOrder(1)]
    public TMobCategory category { get; set; } = category;
    [JsonPropertyOrder(2)]
    public TMobRank rank { get; set; } = rank;
    [JsonPropertyOrder(4)]
    public RespawnMinutesExtraData? respawnMinutes { get; set; }
    [JsonPropertyOrder(3)]
    public SortedSet<uint> zoneIds { get; set; } = [];
}

class MobBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    private readonly Dictionary<string, FieldZonesExtraData> fieldZoneExtraData = ExtraDataUtil.ImportFieldZonesExtraData(projectPath);
    private readonly RegionsExtraData regionsExtraData = ExtraDataUtil.ImportRegionsExtraData(projectPath);
    private readonly Dictionary<string, RespawnMinutesExtraData> respawnMinutesExtraData = ExtraDataUtil.ImportRespawnMinutesExtraData(projectPath);
    private readonly SortedDictionary<uint, MobMapData> mobMap = [];
    private readonly SortedSet<uint> srankelites = [];
    private readonly SortedSet<uint> arankelites = [];
    private readonly SortedSet<uint> brankelites = [];
    private readonly SortedSet<uint> specialelites = [];
    private readonly SortedSet<uint> specialfates = [];

    public SortedSet<uint> GetUniqueBNpcNameIds()
    {
        SortedSet<uint> all = [];
        all.UnionWith(srankelites);
        all.UnionWith(arankelites);
        all.UnionWith(brankelites);
        all.UnionWith(specialelites);
        all.UnionWith(specialfates);
        return all;
    }

    public void RegisterMob(uint id, uint zoneId, TMobCategory mobCategory, TMobRank mobRank, SortedSet<uint> targetList)
    {
        if (mobMap.TryGetValue(id, out MobMapData? value))
        {
            var mobData = value;
            if ((mobData.category != mobCategory) || (mobData.rank != mobRank))
            {
                throw new Exception("Unmatch: ($mobData) vs ($Category)");
            }
            mobData.zoneIds.Add(zoneId);
        }
        else
        {
            targetList.Add(id);
            var mobMapData = new MobMapData(id, mobCategory, mobRank);
            mobMapData.zoneIds.Add(zoneId);
            if (respawnMinutesExtraData.ContainsKey(id.ToString()))
            {
                mobMapData.respawnMinutes = respawnMinutesExtraData[id.ToString()];
            }
            mobMap.Add(id, mobMapData);
        }
    }

    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "mobs.data.ts");

        var mobCategories = Enum.GetValues(typeof(TMobCategory))
        .OfType<TMobCategory>()
        .Select((value) => new BaseResource((uint)value, Enum.GetName(value)!)
        );

        var mobRanks = Enum.GetValues(typeof(TMobRank))
        .OfType<TMobRank>()
        .Select((value) => new BaseResource((uint)value, Enum.GetName(value)!));

        foreach (var huntRegion in regionsExtraData.huntRegions)
        {
            foreach (var zoneId in huntRegion.zoneIds)
            {
                if (fieldZoneExtraData.ContainsKey(zoneId.ToString()))
                {
                    var zone = fieldZoneExtraData[zoneId.ToString()];
                    if (zone.elite.ids.Length == 5)
                    {
                        RegisterMob(zone.elite.ids[0], zoneId, TMobCategory.EliteMark, TMobRank.S, srankelites);
                        RegisterMob(zone.elite.ids[1], zoneId, TMobCategory.EliteMark, TMobRank.A, arankelites);
                        RegisterMob(zone.elite.ids[2], zoneId, TMobCategory.EliteMark, TMobRank.A, arankelites);
                        RegisterMob(zone.elite.ids[3], zoneId, TMobCategory.EliteMark, TMobRank.B, brankelites);
                        RegisterMob(zone.elite.ids[4], zoneId, TMobCategory.EliteMark, TMobRank.B, brankelites);
                    }
                    else
                    {
                        RegisterMob(zone.elite.ids[0], zoneId, TMobCategory.EliteMark, TMobRank.S, srankelites);
                        RegisterMob(zone.elite.ids[1], zoneId, TMobCategory.EliteMark, TMobRank.A, arankelites);
                        RegisterMob(zone.elite.ids[2], zoneId, TMobCategory.EliteMark, TMobRank.B, brankelites);
                    }
                    if (zone.ss != null)
                    {
                        foreach (var id in zone.ss.ids)
                        {
                            RegisterMob(id, zoneId, TMobCategory.SpecialEliteMark, TMobRank.None, specialelites);
                        }
                    }
                    if (zone.fate != null)
                    {
                        foreach (var id in zone.fate.ids)
                        {
                            RegisterMob(id, zoneId, TMobCategory.SpecialFATE, TMobRank.None, specialfates);
                        }
                    }
                }
            }
        }

        // Json は int型のKeyを展開できないため、詰め直す
        Dictionary<uint, MobMapData> mobById = [];
        foreach (var entry in mobMap)
        {
            mobById[entry.Value.id] = entry.Value;
        }
        var jsonString = Regex.Replace(JsonSerializer.Serialize(mobById, SerializerOptions), "\"([a-zA-Z0-9]*)\": +", "$1: ");

        var content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            {{ConvertToUnionTypeDefinition(mobCategories, "TMobCategory")}}

            {{ConvertToUnionTypeDefinition(mobRanks, "TMobRank")}}

            type MobData = {
              readonly id: number
              readonly category: TMobCategory
              readonly rank: TMobRank
              readonly zoneIds: number[]
              readonly respawnMinutes?: {
                min: number
                max: number
              }
            }

            const mobData: {
              mobById: Record<number, MobData>
              sRanks: number[]
              aRanks: number[]
              bRanks: number[]
              specials: number[]
              fates: number[]
            } = {
              mobById: {{jsonString}},
              sRanks: {{JsonSerializer.Serialize(srankelites)}},
              aRanks: {{JsonSerializer.Serialize(arankelites)}},
              bRanks: {{JsonSerializer.Serialize(brankelites)}},
              specials: {{JsonSerializer.Serialize(specialelites)}},
              fates: {{JsonSerializer.Serialize(specialfates)}}
            }

            export { TMobCategory, TMobRank, mobData, type MobData }

            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }
}
