
var map;
var marker;
var current;

var chicago={lat: 41.8781, lng:  87.6298}
var Dubai={lat: 25.2048, lng: 55.2708};
var LosAngelas={lat: 34.0522, lng: 118.2437};

var locations=["chicago", "Dubia"];

function myMap() {
	current={lat: 41.8781, lng: 87.6298};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom:12,
	center: chicago});
	marker = new google.maps.Marker({
		position:chicago,
		animation:google.maps.Animation.DROP,
	map: map });
}

function travel(location, my_locations) {
	map.panTo(location);
	map.setZoom(15);
	marker = new google.maps.Marker({
		position: location,
			animation:google.maps.Animation.BOUNCE,
		map: map
	});
	if(my_locations==locations[0]){
		document.getElementById("description").innerHTML="SOUTH CHICAGO"
	}
	else if(my_locations==locations[1]){
		document.getElementById("description").innerHTML=""
	}
	else {
		document.getElementById("description").innerHTML=null;
	}
}
