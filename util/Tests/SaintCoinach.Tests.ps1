BeforeAll {
  $SEPARATOR = [IO.Path]::DirectorySeparatorChar
  $modulePath = [IO.Path]::GetFullPath($local:PSCommandPath).
  Replace("$($SEPARATOR)Tests$($SEPARATOR)", $SEPARATOR).
  Replace('.Tests.ps1', '.psm1')
    
  Import-Module $modulePath -Force
}

Describe 'ConvertTo-SafeLiteral' {
  Context 'Normal Case' {
    It 'satinize <literal> to <expected>' -TestCases @(
      @{ Literal = 'Dust Storms'; Expected = 'DustStorms' }
      @{ Literal = 'Sandstorms'; Expected = 'Sandstorms' }
      @{ Literal = 'Galvanth''s Spire'; Expected = 'GalvanthsSpire' }
      @{ Literal = 'The Thousand Maws of Toto-Rak'; Expected = 'TheThousandMawsOfTotoRak' }
      @{ Literal = 'No Man''s Hovel'; Expected = 'NoMansHovel' }
      @{ Literal = 'Three-malm Bend'; Expected = 'ThreeMalmBend' }
      @{ Literal = 'Ul''dah Dispatch Yard'; Expected = 'UldahDispatchYard' }
      @{ Literal = 'Zanr''ak Altar'; Expected = 'ZanrakAltar' }
      @{ Literal = 'Carline Canopy (Adventurers'' Guild)'; Expected = 'CarlineCanopyAdventurersGuild' }
      @{ Literal = 'A-4 Outpost'; Expected = 'A4Outpost' }
      @{ Literal = 'A Realm Reborn'; Expected = 'ARealmReborn' }
      @{ Literal = 'Belah''dian knight'; Expected = 'BelahdianKnight' }
      @{ Literal = 'temple mummy'; Expected = 'TempleMummy' }
    ) {
      sanitize $Literal | Should -BeExactly $Expected
    }
  }
  Context 'Error Case' {
    It 'throws when First Letter is not alphabet' {
      { sanitize '7th Cohort centurion' } | Should -Throw
    }
  }
}

Describe 'ConvertTo-UnionTypeDefinition' {
  Context 'Normal Case' {
    It 'converts' -TestCases @(
      @{
        Name     = 'TExVersion';
        Items    = @(
          @{ id = 0; name = 'A Realm Reborn' },
          @{ id = 1; name = 'Heavensward' },
          @{ id = 2; name = 'Stormblood' },
          @{ id = 3; name = 'Shadowbringers' },
          @{ id = 4; name = 'Endwalker' }
        );
        Expected = 
        @'
const TExVersion = {
    ARealmReborn: 0,
    Heavensward: 1,
    Stormblood: 2,
    Shadowbringers: 3,
    Endwalker: 4
} as const;
type TExVersion = (typeof TExVersion)[keyof typeof TExVersion];
'@
      }
    ) {
      ConvertTo-UnionTypeDefinition -Items $Items -Name $Name | Should -Be $Expected
    }
  }
}
