using System.Text;

using BuildResources;

using Lumina;
using Lumina.Excel.GeneratedSheets;


class MapResource(Map item)
{
    public uint id = item.RowId;
    public uint mapMarkerId = item.MapMarkerRange;
    public string name = item.Id;
    public uint sizeFactor = item.SizeFactor;
    public int offsetX = item.OffsetX;
    public int offsetY = item.OffsetY;
    public uint placeName_retion = item.PlaceNameRegion.Row;
    public uint placeName = item.PlaceName.Row;
    public uint placeName2 = item.PlaceNameSub.Row;
    public uint territoryType = item.TerritoryType.Row;
}

class MapMarkerResource(MapMarker item)
{
    public uint markerId = item.RowId;
    public int x { get; } = item.X;
    public int y { get; } = item.Y;
    public uint placeNameId { get; } = item.PlaceNameSubtext.Row;
    public string icon { get; } = item.Icon == 0 ? "" : $"{item.Icon:000000}";
}

class ZoneResource(TerritoryType item, MapResource map, int offsetZ, IEnumerable<MapMarkerResource> markers)
{
    public uint id { get; set; } = item.RowId;
    public uint regionPlaceNameId { get; } = item.PlaceNameRegion.Row;
    public uint zonePlaceNameId { get; } = item.PlaceNameZone.Row;
    public uint weatherRateId { get; } = item.WeatherRate;
    public uint sizeFactor { get; } = map.sizeFactor;
    public int offsetX { get; } = map.offsetX;
    public int offsetY { get; } = map.offsetY;
    public int offsetZ { get; } = offsetZ;
    public IEnumerable<MapMarkerResource> markers { get; } = markers;
    public uint exVersionId { get; } = item.ExVersion.Row;

    public bool? filter { get; set; }
    public FieldZonesExtraData.EliteExtraData? elite { get; set; }
    public FieldZonesExtraData.SSExtraData? ss { get; set; }
    public FieldZonesExtraData.FateExtraData? fate { get; set; }
}

class RegionResource(string key, uint[] zoneIds, RegionsExtraData.RegionsData region)
{
    public string key { get; } = key;
    public uint[] zoneIds { get; } = zoneIds;
    public string color { get; } = region.color;
    public string bgColor { get; } = region.backgroundColor;
}

class ZoneBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    private readonly Dictionary<string, FieldZonesExtraData> fieldZoneExtraData = ExtraDataUtil.ImportFieldZonesExtraData(projectPath);
    private readonly RegionsExtraData regionsExtraData = ExtraDataUtil.ImportRegionsExtraData(projectPath);

    private readonly Dictionary<uint, uint> placeNameIdToZoneId = [];

    private readonly SortedSet<uint> uniquerPlaceNameIds = [];

    public Dictionary<uint, uint> GetPlaceNameIdToZoneId() => new(placeNameIdToZoneId);

    public SortedSet<uint> GetUniquePlaceNameIds() => new(uniquerPlaceNameIds);

    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "zones.data.ts");

        SortedSet<uint> uniqueZoneIds = [];
        uniqueZoneIds.UnionWith(regionsExtraData.huntRegions.SelectMany(r => r.zoneIds));
        uniqueZoneIds.UnionWith(regionsExtraData.weatherRegions.SelectMany(r => r.zoneIds));

        var zoneIdToOffsetZ = gameData.GetExcelSheet<TerritoryTypeTransient>()!
        .Where(tt => uniqueZoneIds.Contains(tt.RowId))
        .ToDictionary(tt => tt.RowId, tt => (int)tt.OffsetZ);

        var mapIdToMap = gameData.GetExcelSheet<Map>()!
        .Where(m => uniqueZoneIds.Contains(m.TerritoryType.Row))
        .ToDictionary(m => m.RowId, m => new MapResource(m));

        var mapMarkerIds = mapIdToMap.Values.Select(mm => mm.mapMarkerId)
        .Order().Distinct();

        var mapMarkers = gameData.GetExcelSheet<MapMarker>()!
        .Where(mm => mapMarkerIds.Contains(mm.RowId) && (mm.Icon != 0 || mm.PlaceNameSubtext.Row != 0))
        .Select(mm => new MapMarkerResource(mm));

        var allZones = gameData.GetExcelSheet<TerritoryType>()!
        .Where(tt => uniqueZoneIds.Contains(tt.RowId))
        .Select(tt =>
        {
            placeNameIdToZoneId[tt.PlaceName.Row] = tt.RowId;
            uniquerPlaceNameIds.Add(tt.PlaceName.Row);
            uniquerPlaceNameIds.Add(tt.PlaceNameRegion.Row);
            uniquerPlaceNameIds.Add(tt.PlaceNameZone.Row);

            var offsetZ = zoneIdToOffsetZ[tt.RowId];
            var map = mapIdToMap[tt.Map.Row];
            var markers = mapMarkers.Where(mm => mm.markerId == map.mapMarkerId);
            return new ZoneResource(tt, map, offsetZ, markers);
        });

        var zones = allZones.Where(z => !fieldZoneExtraData.ContainsKey(z.id.ToString()));
        var fieldZones = allZones.Where(z => fieldZoneExtraData.ContainsKey(z.id.ToString()))
        .Select(z =>
        {
            var extraData = fieldZoneExtraData[z.id.ToString()];
            if (extraData.filter == true)
            {
                z.filter = true;
            }
            if (extraData.elite != null)
            {
                z.elite = extraData.elite;
            }
            if (extraData.ss != null)
            {
                z.ss = extraData.ss;
            }
            if (extraData.fate != null)
            {
                z.fate = extraData.fate;
            }
            return z;
        });

        var regionKeyToRegion = regionsExtraData.regions.ToDictionary(r => r.key, r => r);
        var huntRegions = regionsExtraData.huntRegions.Select(r => new RegionResource(r.key, r.zoneIds, regionKeyToRegion[r.key]));
        var weatherRegions = regionsExtraData.weatherRegions.Select(r => new RegionResource(r.key, r.zoneIds, regionKeyToRegion[r.key]));

        var content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            type MarkerData = {
              readonly x: number;
              readonly y: number;
              readonly placeNameId: number;
              readonly icon: string;
            };

            type ZoneData = {
              readonly id: number;
              readonly regionPlaceNameId: number;
              readonly zonePlaceNameId: number;
              readonly weatherRateId: number;
              readonly sizeFactor: number;
              readonly offsetX: number;
              readonly offsetY: number;
              readonly offsetZ: number;
              readonly markers: MarkerData[];
              readonly exVersionId: number;
            };

            type LocationWithFlag = {
              readonly label: string;
              readonly x: number;
              readonly y: number;
              readonly z: number;
              readonly flag: string;
            };

            type FieldZoneData = ZoneData & {
              readonly filter?: boolean;
              readonly elite: {
                readonly ids: number[];
                readonly locations: LocationWithFlag[];
              };
              readonly ss?: {
                readonly ids: number[];
                readonly locations: LocationWithFlag[];
              };
              readonly fate?: {
                readonly ids: number[];
              };
            };

            type RegionData = {
              readonly key: string;
              readonly zoneIds: number[];
              readonly color: string;
              readonly bgColor: string;
            };

            const zoneData: {
              zones: ZoneData[];
              fieldZones: FieldZoneData[];
            } = {
              zones: {{ConvertToDataJson(zones)}},
              fieldZones: {{ConvertToDataJson(fieldZones)}},
            }

            const regionData: {
              huntRegions: RegionData[];
              weatherRegions: RegionData[];
            } = {
              huntRegions: {{ConvertToDataJson(huntRegions)}},
              weatherRegions: {{ConvertToDataJson(weatherRegions)}},
            }

            export {
              regionData,
              zoneData,
              type FieldZoneData,
              type MarkerData,
              type RegionData,
              type ZoneData,
            };

            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }



}
