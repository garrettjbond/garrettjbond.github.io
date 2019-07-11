'use strict';


var storage = window.localStorage;

getGeoLocation(locale);
//this will get the current location by longitude and latitude
function getGeoLocation(){
    const status = document.getElementById('status');
    status.innerHTML = 'Getting location...';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
         const lat = position.coords.latitude;
         const long = position.coords.longitude;
      
         // Combine the values
         const locale = lat + "," + long;
         console.log(`Lat and Long are: ${locale}.`);
      
      
        })
       } else {
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
       } // end else    
} //end getGeoLocation 