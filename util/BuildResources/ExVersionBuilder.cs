using System.ComponentModel.Design.Serialization;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks.Dataflow;

using Lumina;
using Lumina.Data;
using Lumina.Excel.GeneratedSheets;

namespace BuildResources;

/// <summary>
/// data フォルダ配下のjsonファイルから関連する追加情報を読み込む時の型
/// </summary>
class ExVersionExtraData
{
    public uint version { get; set; }
    public float locationClusteringThreshold { get; set; }
    public required string color { get; set; }
}

class ExVersionResource(uint id, string name, ExVersionExtraData data) : BaseResource(id, name)
{
    public uint version { get; set; } = data.version;
    public float locationClusteringThreshold { get; set; } = data.locationClusteringThreshold;
    public string color { get; set; } = data.color;
}

class ExVersionBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "exVersions.data.ts");

        string inputPath = Path.Join(projectPath, "data", "exVersions.json");

        var extraData = JsonSerializer.Deserialize<Dictionary<string, ExVersionExtraData>>(File.ReadAllText(inputPath))!;

        var exVersions = gameData.GetExcelSheet<ExVersion>(Language.English)!.Select(res => new ExVersionResource(res.RowId, res.Name, extraData[res.Name]!));

        string content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            {{ConvertToUnionTypeDefinition(exVersions, "ExVersionId", true)}}

            type ExVersionData = {
              readonly id: ExVersionId
              readonly version: number
              readonly locationClusteringThreshold: number
              readonly color: string
            }

            const exVersions: ExVersionData[] = {{ConvertToDataJson(exVersions)}}

            export { ExVersionId, exVersions, type ExVersionData }
            
            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }
}