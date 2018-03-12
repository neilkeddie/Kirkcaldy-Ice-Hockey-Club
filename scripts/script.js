function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(56.1329, -3.1341), zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
