using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;

using BuildResources;

using Lumina;
using Lumina.Excel.Sheets;

class MessageBuilder(GameData gameData, string projectPath, SortedSet<uint> uniqueBNpcNameIds, SortedSet<uint> uniqueWeatherIds, SortedSet<uint> uniquePlaceNameIds, SortedSet<uint> uniqueFateIds, Dictionary<uint, uint> placeNameIdToZoneId) : BaseBuilder(gameData, projectPath)
{
    private readonly RegionsExtraData regionsExtraData = ExtraDataUtil.ImportRegionsExtraData(projectPath);
    private readonly Dictionary<string, MessageExtraData> ttsExtraData = ExtraDataUtil.ImportTTSExtraData(projectPath);
    private readonly SortedSet<uint> uniqueBNpcNameIds = uniqueBNpcNameIds;
    private readonly SortedSet<uint> uniqueWeatherIds = uniqueWeatherIds;
    private readonly SortedSet<uint> uniquePlaceNameIds = uniquePlaceNameIds;
    private readonly SortedSet<uint> uniqueFateIds = uniqueFateIds;
    private readonly Dictionary<uint, uint> placeNameIdToZoneId = placeNameIdToZoneId;


    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "messages.data.ts");

        Dictionary<string, MessageExtraData> message = [];
        message["ja"] = new MessageExtraData();
        message["en"] = new MessageExtraData();
        message["de"] = new MessageExtraData();
        message["fr"] = new MessageExtraData();

        Dictionary<string, Lumina.Data.Language> langMap = new() {
            {"ja", Lumina.Data.Language.Japanese},
            {"en", Lumina.Data.Language.English},
            {"de", Lumina.Data.Language.German},
            {"fr", Lumina.Data.Language.French}
        };

        foreach (var lang in message.Keys)
        {
            message[lang].BNpcName = gameData.GetExcelSheet<BNpcName>(langMap[lang])!
            .Where(m => uniqueBNpcNameIds.Contains(m.RowId))
            .ToDictionary(m => m.RowId.ToString(), m => m.Singular.ToString());

            message[lang].PlaceName = gameData.GetExcelSheet<PlaceName>(langMap[lang])!
            .Where(m => uniquePlaceNameIds.Contains(m.RowId))
            .ToDictionary(m => m.RowId.ToString(), m => m.Name.ToString());

            message[lang].ZoneName = gameData.GetExcelSheet<PlaceName>(langMap[lang])!
            .Where(m => placeNameIdToZoneId.ContainsKey(m.RowId))
            .OrderBy(m => placeNameIdToZoneId[m.RowId])
            .ToDictionary(m => placeNameIdToZoneId[m.RowId].ToString(), m => m.Name.ToString());

            message[lang].Weather = gameData.GetExcelSheet<Weather>(langMap[lang])!
            .Where(m => uniqueWeatherIds.Contains(m.RowId))
            .ToDictionary(m => m.RowId.ToString(), m => m.Name.ToString());

            message[lang].Fate = gameData.GetExcelSheet<Fate>(langMap[lang])!
            .Where(m => uniqueFateIds.Contains(m.RowId))
            .ToDictionary(m => m.RowId.ToString(), m => m.Name.ToString());

            message[lang].Region = regionsExtraData.regions
            .ToDictionary(m => m.key, m => m.name[lang]);

            message[lang].ExVersion = gameData.GetExcelSheet<ExVersion>(langMap[lang])!
            .ToDictionary(m => m.RowId.ToString(), m => m.Name.ToString());
        }

        var messageJson = Regex.Replace(JsonSerializer.Serialize(message, UnsafeSerializerOptions), "\"([a-zA-Z0-9]*)\": +", "$1: ");

        var ttsJson = Regex.Replace(JsonSerializer.Serialize(ttsExtraData, UnsafeSerializerOptions), "\"([a-zA-Z0-9]*)\": +", "$1: ");

        var content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            const TLang = ['ja', 'en', 'de', 'fr'] as const
            type TLang = (typeof TLang)[number]

            type TMessage = {
              readonly BNpcName: Record<number, string>
              readonly PlaceName: Record<number, string>
              readonly ZoneName: Record<number, string>
              readonly Weather: Record<number, string>
              readonly Fate: Record<string, string>
              readonly Region: Record<string, string>
              readonly ExVersion: Record<number, string>
            }

            const messages: Record<TLang, TMessage> = {{messageJson}}

            const tts: Partial<Record<TLang, TMessage>> = {{ttsJson}}

            export { TLang, messages, tts, type TMessage }

            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }
}
