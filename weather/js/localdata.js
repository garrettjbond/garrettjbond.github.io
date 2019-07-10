"use strict";

console.log("test1");
let pageNav = document.getElementById('page-nav');
let statusContainer = document.getElementById('status');
let contentContainer = document.getElementById('main-content');
let weatherURL = "./js/weather.json";

console.log("test2");
fetchData(weatherURL);

console.log("test3");
function fetchData(weatherURL) {
  let cityName = 'Greenville'; // The data we want from the weather.json file
  fetch(weatherURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Network response was not OK.');
    })
    .then(function (data) {
      // Check the data object that was retrieved
      console.log(data);
      // data is the full JavaScript object, but we only want the greenville part
      // shorten the variable and focus only on the data we want to reduce typing
      let g = data[cityName];

      // ************ Get the content ******************************
      console.log("before getting content")
      // Get the location data
      let locName = g.City;
      let locState = g.State;
      let locPstlCode = g.Zip;
      let elev = g.Elevation;
      let lat = g.Latitude;
      let long = g.Longitude; 

      // Put them together
      let fullName = locName + ', ' + locState;
      let fullCoordinates = long + ', ' + lat;
      // See if it worked
      console.log('fullName is: ' + fullName);
      console.log('Lat and long: ' + fullCoordinates);

      // Get the temperature data
      let curTempE = g.Temp;
      console.log(curTempE);
      let curLow = g.Low;
      let curHigh = g.High;

      // Get the wind data 
      let curWindSt = g.Wind;
      let wDirection = g.Direction;
      let gusts = g.Gusts;

      // Get the current conditions
      let summaryTitle = g.Summary;

      // Get the hourly data 
      let hourlyTemp = g.Hourly;

      // ************ Display the content ******************************
      // Set the title with the location name at the first
      // Gets the title element so it can be worked with
      console.log("test4");
      let pageTitle = document.getElementById('page-title');
      // Create a text node containing the full name 
      let fullNameNode = document.createTextNode(fullName);
      // inserts the fullName value before any other content that might exist
      pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
      // When this is done the title should look something like this:
      // Greenville, SC | The Weather Site

      console.log("test4.5");
      // Set the Location information
      // Get the h1 to display the city location
      let contentHeading = document.getElementById('locName');
      contentHeading.innerHTML = fullName;
      console.log("test5");
      let areaCode = document.getElementById('locPstlCode');
      areaCode.innerHTML = locPstlCode;
      let areaElevation = document.getElementById('elev');
      areaElevation.innerHTML = elev;
      let areaCoord = document.getElementById('coordinates');
      areaCoord.innerHTML = fullCoordinates;
      // The h1 in main h1 should now say "Greenville, SC"




      // Set the temperature information
      let curTemp = document.getElementById("curTempE");
      curTemp.innerHTML = curTempE + "&deg; F";
      let highTemp = document.getElementById("curHigh");
      highTemp.innerHTML = curHigh + "&deg;";
      let lowTemp = document.getElementById("curLow");
      lowTemp.innerHTML = curLow + "&deg;";

    // Set the wind information
      let windStatus = document.getElementById("curWindSt");
      windStatus.innerHTML = curWindSt + " mph";
      let windDirection = document.getElementById("windDirection");
      windDirection.innerHTML = wDirection;
      let windGusts = document.getElementById("gusts");
      windGusts.innerHTML = "Gusts: " + gusts;
    //************************* */
    // Sample Getter
    // let realName = g.objectKey;
    // Sample Setter
    // let newName = document.getElementbyID("realName");  
    // newName.innerHTML = output the realName;  
    //************************** *
      //call direction
      windDial(windDirection.innerHTML);

      // Set the current conditions information
      let condition = document.getElementById("summaryTitle");
      condition.innerHTML = summaryTitle;

      // Set the hourly temperature information
      let hourly = document.getElementById("hourlyTemp");
      hourly.innerHTML = buildHourlyData(nextHour, hourlyTemp);

      // Change the status of the containers
      contentContainer.setAttribute('class', ''); // removes the hide class
      statusContainer.setAttribute('class', 'hide'); // hides the status container
    })
    .catch(function (error) {
      console.log('There was a fetch problem: ', error.message);
      statusContainer.innerHTML = 'Sorry, the data could not be processed.';
    })
}