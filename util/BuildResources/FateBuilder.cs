using System.Text;

using BuildResources;

using Lumina;
using Lumina.Data;
using Lumina.Data.Files;
using Lumina.Excel.GeneratedSheets;
public class FateLocation(uint id, double x, double y, double z, string layerName, uint zoneId, bool hasFate)
{
    public uint id { get; } = id;
    public double x { get; } = x;
    public double y { get; } = y;
    public double z { get; } = z;
    public string layerName { get; } = layerName;
    public uint zoneId { get; } = zoneId;
    public bool hasFate { get; set; } = hasFate;
}

public class FateResource(Fate item, FateLocation loc)
{
    public uint id { get; } = item.RowId;
    public string name { get; } = item.Name.RawString;
    public string icon { get; } = $"{item.IconMap:000000}";
    public uint eureka { get; } = item.EurekaFate;
    public uint rule { get; } = item.Rule;
    public bool specialFate { get; } = item.SpecialFate;
    public double x { get; } = loc.x;
    public double y { get; } = loc.y;
    public double z { get; } = loc.z;
    public uint zoneId { get; } = loc.zoneId;
}

class FateBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    private readonly RegionsExtraData regionsExtraData = ExtraDataUtil.ImportRegionsExtraData(projectPath);

    private IEnumerable<uint> uniqueFateIds = [];

    public SortedSet<uint> GetUniqueFateIds() => new(uniqueFateIds);

    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "fates.data.ts");

        // Collect fate location info (candidates) from zones
        var uniqueZoneIds = regionsExtraData.GetUniqueZoneIds();
        Dictionary<uint, FateLocation> lmap = gameData.GetExcelSheet<TerritoryType>(Language.English)!
        .Where(tt => uniqueZoneIds.Contains(tt.RowId))
        .SelectMany(tt =>
        {
            try
            {
                var bgString = tt.Bg.RawString;
                var fateLgbPath = $"bg/{bgString.Substring(0, bgString.Length - 5)}/planevent.lgb";
                var lgbFile = gameData.GetFile<LgbFile>(fateLgbPath);

                return lgbFile?.Layers.SelectMany(l =>
                {
                    var layerName = l.Name;
                    return l.InstanceObjects
                        .Where(o => o.AssetType == Lumina.Data.Parsing.Layer.LayerEntryType.EventRange)
                        .Select(o =>
                        {
                            var pos = o.Transform.Translation;
                            return new FateLocation(o.InstanceId, pos.X, pos.Y, pos.Z, layerName, tt.RowId, false);
                        });
                }) ?? [];
            }
            catch (Exception e)
            {
                Console.Write($"{tt.RowId} {tt.Bg.RawString} {e}");
                return [];
            }
        })
        .ToDictionary(fl => fl.id, fl => fl);

        var fates = gameData.GetExcelSheet<Fate>(Language.English)!
            .Where(f => lmap.ContainsKey(f.Location))
            .Select(f => new FateResource(f, lmap[f.Location]));

        uniqueFateIds = fates.Select(f => f.id);

        var content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.
            
            type FateData = {
              readonly id: number
              readonly name: string
              readonly icon: string
              readonly eureka: number
              readonly rule: number
              readonly specialFate: boolean
              readonly x: number
              readonly y: number
              readonly z: number
              readonly zoneId: number
            }
            
            const fateData: FateData[] = {{ConvertToDataJson(fates, true)}}

            export { fateData, type FateData }

            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }
}
