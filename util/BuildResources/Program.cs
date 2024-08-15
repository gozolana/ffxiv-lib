using Lumina;

namespace BuildResources;

class Program
{
    static void Main(params string[] args)
    {
        Console.WriteLine($"Curent Direcotry: {Directory.GetCurrentDirectory()}");
        var gameData = new GameData(@"C:\Program Files (x86)\SquareEnix\FINAL FANTASY XIV - A Realm Reborn\game\sqpack");
        var projectPath = @"D:\GitHub\ffxiv-lib";

        new ExVersionBuilder(gameData, projectPath).Extract();
        new WorldBuilder(gameData, projectPath).Extract();
        new IconBuilder(gameData, projectPath).Extract();
        new MobBuilder(gameData, projectPath).Extract();
        new WeatherBuilder(gameData, projectPath).Extract();


    }
}
