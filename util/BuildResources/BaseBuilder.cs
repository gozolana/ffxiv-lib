
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;
using System.Text.Unicode;

using Lumina;

namespace BuildResources;

class BaseResource(uint id, string name)
{
    [JsonPropertyOrder(-1)]
    public uint id { get; set; } = id;

    [JsonIgnore]
    public string name { get; set; } = name;
}

abstract class BaseBuilder(GameData gameData, string projectPath)
{
    protected GameData gameData = gameData;

    protected string projectPath = projectPath;

    public abstract void Extract();
    public static JsonSerializerOptions SerializerOptions = new()
    {
        Encoder = JavaScriptEncoder.Create(UnicodeRanges.All),
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        WriteIndented = true,
    };

    public static JsonSerializerOptions UnsafeSerializerOptions = new()
    {
        Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        WriteIndented = true
    };

    public static string ConvertToUnionTypeDefinition(IEnumerable<BaseResource> resources, string name, bool sanitize = false)
    {
        Dictionary<string, uint> hoge = [];
        foreach (var resource in resources)
        {
            if (sanitize)
            {
                hoge[Regex.Replace(resource.name, "[^a-zA-Z0-9_]", "")] = resource.id;
            }
            else
            {
                hoge[resource.name] = resource.id;
            }
        }
        string jsonString = Regex.Replace(JsonSerializer.Serialize(hoge, SerializerOptions), "\"([a-zA-Z][a-zA-Z0-9]*)\": +", "$1: ");
        return $$"""
        const {{name}} = {{jsonString}} as const
        type {{name}} = (typeof {{name}})[keyof typeof {{name}}]
        """;
    }

    public static string ConvertToDataJson<T>(IEnumerable<T> resources)
    {
        return Regex.Replace(JsonSerializer.Serialize(resources, SerializerOptions), "\"([a-zA-Z][a-zA-Z0-9]*)\": +", "$1: ");
    }
}