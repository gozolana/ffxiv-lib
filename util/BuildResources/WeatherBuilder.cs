using System.Text;
using System.Text.Json;

using BuildResources;

using Lumina;
using Lumina.Excel.GeneratedSheets;

class WeatherRateResource(WeatherRate item)
{
    public class RateResource(uint weatherId, uint chance)
    {
        public uint weatherId { get; set; } = weatherId;
        public uint chance { get; set; } = chance;
    }

    public uint id { get; set; } = item.RowId;
    public RateResource[] rates { get; set; } = InitializeRates(item);

    private static RateResource[] InitializeRates(WeatherRate item)
    {
        RateResource[] temp = [
            new RateResource((uint)item.UnkData0[0].Weather, item.UnkData0[0].Rate),
            new RateResource((uint)item.UnkData0[1].Weather, item.UnkData0[1].Rate),
            new RateResource((uint)item.UnkData0[2].Weather, item.UnkData0[2].Rate),
            new RateResource((uint)item.UnkData0[3].Weather, item.UnkData0[3].Rate),
            new RateResource((uint)item.UnkData0[4].Weather, item.UnkData0[4].Rate),
            new RateResource((uint)item.UnkData0[5].Weather, item.UnkData0[5].Rate),
            new RateResource((uint)item.UnkData0[6].Weather, item.UnkData0[6].Rate),
            new RateResource((uint)item.UnkData0[7].Weather, item.UnkData0[7].Rate),
        ];
        return temp.Where(r => r.chance > 0).ToArray();
    }
}

class WeatherResource(Weather item) : BaseResource(item.RowId, item.Name)
{
    public string icon { get; set; } = $"{item.Icon:000000}";
}

class WeatherBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    private readonly RegionsExtraData regionsExtraData = ExtraDataUtil.ImportRegionsExtraData(projectPath);

    private uint[] uniqueWeatherIds = [];

    public SortedSet<uint> GetUniqueWeatherIds() => new(uniqueWeatherIds);

    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "weathers.data.ts");

        SortedSet<uint> uniqueZoneIds = [];
        uniqueZoneIds.UnionWith(regionsExtraData.huntRegions.SelectMany(r => r.zoneIds));
        uniqueZoneIds.UnionWith(regionsExtraData.weatherRegions.SelectMany(r => r.zoneIds));

        var uniqueWeatherRateIds = gameData.GetExcelSheet<TerritoryType>()!
        .Where(tt => uniqueZoneIds.Contains(tt.RowId))
        .Select(tt => (uint)tt.WeatherRate)
        .Order().Distinct();

        var weatherRates = gameData.GetExcelSheet<WeatherRate>()!
        .Where(wr => uniqueWeatherRateIds.Contains(wr.RowId))
        .Select(wr => new WeatherRateResource(wr));

        uniqueWeatherIds = weatherRates.SelectMany(wr => wr.rates)
        .Select(r => r.weatherId).Order().Distinct().ToArray();

        var weathers = gameData.GetExcelSheet<Weather>()!
        .Where(w => uniqueWeatherIds.Contains(w.RowId))
        .Select(w => new WeatherResource(w));

        var content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            {{ConvertToUnionTypeDefinition(weathers, "WeatherId", true)}}

            type WeatherData = {
              readonly id: WeatherId
              readonly icon: string
            }

            type WeatherRateData = {
              readonly id: number
              readonly rates: {
                readonly weatherId: WeatherId
                readonly chance: number
              }[]
            }

            const weathers: WeatherData[] = {{ConvertToDataJson(weathers)}}

            const weatherRates: WeatherRateData[] = {{ConvertToDataJson(weatherRates)}}

            export {
              WeatherId,
              weatherRates,
              weathers,
              type WeatherData,
              type WeatherRateData,
            }

            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }
}
