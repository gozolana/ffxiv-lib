using System.Text.Json;

namespace BuildResources;

/// <summary>
/// data フォルダ配下のjsonファイルから関連する追加情報を読み込む時の型
/// </summary>
public class ExVersionExtraData
{
    public uint version { get; set; }
    public float locationClusteringThreshold { get; set; }
    public required string color { get; set; }
}

public class DataCenterExtraData
{
    public required string color { get; set; }
}

public class FieldZonesExtraData
{
    public class LocationExtraData
    {
        public required string label { get; set; }
        public required double x { get; set; }
        public required double y { get; set; }
        public required double z { get; set; }
        public required string flag { get; set; }
    }

    public class EliteExtraData
    {
        public string[]? _comment;
        public required uint[] ids { get; set; }
        public required LocationExtraData[] locations { get; set; }
    }

    public class SSExtraData
    {
        public required uint[] ids { get; set; }
        public required LocationExtraData[] locations { get; set; }
    }

    public class FateExtraData
    {
        public required uint[] ids { get; set; }
    }


    public bool? filter { get; set; }

    public required EliteExtraData elite { get; set; }

    public SSExtraData? ss { get; set; }

    public FateExtraData? fate { get; set; }
}

public class RespawnMinutesExtraData
{
    public required int min { get; set; }
    public required int max { get; set; }
}

public class RegionsExtraData
{
    public class RegionsData
    {
        public required string key { get; set; }
        public required Dictionary<string, string> name { get; set; }
        public required string backgroundColor { get; set; }
        public required string color { get; set; }
    }

    public class KeyToZoneIds
    {
        public required string key { get; set; }
        public required uint[] zoneIds { get; set; }
    }

    public required RegionsData[] regions { get; set; }
    public required KeyToZoneIds[] huntRegions { get; set; }
    public required KeyToZoneIds[] weatherRegions { get; set; }

}

public class MessageExtraData
{
    public Dictionary<string, string> BNpcName { get; set; } = [];
    public Dictionary<string, string> PlaceName { get; set; } = [];
    public Dictionary<string, string> ZoneName { get; set; } = [];
    public Dictionary<string, string> Weather { get; set; } = [];
    public Dictionary<string, string> Region { get; set; } = [];
    public Dictionary<string, string> ExVersion { get; set; } = [];
}

public static class ExtraDataUtil
{
    public static Dictionary<string, ExVersionExtraData> ImportExVersionExtraData(string projectPath)
    {
        string inputPath = Path.Join(projectPath, "data", "exVersions.json");
        return JsonSerializer.Deserialize<Dictionary<string, ExVersionExtraData>>(File.ReadAllText(inputPath))!;
    }

    public static Dictionary<string, DataCenterExtraData> ImportDataCenterExtraData(string projectPath)
    {
        string inputPath = Path.Join(projectPath, "data", "dataCenterColors.json");
        return JsonSerializer.Deserialize<Dictionary<string, DataCenterExtraData>>(File.ReadAllText(inputPath))!;
    }

    public static Dictionary<string, FieldZonesExtraData> ImportFieldZonesExtraData(string projectPath)
    {
        string inputPath = Path.Join(projectPath, "data", "fieldZones.json");
        return JsonSerializer.Deserialize<Dictionary<string, FieldZonesExtraData>>(File.ReadAllText(inputPath))!;
    }
    public static RegionsExtraData ImportRegionsExtraData(string projectPath)
    {
        string inputPath = Path.Join(projectPath, "data", "regions.json");
        return JsonSerializer.Deserialize<RegionsExtraData>(File.ReadAllText(inputPath))!;
    }
    public static Dictionary<string, RespawnMinutesExtraData> ImportRespawnMinutesExtraData(string projectPath)
    {
        string inputPath = Path.Join(projectPath, "data", "respawnMinutes.json");
        return JsonSerializer.Deserialize<Dictionary<string, RespawnMinutesExtraData>>(File.ReadAllText(inputPath))!;
    }
    public static Dictionary<string, MessageExtraData> ImportTTSExtraData(string projectPath)
    {
        string inputPath = Path.Join(projectPath, "data", "tts.json");
        return JsonSerializer.Deserialize<Dictionary<string, MessageExtraData>>(File.ReadAllText(inputPath))!;
    }
}
