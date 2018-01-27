# Webとクルマのハッカソン2018 開発環境 ReadMe
## 1.まえがき
W3C において仕様策定中の W3C Vehicle API の早期実装環境を利用して、自動車の発生する様々なデータを使用したWebアプリケーションを構想し実際に開発することで、自動車とWebを組み合わせた新鮮なアイデアを創発することを目的とします。

## 2.W3C Vehicle API について
### 2.1 W3C Vehicle API とは
自動車が発生する様々な情報をWebアプリケーションから利用可能にすることを目的とするAPI。<br>
本APIを定義することを目的の一つとして、2013年に [Automotive and Web Platform Business Group](https://www.w3.org/community/autowebplatform/) が発足した。<br>
その後 API の定義は [W3C Automotive Working Group](https://www.w3.org/auto/wg/)に引き継がれ、現在は2018年のfirst halfを目途に仕様の勧告化を目標に活動している。<br>
注）W3C Vehicle API は、以降に述べる通り VISS(Vehicle Information Service Specification)と VIAS(Vehicle Information API Specification)の２つの部分から構成される仕様だが、本頁では簡潔さのために、まとめて W3C Vehicle API と表記します

### 2.2 W3C Vehicle APIの構成
W3C Vehicle APIは、以降に述べる2つの仕様から構成される。<br>
下図は W3C Vehicle APIのユースケースの一つのイメージ図である。
<img src="https://github.com/access-company/AutoWeb-Hackathon/raw/master/doc/images/VISS_image.png" width="600px">

### A. VISS (Vehicle Information Service Specification)
https://w3c.github.io/automotive/vehicle_data/vehicle_information_service.html<br>
図のXXX部分の通信にあたる。<br>
VISSが定義するAPIでは、JSON形式のリクエストメッセージおよびレスポンスメッセージを、Vehicle Information Service Server(VISServer)とクライアントWebアプリケーションがやり取りすることで、車両情報が提供される。<br>
### B. VIAS (Vehicle Information API Specification)
https://w3c.github.io/automotive/vehicle_information_api/vehicle_information_api_specification.html<br>
図のxxx部分の通信にあたる。<br>
VIASが定義するAPIでは、クライアントWebアプリケーションは、通信で交換されるメッセージのフォーマット等を意識せず、より抽象的なインターフェースで車両情報が提供される。
* VISS/VIASの両APIともに、下層では車両情報を提供するサーバとの通信が行われるため、APIは非同期な動作を基本とする。<br>
VIASでは、利便性のため JavaScriptのPromise形式のAPIも利用可能となっている。
### 2.3 VSSとDataPath 
[VSS (Vehicle Signal Specification)](https://github.com/GENIVI/vehicle_signal_specification) は、GENIVI Alliance が定義する 車両のデータモデルの仕様。<br>
図のようにツリー構造で車両全体のデータを網羅する。<br>
VISS/VIASでは、利用対象の車両データを指定するために VSS が定義するデータモデルのツリー構造、名前付けを利用する。<br>
注）GENIVI Alliance はIVIシステム（次世代車載情報通信システム）の標準化を目指す非営利団体。欧州の自動車メーカーが中心に設立した。<br>
<img src="https://github.com/access-company/AutoWeb-Hackathon/raw/master/doc/images/vss.png" width="600px">

## 3.ハッカソン2018開発環境
対象車両: TOYOTA Prius 3rd generation<br>
TOYOTA Priusでのテスト走行により走行データを収集しました<br>
<img src="https://github.com/access-company/AutoWeb-Hackathon/raw/master/doc/images/prius_side.jpg" width="600px">
### 3.1 システム構成
<img src="https://github.com/access-company/AutoWeb-Hackathon/raw/master/doc/images/h2018_system.png" width="800px">

### 3.2 使用可能API
VISS/VIAS仕様では多数のAPIが定義されているが、本ハッカソンでは以下のものが使用可能。

|*API*|*説明*|
|:----------|:----------|
|connect|VISServerへのWebSocket接続を確立する  |
|disconnect|VISServerへのWebSocket接続を切断する |
|get|データパスを指定して、車両データを取得する |
|subscribe|データパスを指定して、車両データの継続的な通知を受ける |
|unsubscribe|登録した subscribe を解除する |
|unsubscribeAll|登録済みの全ての subscribe を解除する |

### 3.3 使用可能DataPath
4.使用可能データ項目 を参照してください

### 3.4 システムの使用手順

#### A. Control-UIの実行
##### 1. Google Chromeブラウザで Control-UIを開く。<br>
(例：http://52.91.85.165:3000/cluster/controlindex.html?json=20180104-1542_okunikko-ski_kegon-no-taki.json)<br>
【注】http://52.91.85.165:3000/cluster/controlindex.html のようなパラメータなしのURLでのアクセスは避けてください。

* 1stサーバ:
http://52.91.85.165:3000/cluster/controlindex.html?json=20180104-1542_okunikko-ski_kegon-no-taki.json
* 2ndサーバ:
http://52.200.145.70:3000/cluster/controlindex.html?json=20180104-1542_okunikko-ski_kegon-no-taki.json
* 3rdサーバ:
http://18.218.22.209:3000/cluster/controlindex.html?json=20180104-1542_okunikko-ski_kegon-no-taki.json

<img src="https://github.com/access-company/AutoWeb-Hackathon/raw/master/doc/images/ctrl-ui.png" width="500px">

##### 2．Control-UI上で、自分が使用するユニークなIDを roomID ボックスに入力、Connectボタンを押す。
（他の利用者と重複しやすいID（例：12345, abcde他）は避けてください。
確実に重複を避けるためにはメールアドレスの使用が有効です。）

##### 3. 左上のリストボックスから、利用したい走行パターンを選択する。
   動画画面上で再生ボタンを押すと、動画がスタートすると同時に、車両データの配信が開始します。
##### 動画が再生されない等トラブルの場合はページリロードして再度操作を試してください。

#### B. サンプルソースの実行
##### 1. ApplicationSampleのソースをgithubから取得する<br>
`$ git clone https://github.com/access-company/AutoWeb-Hackathon.git`

##### 2. サンプルソース（例：subscribeSpeed_callback.html）中のVISS_IPを、使用するサーバのIP（例：52.91.85.165）に変更する
* PORTは 3001 に固定

##### 3. ROOMI_IDを Control-UIに設定した値に変更する。

##### 4. 各自のHTTPサーバー(e.g. Apache, python SimpleHTTPServer, etc.)に配置する
（ハッカソン環境をホストするサーバーは、参加者のWebアプリケーション配置用に開放していませんので、各自でHTTPサーバーをご準備ください）<br>
簡易なHTTPサーバーとして python の SimpleHTTPServer の場合は下記を実行

    $ cd ApplicationSample
    $ python -m SimpleHTTPServer

##### 5. サンプルソースをChromeブラウザで起動する。サーバーから走行データが配信されると画面に表示される。
（例：上記のpython の simpleHTTPServer を使った場合、defaultのポートが8000なので URLは以下<br>
http://127.0.0.1:8000/subscribeSpeed_callback.html）

##### 6. ApplicationSample/viasTestAll.html サンプルを使用すると、ハッカソン環境で利用可能なデータ項目全ての配信を確認できる。
　使用手順は上記の subscribeSpeed_callback.html と同じ。

#### C. MapTool
各走行パターンのデータを、地図とグラフ表示で一覧するツール。利用したいデータの変化(例えば急加速、急減速など)が含まれる走行パターンを探すことができる。<br>
<img src="https://github.com/access-company/AutoWeb-Hackathon/raw/master/doc/images/maptool.png" width="500px">

* 1stサーバ:
http://52.91.85.165:3000/MapTool/osm_mapping.html
* 2ndサーバ:
http://52.200.145.70:3000/MapTool/osm_mapping.html
* 3rdサーバ:
http://18.218.22.209:3000/MapTool/osm_mapping.html

##### 操作手順
1. MapToolのURLをChromeブラウザで開く
2. 画面上のドロップダウンリストから走行パターンを選択する
3. 走行パターンのデータが、地図上へのマッピングとグラフにより表示される<br>
注) 取り扱うjsonファイルが大きいため、表示まで時間がかかる場合があります

#### D. その他

##### 走行データのダウンロード利用
* 走行データファイル全体をローカルにダウンロードして利用することも可能です。<br>
走行データは本githubの以下パスに配置してあり、リポジトリのクローンにより取得できます。<br>
    * https://github.com/access-company/AutoWeb-Hackathon.git
        * json/YYYYMMDD-xxxxxx.json

##### Vehicle API利用コード例

###### get() (callback style)
ApplicationSample/getSpeed_callback.html 参照

    vias.get('Signal.Drivetrain.Transmission.Speed',
    function(_val) {
      // Get success
      document.getElementById("VehicleSpeed").innerHTML = Math.floor(_val /1000);
    },
    function(_err) {
      // Get error
      document.getElementById("VehicleSpeed").innerHTML = "get error";
    });

###### get() (promise style)
ApplicationSample/getSpeed_promise.html 参照

    vias.get('Signal.Drivetrain.Transmission.Speed').then((_val) => {
      // Get success
      console.log("speed = "_val /1000);
    }).catch((_err) => {
      console.log("Error" + _err);
    });

###### subscribe()
ApplicationSample/subscribe_callback.html 参照

    vias.subscribe('Signal.Drivetrain.Transmission.Speed',
    function(_val) {
      console.log("speed = "_val /1000);
    },
    function(_err) {
      console.log("Error" + _err);
    });

* 取得可能データのDataPathについては以下ファイルに定義があります<br>
https://github.com/access-company/AutoWeb-Hackathon/ApplicationSample/viasTestAll.html

### サンプルコード
サンプルコードは、本リポジトリの以下パスに格納されています。<br>
https://github.com/access-company/AutoWeb-Hackathon/tree/master/ApplicationSample

### ハッカソンサーバ
負荷分散のため、サーバは複数インスタンスを準備しました。<br>
下記 IPアドレスを指定して使用してください。<br>
* Server1: 52.91.85.165
* Server2: 52.200.145.70
* Server3: 18.218.22.209

## 4.使用可能データ項目
### 車両データ

|*interface*|*attribute*|*unit*|*備考*|
|:----------|:----------|:------------|:------------|
|VehicleSpeed|  speed|m/h|車両速度  |
|EngineSpeed|   speed|rpm|エンジン回転数  |
|VehiclePowerModeType| value|- |イグニッションの状態。offとrunningのみ取得可。<br>0:off, 1:running, 2:accessory, 3:accesory2, 4:engine-cranking|
|AccelerationPedalPosition| value|%|  |
|Transmission|  mode|- |グラフ上はGearと表示。取得状況が不安定な場合があります。<br> -1:reverse, 0:neutral, 1:parking, 2:low, 3:drive|
|LightStatus|   head|- |0:off, 1:on|
||  brake|- |0:off, 1:on|
||  parking|- |0:off, 1:on<br>取得状況が不安定な場合があります|
|Fuel|  level|%|燃料残量|
||  instantConsumption|g/sec |燃料消費量 |
|Acceleration|  x|G |左右方向加速度（座標系説明参照）  |
||  y|G |進行方向加速度（座標系説明参照）  |
||  z|G |鉛直方向加速度（座標系説明参照）<br>重力により静止時 +1G が加わる  |
|Gyro|  x(pitch)|degree/sec |角速度(座標系説明参照) |
||  y(roll)|degree/sec |角速度(座標系説明参照)  |
||  z(yaw)|degree/sec |角速度(座標系説明参照) |
|SteeringWheel|angle|degree|left: plus, right:minus   |
|BrakeOperation|    brakePedalDepressed|0/1| 0:off, 1:on    |
|Odometer|  distanceTotal|km |総走行距離  |
|Door|  status|- |front-right, front-leftのみ。0:open, 1:close|
|Seat|  seatbelt|- |front-rightのみ。0:open, 1:fastened|
|ParkingBrake|  status|- |0:off, 1:on|
|Gps|   latitude|degree|緯度|
||  longitude|degree |経度  |
||  altitude|m|高度(精度に制限があり参考値となります)|
||  heading|degree|North:0, East:990, South:180, West:270    |
||  speed|km/h|GPS情報から計算した移動速度  |

### センサー類

|*interface*|*attribute*|*unit*|*備考*|
|:----------|:----------|:------------|:------------|
|JINS MEME|Awakeness(Driver)|0-100|運転者の覚醒度  |
||Attentiveness(Driver)|0-100|運転者の注意レベル  |
||Awakeness(Passenger)|0-100|助手席同乗者の覚醒度  |
||Attentiveness(Passenger)|0-100|助手席同乗者の注意レベル  |
||Awakeness(Backseat)|0-100|後部座席同乗者の覚醒度  |
||Attentiveness(Backseat)|0-100|後部座席同乗者の注意レベル  |
|Sdtech|Concentration|0-100|運転者集中度  |
|iWatch|Heartrate|拍/分|心拍数  |
|iPhone|AtomPressure|kPa|大気圧  |
||Altitude|m|iPhoneセンサによる高度  |
|MESH|Temerature|celsius|車内気温  |
||Humidity|%|車内湿度  |
||Trunk|0 / 1|トランク開閉(0:閉、1:開)  |
|BOCCO|Window|0 / 1|運転席窓開閉(0:閉、1:開)  |
||Aircon|0 / 1|エアコンOn/Off(0:Off、1:On)  |

### 仕様可能DataPath
DataPathの文字列は、サンプルアプリの一つ [viasTestAll.html](https://github.com/access-company/AutoWeb-Hackathon/blob/master/ApplicationSample/viasTestAll.html) に定義の記載がありますので、そちらを参照、利用してください。






## 5.使用センサー

* 気圧・気温・センサー
MESH(温度/湿度センサー、ボタンセンサー)を利用しています。

MESHセンサーの紹介動画はこちらです。
https://youtu.be/Bbk86wGizqw

MESHセンサー →　iPhone → IFTTT → google spread sheet →変換スクリプト →  クラウド
という構成で取得しています。

* BOCCOセンサー
Bocco → iPhone →　ｍｙthings  → IFTTT → google spread sheet →変換スクリプト → クラウド
という構成で取得しています。

BOCCOセンサーの紹介動画はこちらです。
https://www.youtube.com/watch?v=k-e6gyyUr7k&feature=youtu.be

*気圧センサー
iPhoneの気圧センサーのデータです。

*心拍数センサー
AppleWatchの心拍数のデータを変換しています。


## 6.走行リスト
走行パターンリスト
* 利用可能な走行パターン（経路、発生イベント)については下記リストをご参照ください。<br>
 また各走行パターンのデータの詳細についてはマップツールでご確認ください。
    * 走行パターンリスト(2015.11～2016.1:センサー系データなし) [link](https://github.com/access-company/AutoWeb-Hackathon/blob/master/doc/files/course_list.pdf)
    * 走行パターンリスト(2016.11～2017.1:JINS MEMEのみあり) [link](https://github.com/access-company/AutoWeb-Hackathon/blob/master/doc/files/course_list2017.pdf)
    * 走行パターンリスト(2017.11～2018.1:センサー系データあり) [link](https://automotiveweb2018.slack.com/files/U8SLD1J6P/F8ZH459C2/_________2018.xlsx)

* 
## 7.マッシュアップAPI
各協賛APIの詳細については、Slackの各社チャンネルでご確認ください。
https://automotiveweb2018.slack.com/messages/C8SNY3JQ4/

slackへのサインアップは下記からお願いします。
https://join.slack.com/t/automotiveweb2018/shared_invite/enQtMjk5ODUyOTIxNjU1LWNlZWU0OTgxYzZmYjUxMWFjMjZjODQ1ZDdmOTI5ZmNhMjVmMmU4ZWNmN2VhMGEzODZkZDdmOTBjODM0ZWIyYTc


