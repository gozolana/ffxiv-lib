# Resource Builder

Powershell scripts to gererate resource files using [SaintCoinach](https://github.com/xivapi/SaintCoinach)

You should update the resources using this tool when

- New Game Patch is released
- New SaintCoinach version is released

You may also have to update the scripts depending on the changes they made with the new releases.

| File              | Descriptions |
| ----------------- | ------------ |
| SaintCoinach.psm1 |              |

## Tablesテーブルの関係

TerritoryType.csv
[int]$_.'#'                   : ZoneId (中央ラノシア 134)： Actで上がってくるID
[int]$_.'PlaceName{Region}' : Region用のPlaceNameId(ラノシア地方 502)
[int]$_.'PlaceName{Zone}' : Zone用のPlaceNameId(ラノシア 502)
[int]$_.PlaceName             : ZoneそのもののPlaceNameId(中央ラノシア 30)
[int]$\_.Map : Zone主マップ MapテーブルにIDと連動(中央ラノシア 15)

Map.csv
[int]$_.'#'                   : ZoneId (中央ラノシア 15)：
[int]$_.MapMarkerRange : MapMarkerRangeとの紐づけで必要
[string$_.Id : Mapのファイル名（中央ラノシアs1f1/00）直接は不要だが持っておく？
[int]$_.SizeFactor            : 座標変換で必要。95 or 100 or 200（中央ラノシア 100）
[int]$_.'Offset{X}' : 座標変換で必要
[int]$_.'Offset{Y}' : 座標変換で必要
[int]$_.'PlaceName{Region}'   : TerritoryTypeとの突き合わせ用？マージするなら必要なさそう
[int]$_.PlaceName : TerritoryTypeとの突き合わせ用？マージするなら必要なさそう
[int]$_.'PlaceName{Sub}' : 基本0ぽい
[int]$\_.TerritoryType : TerritoryTypeとの突き合わせ用？マージするなら必要なさそう

MapMarker.csv
[string]$_.'#'                : "[int].[int]"形式で、前半がMap.MapMakerRangeと紐づけ、後半がインデックス(0～連番)
[int]$_.X : 座標変換で必要
[int]$_.Y : 座標変換で必要
[string]$_.Icon               : '0' or '6xxxxx' 0は無視でよい？
[int]$_.'PlaceName{Subtext}' : 座標の名前
[int]$_.Type : ワンチャンス、フィルタで使える？

# , X, Y, Icon, PlaceName{Sub}, SubtextOrientation,MapMarkerRegion,Type,Data{Type},Data{Key}

74.0, 1358, 1150, 0, 161, 3,0,1,0,0,255,0 <- "ゼファードリフト"
74.1, 656, 996, 0, 162, 3,0,1,0,0,255,0 <- "サマーフォード"
74.2, 508, 536, 0, 163, 3,0,1,0,0,255,0 <- "スリーマルム・ベンド"
74.3, 980, 1166, 60442, 179, 1,0,0,0,0,255,0 <- "ゼファー陸門"
74.4, 894, 1106, 0, 182, 3,0,0,0,0,255,0 <- "ローグ川"
74.5, 1214, 1296, 60442, 183, 3,0,0,0,0,255,0 <- "ラザグラン関門"

MapSymbol.csv
[string]$_.Icon               : アイコンのシンボル
[int]$\_.PlaceName : アイコンそのものの名称(Aethryteとか)

# ,Icon,PlaceName,DisplayNavi

int32,Image,PlaceName,bit&01
0,0,0,False
1,60453,1230,True
2,60430,1231,True
