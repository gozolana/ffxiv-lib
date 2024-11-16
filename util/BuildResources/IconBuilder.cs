using System.Drawing;
using System.Drawing.Imaging;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;

using Lumina;
using Lumina.Excel.Sheets;

namespace BuildResources;

class IconTypeResource(string id, string name)
{
    public string id { get; set; } = id;
    public string name { get; set; } = name;
}

interface IIconResource
{
    string key { get; }
    string dataUri { get; }

    string WriteToFile(string directory);
}

class SvgIconResource(string key, string content) : IIconResource
{
    public string key { get; set; } = key;

    public string dataUri
    {
        get
        {
            return IconUtil.BuildSvgDataUri(content);
        }
    }

    protected string content { get; set; } = IconUtil.BuildSvg(content);

    public virtual string fileName
    {
        get
        {
            return $"{key}.svg";
        }
    }

    public virtual string WriteToFile(string directory)
    {
        string fullPath = Path.Join(directory, fileName);
        File.WriteAllText(fullPath, content, Encoding.UTF8);
        return fileName;
    }
}

class EliteIconResource(int id) : SvgIconResource(id.ToString(), BuildContent(id))
{
    public int id { get; set; } = id;

    public new string fileName
    {
        get
        {
            string name = Convert.ToString(id, 2).PadLeft(5, '0');
            return $"{name}.svg";
        }
    }

    private static string BuildContent(int id)
    {
        List<string> colors = [];
        if (((id >> 4) & 1) > 0) colors.Add("#f44336");
        if (((id >> 3) & 1) > 0) colors.Add("#ffeb3b");
        if (((id >> 2) & 1) > 0) colors.Add("#8bc34a");
        if (((id >> 1) & 1) > 0) colors.Add("#2196f3");
        if ((id & 1) > 0) colors.Add("#9c27b0");
        return IconUtil.BuildPiChart(colors);
    }

    public override string WriteToFile(string directory)
    {
        string fullPath = Path.Join(directory, fileName);
        File.WriteAllText(fullPath, content, Encoding.UTF8);
        return fileName;
    }
}

class PngIconResource(uint iconId, Bitmap bitmap) : IIconResource
{
    public uint iconId { get; set; } = iconId;

    private readonly Bitmap bitmap = bitmap;

    public string key
    {
        get
        {
            return $"{iconId:000000}";
        }
    }

    public string dataUri
    {
        get
        {
            using var ms = new MemoryStream();
            bitmap.Save(ms, ImageFormat.Png);
            return "data:image/png;base64," + Convert.ToBase64String(ms.ToArray());
        }
    }

    public string WriteToFile(string directory)
    {
        string fileName = $"{key}.png";
        string fullPath = Path.Join(directory, fileName);
        bitmap.Save(fullPath, ImageFormat.Png);
        return fileName;
    }
}

class IconBuilder(GameData gameData, string projectPath) : BaseBuilder(gameData, projectPath)
{
    public static string ConvertToUnionTypeDefinition(IEnumerable<IconTypeResource> resources, string name, bool sanitize = false)
    {
        Dictionary<string, string> hoge = [];
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

    public Bitmap GetIconBitmap(uint iconId)
    {
        var texFile = Lumina.Extensions.LuminaExtensions.GetIcon(gameData, iconId)!;
        var width = texFile.Header.Width;
        var height = texFile.Header.Height;
        var src = texFile.ImageData;
        if (width * height * 4 != src.Length)
        {
            throw new NotImplementedException("image format not supported");
        }
        var bmp = new Bitmap(width, height, PixelFormat.Format32bppArgb);
        var bmpd = bmp.LockBits(
            new Rectangle(0, 0, bmp.Width, bmp.Height),
            ImageLockMode.ReadWrite,
            bmp.PixelFormat
        );
        byte[] dst = new byte[bmpd.Stride * bmp.Height];
        Array.Copy(src, dst, Math.Min(src.Length, dst.Length));
        System.Runtime.InteropServices.Marshal.Copy(dst, 0, bmpd.Scan0, dst.Length);
        bmp.UnlockBits(bmpd);
        return bmp;
    }


    public override void Extract()
    {
        string outputPath1 = Path.Join(projectPath, "src", "lib", "resources", "icons.data.ts");
        string outputPath2 = Path.Join(projectPath, "src", "plugin", "resources", "icons.data.ts");

        IconTypeResource[] iconTypes = [
            new IconTypeResource("060453", "Aetheryte"),
            new IconTypeResource("060004", "Mob"),
            new IconTypeResource("060421", "PartyMember"),
            new IconTypeResource("060443", "Player"),
            new IconTypeResource("060437", "Mining"),
            new IconTypeResource("060438", "Quarrying"),
            new IconTypeResource("060432", "Logging"),
            new IconTypeResource("060433", "Harvesting"),
            new IconTypeResource("060445", "Fishing"),
            new IconTypeResource("060954", "Up"),
            new IconTypeResource("060955", "Down"),
            new IconTypeResource("060561", "Flag"),
            new IconTypeResource("060905", "CairnOfReturn"),
            new IconTypeResource("060906", "CairnOfReturnActive"),
            new IconTypeResource("060907", "CairnOfPassage"),
            new IconTypeResource("060908", "CairnOfPassageActive"),
            new IconTypeResource("060913", "GoldCoffer"),
            new IconTypeResource("060912", "SilverCoffer"),
            new IconTypeResource("060911", "BronzeCoffer"),
            new IconTypeResource("060403", "PlotGreen"),
            new IconTypeResource("060444", "PlotWhite"),
            new IconTypeResource("060442", "Pin"),
            new IconTypeResource("060424", "PlotYellow"),
            new IconTypeResource("060422", "PlotRed"),
            new IconTypeResource("060358", "TriangleGreen"),
            new IconTypeResource("060361", "TriangleBlue"),
            new IconTypeResource("060360", "TriangleYellow"),
            new IconTypeResource("060359", "TriangleRed"),
            new IconTypeResource("060402", "TrapYellow"),
            new IconTypeResource("060401", "TrapRed"),
            new IconTypeResource("060918", "Num1"),
            new IconTypeResource("060919", "Num2"),
            new IconTypeResource("060920", "Num3"),
            new IconTypeResource("060921", "Num4"),
            new IconTypeResource("060922", "Num5"),
            new IconTypeResource("060923", "Num6"),
            new IconTypeResource("060924", "Num7"),
            new IconTypeResource("060925", "Num8"),
            new IconTypeResource("SB", "SB"),
            new IconTypeResource("SS", "SS"),
            new IconTypeResource("CheckMine", "CheckMine"),
            new IconTypeResource("CheckOthers", "CheckOthers"),
            new IconTypeResource("CheckUnknown", "CheckUnknown"),
        ];

        var eliteIcons = (new int[31]).Select((_, index) => new EliteIconResource(index + 1));

        Dictionary<string, string> elites = eliteIcons.ToDictionary(i => i.key, i => i.dataUri, StringComparer.OrdinalIgnoreCase);

        SvgIconResource[] svgIcons = [
            new SvgIconResource("SB", IconUtil.BuildRhombus("#607d8b")),
            new SvgIconResource("SS", IconUtil.BuildHexagon("#607d8b")),
            new SvgIconResource("CheckLime", IconUtil.BuildCheck("lime")),
            new SvgIconResource("CheckRoyalBlue", IconUtil.BuildCheck("royalblue")),
            new SvgIconResource("CheckGrey", IconUtil.BuildCheck("grey")),
        ];

        var iconIds = gameData.GetExcelSheet<Weather>(Lumina.Data.Language.English)!
            .Where(w => w.Icon > 0).Select(w => (uint)w.Icon);
        iconIds = iconIds.Concat(gameData.GetExcelSheet<MapSymbol>(Lumina.Data.Language.English)!
            .Where(w => w.Icon > 0).Select(w => (uint)w.Icon));
        iconIds = iconIds.Concat(gameData.GetExcelSheet<Fate>(Lumina.Data.Language.English)!
            .Where(w => w.MapIcon > 0).Select(w => w.MapIcon));
        iconIds = iconIds.Concat(iconTypes.Where(t => Regex.IsMatch(t.id, @"\d{6}")).Select(t => uint.Parse(t.id)));
        iconIds = iconIds.Order().Distinct();

        var pngIcons = iconIds.Select(iconId => new PngIconResource(iconId, GetIconBitmap(iconId)));
        Dictionary<string, string> icons = svgIcons.Concat<IIconResource>(pngIcons).ToDictionary(i => i.key, i => i.dataUri, StringComparer.OrdinalIgnoreCase);

        string content1 = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            {{ConvertToUnionTypeDefinition(iconTypes, "IconId")}}

            export { IconId }
            
            """;

        File.WriteAllText(outputPath1, content1, Encoding.UTF8);

        string content2 = $$"""
            // THIS CODE IS AUTO GENERATED.
            // DO NOT EDIT.

            const elite: Record<number, string> = {{Regex.Replace(JsonSerializer.Serialize(elites, UnsafeSerializerOptions), "\"([a-zA-Z][a-zA-Z0-9]*)\": +", "$1: ")}}

            const icon: Record<string, string> = {{Regex.Replace(JsonSerializer.Serialize(icons, UnsafeSerializerOptions), "\"([a-zA-Z][a-zA-Z0-9]*)\": +", "$1: ")}}

            export { elite, icon }

            """;

        File.WriteAllText(outputPath2, content2, Encoding.UTF8);

        // output to assets directory for preview. not required in the production since the actual images are embedded as dataUri.
        IEnumerable<IIconResource> allIcons = [];
        allIcons = allIcons.Concat(eliteIcons).Concat(svgIcons).Concat(pngIcons);
        OutputPreview(allIcons);
    }

    public void OutputPreview(IEnumerable<IIconResource> allIcons)
    {
        string directory = Path.Join(projectPath, "assets", "icons");
        if (Directory.Exists(directory))
        {
            Directory.Delete(directory, true);
        }
        Directory.CreateDirectory(directory);

        var fileNames = allIcons.Select(icon => icon.WriteToFile(directory));
        var liTags = fileNames.Select(fileName => $"<li><img class=\"middle\" src=\"./{fileName}\" />{fileName}</li>");

        string previewHtml = Path.Join(directory, "preview.htm");

        string content = $$"""
            <!doctype html>
            <html lang="ja">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <style rel="stylesheet" type="text/css">
                img.middle {
                    vertical-align: middle;
                }
                </style>
                <title>Icons Preview</title>
            </head>
            <body>
                <ul>
                {{string.Join('\n', liTags)}}
                </ul>
            </body>
            </html>
            """;

        File.WriteAllText(previewHtml, content, Encoding.UTF8);
    }
}
