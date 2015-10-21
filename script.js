var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.53762, lng: 13.39597},
    zoom: 8
  });
}

$(document).ready(function(){
  $(window).stellar();

});
