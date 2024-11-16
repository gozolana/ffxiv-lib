using System.Text;

using Lumina;
using Lumina.Excel.Sheets;

namespace BuildResources;

class DataCenterResource(uint id, string name, string color, uint regionId) : BaseResource(id, name)
{
    // Baseクラスではignoreしているため
    public new string name { get; set; } = name;
    public string color { get; set; } = color;
    public uint regionId { get; set; } = regionId;
}

class WorldResource(uint id, string name, uint dataCenterId) : BaseResource(id, name)
{
    // Baseクラスではignoreしているため
    public new string name { get; set; } = name;
    public uint dataCenterId { get; set; } = dataCenterId;
}

class WorldBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    public override void Extract()
    {
        string outputPath = Path.Join(projectPath, "src", "lib", "resources", "worlds.data.ts");

        var extraData = ExtraDataUtil.ImportDataCenterExtraData(projectPath);

        BaseResource[] dcrs = [
            new BaseResource(1, "Japan"),
            new BaseResource(2, "America"),
            new BaseResource(3, "Europe"),
            new BaseResource(4, "Oceania"),
        ];

        var dcs = gameData.GetExcelSheet<WorldDCGroupType>()!
        .Where(dc => dcrs.Select(dcr => dcr.id).Contains(dc.Region))
        .Select(dc =>
        {
            // 個別カラーを設定しているのは国内4DCのみ
            var color = extraData.ContainsKey(dc.Name.ToString()) ? extraData[dc.Name.ToString()].color : "";
            return new DataCenterResource(dc.RowId, dc.Name.ToString(), color, dc.Region);
        })!;

        var worlds = gameData.GetExcelSheet<World>()!
        .Where(world => Convert.ToBoolean(world.IsPublic) && dcs.Select(dc => dc.id).Contains(world.DataCenter.RowId))
        .Select(world => new WorldResource(world.RowId, world.Name.ToString(), world.DataCenter.RowId));

        string content = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            {{ConvertToUnionTypeDefinition(dcrs, "DataCenterRegionId")}}

            {{ConvertToUnionTypeDefinition(dcs, "DataCenterId")}}

            {{ConvertToUnionTypeDefinition(worlds, "WorldId")}}

            type DataCenterData = {
              readonly id: DataCenterId
              readonly name: string
              readonly color: string
              readonly regionId: DataCenterRegionId
            }

            type WorldData = {
              readonly id: WorldId
              readonly name: string
              readonly dataCenterId: DataCenterId
            }

            const dataCenters: DataCenterData[] = {{ConvertToDataJson(dcs)}}

            const worlds: WorldData[] = {{ConvertToDataJson(worlds)}}

            export {
              DataCenterId,
              DataCenterRegionId,
              WorldId,
              dataCenters,
              worlds,
              type DataCenterData,
              type WorldData,
            }

            """;
        File.WriteAllText(outputPath, content, Encoding.UTF8);
    }
}
