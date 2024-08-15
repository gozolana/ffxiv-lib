using Lumina;

namespace BuildResources;

class Program
{
    static void Main(params string[] args)
    {
        Console.WriteLine($"Curent Direcotry: {Directory.GetCurrentDirectory()}");
        var gameData = new GameData(@"C:\Program Files (x86)\SquareEnix\FINAL FANTASY XIV - A Realm Reborn\game\sqpack");
        var projectPath = @"D:\GitHub\ffxiv-lib";

        var exVersionBuilder = new ExVersionBuilder(gameData, projectPath);
        var worldBuilder = new WorldBuilder(gameData, projectPath);
        var iconBuilder = new IconBuilder(gameData, projectPath);
        var mobBuilder = new MobBuilder(gameData, projectPath);
        var weatherBuilder = new WeatherBuilder(gameData, projectPath);
        var zoneBuilder = new ZoneBuilder(gameData, projectPath);

        exVersionBuilder.Extract();
        worldBuilder.Extract();
        iconBuilder.Extract();
        mobBuilder.Extract();
        weatherBuilder.Extract();
        zoneBuilder.Extract();

        var messageBuilder = new MessageBuilder(gameData, projectPath,
            mobBuilder.GetUniqueBNpcNameIds(),
            weatherBuilder.GetUniqueWeatherIds(),
            zoneBuilder.GetUniquePlaceNameIds(),
            zoneBuilder.GetPlaceNameIdToZoneId()
        );
        messageBuilder.Extract();
    }
}
