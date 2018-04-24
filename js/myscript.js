var map;
var marker;
var current;
var chicago = {lat: 41.887855, lng: -87.630347};
var dubai = {lat: 25.2048, lng: 55.2708};
var losAngelas = {lat: 34.0522, lng: -118.2437};
var chicago = {lat: 41.8781, lng:  -87.6298};
var places = ["chicago", "dubai", "losAngelas", "chicago"];

function initMap() {
  current = {lat: 41.887855, lng: -87.630347};
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: current
  });

  marker = new google.maps.Marker({
  position: current,
  map: map
  });
}

function goto(location, title){
  map.panTo(location);
  map.setZoom(12);
  marker = new google.maps.Marker({
  position: location,
  map: map
  });
  if (title==places[0]){
    document.getElementById("demo").innerHTML = "Chicago, this has been home for all of my life.";
    }
  else if (title==places[1]){
    document.getElementById("demo").innerHTML = "Dubai, I would love to travel, and posibly work here.";
    }
  else if (title==places[2]){
    document.getElementById("demo").innerHTML = "LosAngelas, California in United States Home of Holly Wood";
    }
  else if (title==places[3]){
    document.getElementById("demo").innerHTML = "Chicago, home of the Cubs.";
    }
  else
    {
    document.getElementById("demo").innerHTML = null;
    }
}
