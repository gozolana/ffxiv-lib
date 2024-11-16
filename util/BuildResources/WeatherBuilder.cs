using System.Text;

using BuildResources;

using Lumina;
using Lumina.Excel.Sheets;

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
            new RateResource(item.Weather[0].RowId, item.Rate[0]),
            new RateResource(item.Weather[1].RowId, item.Rate[1]),
            new RateResource(item.Weather[2].RowId, item.Rate[2]),
            new RateResource(item.Weather[3].RowId, item.Rate[3]),
            new RateResource(item.Weather[4].RowId, item.Rate[4]),
            new RateResource(item.Weather[5].RowId, item.Rate[5]),
            new RateResource(item.Weather[6].RowId, item.Rate[6]),
            new RateResource(item.Weather[7].RowId, item.Rate[7]),
        ];
        return temp.Where(r => r.chance > 0).ToArray();
    }
}

class WeatherResource(Weather item) : BaseResource(item.RowId, item.Name.ToString())
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
