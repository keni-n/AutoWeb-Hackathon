//"use strict"

var arryVehicleSpeed = []; 
var arryVehicleSpeedLv2 = []; 
var arryVehicleSpeedLv3 = []; 
var arryLat = []; 
var arryLatLv2 = []; 
var arryLatLv3 = []; 
var arryLng = [];
var arryLngLv2 = [];
var arryLngLv3 = [];
var tmp = null, tmp2=null, tmp3=null;
var o = {};

// its-demo用シナリオでEmergency状態になる時刻を指定
//TODO: あとで調整
var tmEmergencyStart = 1453440591521; //14.05minから
var tmEmergencyEnd =   1453440621312; //14.35まで

// its-demo用シナリオでSensitiveLoactionと判定される区域を
// Lan/Lngで指定
//TODO: 仮置きにつき、あとで調整
var latSensitiveMin = 35.708;
var latSensitiveMax = 35.710;

var lngSensitiveMin = 139.809;
var lngSensitiveMax = 139.810;

var fnAxisConv_VehicleSpeed = function(d,i) {
  var ret = d / 1000;
  return ret;
}

var fnRoundDecimal5th = function(d,i) {
  var ret = Math.round(d * 100000);
  ret = (ret/100000).toFixed(3);
  return ret;
}

var clearGraph = function() {
    arryVehicleSpeed.splice(0,    arryVehicleSpeed.length);
    arryVehicleSpeedLv2.splice(0, arryVehicleSpeedLv2.length);
    arryVehicleSpeedLv3.splice(0, arryVehicleSpeedLv3.length);

    arryLat.splice(0,    arryLat.length);
    arryLatLv2.splice(0, arryLatLv2.length);
    arryLatLv3.splice(0, arryLatLv3.length);

    arryLng.splice(0,    arryLng.length);
    arryLngLv2.splice(0, arryLngLv2.length);
    arryLngLv3.splice(0, arryLngLv3.length);
}

var vehicleSpeedSub = navigator.vehicle.vehicleSpeed.subscribe(function(vehicleSpeed) {

  var tm=null;
  var val=null, val2=null, val3=null;

  console.log("vehicle speed changed to: " + vehicleSpeed.speed);
  tm  = Number(vehicleSpeed.timeStamp);
  //val=0の時、グラフが枠線にかかると見にくいので +500 した
  val = Number(vehicleSpeed.speed) + 500;

  //再度先頭から再生する場合にグラフをクリアする工夫
  //以下の場合グラフをクリアして先頭から描画する
  // - 時間が過去に遡った場合
  // - timeStampが3secスキップした場合

  if (arryVehicleSpeed[arryVehicleSpeed.length-1] !== undefined) {
    if (Math.abs(arryVehicleSpeed[arryVehicleSpeed.length-1].time - tm) > 3000 ||
        (tm - arryVehicleSpeed[arryVehicleSpeed.length-1].time) < 0 ) {
        clearGraph();
    }
  }

  // PrivacyLevel1?のデータでは40km以上の速度は40kmに丸める
  val2 = val > 40000 ? 40000 : val;
  if  ((tm - tmEmergencyStart > 0) && (tmEmergencyEnd - tm > 0)) {
    val3 = val;
  }else{
    val3 = null;
  }
  tmp =  {"time":tm, "value":val};
  tmp2 = {"time":tm, "value":val2};
  tmp3 = {"time":tm, "value":val3};
  arryVehicleSpeed.push(   {"time":tm, "value":val });
  arryVehicleSpeedLv2.push({"time":tm, "value":val2});
  if (val3 !== null)
    arryVehicleSpeedLv3.push({"time":tm, "value":val3});

  document.getElementById("VehicleSpeed").innerHTML = Math.floor(vehicleSpeed.speed /1000);

  //グラフ描画
  //VehicleSpeed

  //Lv1
  o.dataSet = arryVehicleSpeed;
  o.svgId = "svgVehicleSpeed";
  o.title = "VehicleSpeed[km/h]";
  o.startTime = arryVehicleSpeed[0].time;
  o.endTime = arryVehicleSpeed[arryVehicleSpeed.length - 1].time;
  o.minVal = 0;
  o.maxVal = 50000;
  o.fnYAxisConv = fnAxisConv_VehicleSpeed;
  o.xTranslate = 20;
  o.lineClass = "clsLineVSpeed";
  drawGraphObj(o);

  //Lv2
  o.dataSet = arryVehicleSpeedLv2;
  o.svgId = "svgVehicleSpeedLv2";
  drawGraphObj(o);

  //Lv3
  o.dataSet = arryVehicleSpeedLv3;
  o.svgId = "svgVehicleSpeedLv3";
  drawGraphObj(o);

});

var latSub = navigator.vehicle.location.subscribe(function(location) {
  console.log("latitude changed to: " + location.latitude);
  console.log("longitude changed to: " + location.longitude);

  var tm=null;
  var lat=null, lat1=null, lat2=null;
  var lng=null, lng1=null, lng3=null;

  tm = Number(location.timeStamp);
  lat = Number(location.latitude);
  lng = Number(location.longitude);

  //SensitiveLocationについてはLan,Lngとも条件を満たしたらぼかすことにしてみる
  if ((lat > latSensitiveMin) && ( lat < latSensitiveMax) &&
    (lng > lngSensitiveMin) && ( lng < lngSensitiveMax)) {
      lat2 = (Math.floor(lat*10)) / 10;
      lng2 = (Math.floor(lng*10)) / 10;
    } else {
      lat2 = lat;
      lng2 = lng;
    }

  if  ((tm - tmEmergencyStart > 0) && (tmEmergencyEnd - tm > 0)) {
    lat3 = lat;
  } else {
    lat3 = null;
  }
  if  ((tm - tmEmergencyStart > 0) && (tmEmergencyEnd - tm > 0)) {
    lng3 = lng;
  } else {
    lng3 = null;
  }

  tmp = {"time": tm, "value": lat};
  tmp2 = {"time": tm, "value": lat2};
  tmp3 = {"time": tm, "value": lat3};
  arryLat.push(tmp);
  arryLatLv2.push(tmp2);
  if (lat3 !== null)
    arryLatLv3.push(tmp3);

  tmp = {"time": tm, "value": lng};
  tmp2 = {"time": tm, "value": lng2};
  tmp3 = {"time": tm, "value": lng3};
  arryLng.push(tmp);
  arryLngLv2.push(tmp2);
  if (lng3 !== null)
    arryLngLv3.push(tmp3);

  document.getElementById("Latitude").innerHTML = Math.floor(location.latitude * 100000)/100000;
  document.getElementById("Longitude").innerHTML = Math.floor(location.longitude * 100000)/100000;

  //ここでグラフ再描画

  //Lat
  o.dataSet = arryLat;
  o.svgId = "svgLat";
  o.title = "Lat[deg]";
  o.startTime = arryLat[0].time;
  o.endTime = arryLat[arryLat.length - 1].time;
  o.minVal = 35.690;
  o.maxVal = 35.720;
  o.fnYAxisConv = fnRoundDecimal5th;
  o.xTranslate = 50;
  o.lineClass = "clsLineLat";
  drawGraphObj(o);

  o.dataSet = arryLatLv2;
  o.svgId = "svgLatLv2";
  drawGraphObj(o);

  o.dataSet = arryLatLv3;
  o.svgId = "svgLatLv3";
  drawGraphObj(o);

  //Lng
  o.dataSet = arryLng;
  o.svgId = "svgLng";o.title = "Lng[deg]";
  o.startTime = arryLng[0].time;
  o.endTime = arryLng[arryLng.length - 1].time;
  o.minVal = 139.795;
  o.maxVal = 139.815;
  o.fnYAxisConv = fnRoundDecimal5th;
  o.xTranslate = 50;
  o.lineClass = "clsLineLng";
  drawGraphObj(o);

  o.dataSet = arryLngLv2;
  o.svgId = "svgLngLv2";
  drawGraphObj(o);

  o.dataSet = arryLngLv3;
  o.svgId = "svgLngLv3";
  drawGraphObj(o);

});

