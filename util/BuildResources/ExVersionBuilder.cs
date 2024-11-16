using System.Text;

using Lumina;
using Lumina.Data;
using Lumina.Excel.Sheets;

namespace BuildResources;

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

        var extraData = ExtraDataUtil.ImportExVersionExtraData(projectPath);

        var exVersions = gameData.GetExcelSheet<ExVersion>(Language.English)!.
            Select(res => new ExVersionResource(res.RowId, res.Name.ToString(), extraData[res.Name.ToString()]!));

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