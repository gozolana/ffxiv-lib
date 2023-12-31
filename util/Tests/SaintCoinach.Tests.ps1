BeforeAll {
  $SEPARATOR = [IO.Path]::DirectorySeparatorChar
  $modulePath = [IO.Path]::GetFullPath($local:PSCommandPath).
  Replace("$($SEPARATOR)Tests$($SEPARATOR)", $SEPARATOR).
  Replace('.Tests.ps1', '.psm1')
    
  Import-Module $modulePath -Force
}

Describe 'satinize' {
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
      ConvertTo-UnionTypeDefinition -Items $Items -Name $Name -Sanitize | Should -Be $Expected
    }
  }
}

Describe 'path' {
  Context 'Normal Case' {
    It 'path (<a1>, <a2> to <expected>' -TestCases @(
      @{ A1 = 18; A2 = 90; Expected = 'M 16,16 L 30.27,20.64 A 15,15 0 0,1 16,31 Z' }
      @{ A1 = 135; A2 = 225; Expected = 'M 16,16 L 5.39,26.61 A 15,15 0 0,1 5.39,5.39 Z' }
      @{ A1 = 180; A2 = 0; Expected = 'M 16,16 L 1,16 A 15,15 0 0,1 31,16 Z' }
      @{ A1 = 90; A2 = 210; Expected = 'M 16,16 L 16,31 A 15,15 0 0,1 3.01,8.5 Z' }
    ) {
      path -Angle1 $A1 -Angle2 $A2 | Should -BeExactly $Expected
    }
  }
}

Describe 'svgPIChart' {
  It 'generates PIChart with <count> colors' -TestCases @(
    @{ Count = 5; Colors = @('A', 'B', 'C', 'D', 'E'); Expected = 
      @'
<g stroke="black">
    <path fill="A" d="M 16,16 L 7.18,3.86 A 15,15 0 0,1 24.82,3.86 Z" />
    <path fill="B" d="M 16,16 L 1.73,20.64 A 15,15 0 0,1 9.19,2.63 Z" />
    <path fill="C" d="M 16,16 L 24.82,3.86 A 15,15 0 0,1 30.27,20.64 Z" />
    <path fill="D" d="M 16,16 L 16,31 A 15,15 0 0,1 1.73,20.64 Z" />
    <path fill="E" d="M 16,16 L 30.27,20.64 A 15,15 0 0,1 16,31 Z" />
</g>
'@ 
    }
    @{ Count = 4; Colors = @('F', 'G', 'H', 'I'); Expected = 
      @'
<g stroke="black">
    <path fill="F" d="M 16,16 L 5.39,5.39 A 15,15 0 0,1 26.61,5.39 Z" />
    <path fill="G" d="M 16,16 L 5.39,26.61 A 15,15 0 0,1 5.39,5.39 Z" />
    <path fill="H" d="M 16,16 L 26.61,5.39 A 15,15 0 0,1 26.61,26.61 Z" />
    <path fill="I" d="M 16,16 L 26.61,26.61 A 15,15 0 0,1 5.39,26.61 Z" />
</g>
'@ 
    }
    @{ Count = 3; Colors = @('J', 'K', 'L'); Expected = 
      @'
<g stroke="black">
    <path fill="J" d="M 16,16 L 3.01,8.5 A 15,15 0 0,1 28.99,8.5 Z" />
    <path fill="K" d="M 16,16 L 16,31 A 15,15 0 0,1 3.01,8.5 Z" />
    <path fill="L" d="M 16,16 L 28.99,8.5 A 15,15 0 0,1 16,31 Z" />
</g>
'@
    }
    @{ Count = 2; Colors = @('M', 'N'); Expected = 
      @'
<g stroke="black">
    <path fill="M" d="M 16,16 L 1,16 A 15,15 0 0,1 31,16 Z" />
    <path fill="N" d="M 16,16 L 31,16 A 15,15 0 0,1 1,16 Z" />
</g>
'@
    }
    @{ Count = 1; Colors = @('O'); Expected = 
      @'
<circle stroke="black" fill="O" cx="16" cy="16" r="15" />
'@
    }
  ) {
    svgPIChart -Colors $Colors | Should -BeExactly $Expected
  }
}

Describe 'svgRhombus' {
  It 'generates rhomubs' {
    svgRhombus -Color 'red' | 
      Should -BeExactly '<polygon stroke="black" fill="red" points="1, 16 16, 1 31, 16 16, 31" />'
  }
}

Describe 'svgHexagon' {
  It 'generates hexagon' {
    svgHexagon -Color 'blue' | 
      Should -BeExactly '<polygon stroke="black" fill="blue" points="24.66,16 28.99,23.5 20.33,23.5 16,31 11.67,23.5 3.01,23.5 7.34,16 3.01,8.5 11.67,8.5 16,1 20.33,8.5 28.99,8.5" />'
  }
}

Describe 'svgCheck' {
  It 'generates check' {
    svgCheck -Color 'green' | 
      Should -BeExactly '<path stroke="black" fill="green" d="M 7,11 L 13,17 L 24,6 L 29,11 L 13,27 L 2,16 Z"/>'
  }
}
