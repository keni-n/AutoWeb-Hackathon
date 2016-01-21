# Webとクルマのハッカソン 開発環境 ReadMe

## Doc

* W3C Vehicle API について
** URL
** WG説明
** 来歴、現状、ロードマップなども？

* Vehicle API システム構成図(実車でのシステム＋ハッカソン用システムの対比)
** 車+CarTomo+DataBroker+Polyfill+ブラウザ
** Vehicle APIを実現した仕組みの説明

* 利用可能なデータ項目リスト

## SDK
- ハッカソン向けに準備した開発環境の説明
- 机上でVehicleAPIをエミュレートする仕組み
- ControlUIなどツールの操作手順
- サンプルの紹介(こういうサンプルがあります)

* ハッカソン開発環境
** 構成図(node.js, websocket, polyfill, controllUI, hackathonアプリの関係を図示)
** 使用手順はSampleで説明

### 走行データ閲覧ツール
** 地図、グラフから、使いたいイベントが含まれるデータを探せる
1. [MapTool](http://52.193.125.145:3000/MapTool/osm_mapping.html) を開く
2. ドロップダウンから適当なデータを選択する

### Control-UI
1. [Control-UI](http://52.193.125.145:3000/cluster/controlindex.html?json=20151221-asakusa-skytree.json) を開く
2. `RoomID` のところにユニークな文字列を入れ、`Connect`をクリック
3. ドロップダウンから適当なデータを選択し、YouTubeコンテンツ内の再生ボタンをクリック
4. データが配信されるので、メーターやハンドルなどが動くのを確認する

## ApplicationSample
* [vehicleSpeed](http://52.193.125.145:3000/www/ApplicationSample/vehicleSpeed.html) ([ソースコード](https://github.com/access-company/AutoWeb-Hackathon/blob/master/ApplicationSample/vehicleSpeed.html))
* [location](http://52.193.125.145:3000/www/ApplicationSample/location.html) ([ソースコード](https://github.com/access-company/AutoWeb-Hackathon/blob/master/ApplicationSample/location.html))

## ApplicationSample 使用手順
* 書く？

** ControlUI + サンプルを動かしてもらうことで、開発環境の使い方を理解してもらう 

## 走行データ

* 走行データのリスト？(データ閲覧ツールのドロップダウンを参照してもらえば不要？)

## その他記載すべき事項 (参加者の多くが疑問に感じる事項は記載しておく)
* instantConsumptionの単位はg/s。ただし、燃料噴射は瞬間的なもので、1secなど連続するものではなく
　2000g/secという値を取ったとしても、1秒で2kgの燃料を消費するわけではない。

* Altitudeの値は誤差が大きい

