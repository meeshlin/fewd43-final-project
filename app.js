$(document).ready(function() {

  $(document).on("click", ".page-scroll", function(event) {
    event.preventDefault(); //Prevent the default "flash"
    var target = $(this).attr("href");
    $("body").animate({
      scrollTop:$(target).offset().top
    } ,1000); //Time in milliseconds to make the scroll slower
    $("body").scrollspy({target:"#mainNav"})
  });

});

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(44.475883,-73.212074),
          zoom: 10,
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var image = 'img/Pin.png';
        var myLatLng = new google.maps.LatLng(44.475883,-73.212074);
        var farmMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
            });
}
google.maps.event.addDomListener(window, 'load', initialize);
