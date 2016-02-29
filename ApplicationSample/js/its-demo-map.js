var map;
var marker = [];
var gCount = 0;
var polyline = [];
var polylinePoints = [];
var polylineOptions = {
        color: 'blue',
        weight: 3,
        opacity: 0.9
};

//Extend the Default marker class
var redCarIcon = L.Icon.Default.extend({
   options: {
         iconUrl: './img/redcar.png',
         iconSize:  [36, 24],
         iconAnchor: [20, 10],
         popupAnchor: [-5, -30]
   }
});
var redCarIcon = new redCarIcon();

var baloonIcon = L.Icon.Default.extend({
   options: {
         iconUrl: './img/gmap-baloon.png',
         //オフセットはITS報告会シナリオ用に調整済み
         iconSize:  [50, 50],
         iconAnchor: [36, 39],
         popupAnchor: [-5, -30]
   }
});
var baloonIcon = new baloonIcon();

function initMap() {

  //TODO:初期値を直値で入れている @ 幕張
  //initLatitude = 35.650495;
  //initLongitude = 140.03604833333;
  //ITSデモ用、初期値をスカイツリー近辺に
  initLatitude = 35.71517;
  initLongitude = 139.80146;

  //map = L.map('map').setView([initLatitude, initLongitude], 16);
  map = L.map('map').setView([initLatitude, initLongitude], 17);

  //OSMレイヤー追加
  L.tileLayer(
  	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  	{
  		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
  		maxZoom: 17
  	}
  ).addTo(map);
}

function clearMap() {
  var i=0;
  for(i=0; i<gCount; i++){
    map.removeLayer(marker[i]);
  }
  polylinePoints.splice(0, gCount);//gCountの数が、マーカーの数

  for(i=1; i<gCount; i++){
    map.removeLayer(polyline[i]);
  }
  polyline.splice(0, gCount);

  gCount=0;
}

function addMarker2(vspeed, espeed, latitude, longitude) {
  var zIn = 0;
  if(gCount > 0){
    map.removeLayer(marker[gCount-1]);
  }
  
  if(latitude === "" || longitude === ""){
    return;
  }
  
  marker[gCount] = L.marker([latitude, longitude])
    //.setIcon(redCarIcon)
    .setIcon(baloonIcon)

    .bindPopup("<h3>Vehicle Speed: " + vspeed + "km/h" + "</h3><h3>Engine Speed:  " + espeed + "rpm</h3>")
    .addTo(map)
    .openPopup();
  
  zIn = gCount * 10; // gCountをそのままsetZIndexOffset()に与えても新しいマーカーが必ずしも上にならないので、大きな差をつける。
  marker[gCount].setZIndexOffset(zIn);//マーカーにz-indexを設定
  map.panTo(new L.latLng(latitude, longitude));//地図の自動移動
  
  gCount++; 
}

