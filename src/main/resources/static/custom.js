let map;
let busNumber;
let contentString = "<h2> Vehicle#: " + busNumber + "</h2>";

function initMap() {
  let infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  let image = {
    url:
      "http://maps.google.com/mapfiles/kml/shapes/",
    scaledSize: new google.maps.Size(40, 40),
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: parseFloat(userLocation.lat), lng: parseFloat(userLocation.lng) },
    zoom: 15,
    scrollwheel: false
  });

  for (i = 0; i < busLocations.length; i++) {
    busNumber = busLocations[i].VEHICLE;

    var marker = new google.maps.Marker({
      position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
      map: map,
      icon: image,

    });
  
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

}

}
