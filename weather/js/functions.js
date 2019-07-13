/* *************************************
 *  Weather Site JavaScript Functions
 *
 *  Instructions: Comment each new function 
 *  and code within a function to clearly
 *  identify what it does and any special
 *  information that may need additional
 *  explanation. Don't forget!
 *
 ************************************* */
//test

console.log('My javascript is being read.');

//Create variables for later use
const temp = 31;
const speed = 5;
const direction = "S";
const value = 1;
const weatherDesc = "Rainy";


// Set global variable for custom header required by NWS API
var idHeader = {
    headers: {
        "User-Agent": "Student Learning Project - gbond3@byui.edu"
    }
};

var storage = window.localStorage;


//Call Functions
buildWC(speed, temp);
windDial(direction);
const keyWord = getCondition(weatherDesc);
changeSumaryImage(keyWord);
console.log(keyWord);
const feet = convertMeters(value);
// Get the next hour based on the current time
let date = new Date();
let nextHour = date.getHours() + 1;

//Calculate windchill
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    console.log(temp);
    console.log(speed);


    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    // Display the windchill
    console.log(wc);
    // wc = 'Feels like '+wc+'°F';
    feelTemp.innerHTML = wc;
}

//Spin dial based off of direction
function windDial(direction) {
    // Get the container
    const dial = document.getElementById("dial");
    const windDirection = document.getElementById('windDirection');

    console.log(direction);
    // Determine the dial class
    switch (direction) {
        case "North":
        case "N":
            dial.setAttribute("class", "n");
            windDirection.innerHTML = direction;
            break;
        case "NE":
        case "NNE":
        case "ENE":
            dial.setAttribute("class", "ne");
            windDirection.innerHTML = direction;
            break;
        case "NW":
        case "NNW":
        case "WNW":
            dial.setAttribute("class", "nw");
            windDirection.innerHTML = direction;
            break;
        case "South":
        case "S":
            dial.setAttribute("class", "s");
            windDirection.innerHTML = direction;
            break;
        case "SE":
        case "SSE":
        case "ESE":
            dial.setAttribute("class", "se");
            windDirection.innerHTML = direction;
            break;
        case "SW":
        case "SSW":
        case "WSW":
            dial.setAttribute("class", "sw");
            windDirection.innerHTML = direction;
            break;
        case "East":
        case "E":
            dial.setAttribute("class", "e");
            windDirection.innerHTML = direction;
            break;
        case "West":
        case "W":
            dial.setAttribute("class", "w");
            windDirection.innerHTML = direction;
            break;
    }
}

//Gets the condition based off of phrase
function getCondition(weatherDesc) {
    console.log(weatherDesc);
    switch (weatherDesc.toLowerCase()) {
        case "cloudy":
        case "overcast":
        case "partly cloudy":
            console.log("cloudy", weatherDesc);
            return "cloud";
            break;
        case "wet weather":
        case "rainy":
        case "thunderstorms":
            console.log("rainy", weatherDesc);
            return "rain";
            break;
        case "foggy":
            console.log("foggy", weatherDesc);
            return "fog";
            break;
        case "snowy":
            console.log("snowy", weatherDesc);
            return "snow";
            break;
        case "mostly clear":
        case "clear":
            console.log("clear", weatherDesc);
            return "clear";
            break;
        default:
            console.log(weatherDesc);
            return "unavailable";        

    }
}

// Changes the image for the summary container and the background image
function changeSumaryImage(keyWord) {
    const weatherElement = document.getElementById("curWeather");
    const littleWeatherElement = document.getElementById("littleWeatherImg");
    const summaryElement = document.getElementById("summaryTitle");
    littleWeatherElement.classList = ' ';
    weatherElement.classList = ' ';

    switch (keyWord.toLowerCase()) {
        case "cloud":
            console.log("cloud", keyWord);
            weatherElement.classList.add("cloud");
            littleWeatherElement.classList.add("cloud");
            summaryElement.innerHTML = "cloud";
            break;
        case "clear":
            console.log("clear", keyWord);
            weatherElement.classList.add("clear");
            littleWeatherElement.classList.add("clear");
            summaryElement.innerHTML = "clear";
            break;
        case "rain":
            console.log("rain", keyWord);
            weatherElement.classList.add("rain");
            littleWeatherElement.classList.add("rain");
            summaryElement.innerHTML = "rain";
            break;
        case "fog":
            console.log("fog", keyWord);
            weatherElement.classList.add("fog");
            littleWeatherElement.classList.add("fog");
            summaryElement.innerHTML = "fog";
            break;
        case "snow":
            console.log("snow", keyWord);
            weatherElement.classList.add("snow");
            littleWeatherElement.classList.add("snow");
            summaryElement.innerHTML = "snow";
            break;
    }
}

//Converts the entered data of the elevation from meters to feet. Because the metric system is lame.
function convertMeters(value) {
    let feet = 1;

    feet = value * 3.28084;
    feet = Math.round(feet);
    console.log(feet);
    document.getElementById("elev").innerHTML = feet;
    return feet;
}


//Convert and format hours to a 12 hour format.
function format_time(hour) {
    if (hour > 23) {
        hour -= 24;
    }
    let amPM = (hour > 11) ? "pm" : "am";
    if (hour > 12) {
        hour -= 12;
    }
    if (hour == 0) {
        hour = "12";
    }
    return hour + amPM;
}

// Build the hourly temperature list
function buildHourlyData(nextHour, hourlyTemps) {
    // Data comes from a JavaScript object of hourly temp name - value pairs
    // Next hour should have a value between 0-23
    // The hourlyTemps variable holds an array of temperatures
    // Line 8 builds a list item showing the time for the next hour 
    // and then the first element (value in index 0) from the hourly temps array
    let hourlyListItems = '<li>' + format_time(nextHour) + ': ' + hourlyTemps[0] + '&deg;F</li>';
    // Build the remaining list items using a for loop
    for (let i = 1, x = hourlyTemps.length; i < x; i++) {
        hourlyListItems += '<li> | ' + format_time(nextHour + i) + ': ' + hourlyTemps[i] + '&deg;F</li>';
    }
    console.log('HourlyList is: ' + hourlyListItems);
    return hourlyListItems;
}

function getHourly() {
    fetch(storage.getItem("locHourly"), idHeader)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Response not OK.');
        })
        .then(function (data) {
            console.log(data);
            var hourlyArray = [];
            let curLow = 200;
            let curHigh = -200;
            for (let i = 0; i < 13; i++) {
                if(curLow > data.properties.periods[i].temperature){
                    curLow = data.properties.periods[i].temperature;
                }
                if(curHigh < data.properties.periods[i].temperature){
                    curHigh = data.properties.periods[i].temperature;
                }
                hourlyArray.push(
                    data.properties.periods[i].temperature
                );
            }
            const formattedHourly = buildHourlyData(nextHour, hourlyArray)
            storage.setItem("locHourlyArray", formattedHourly);
            console.log(hourlyArray);
            storage.setItem('locWindDirection', data.properties.periods["0"].windDirection);
            storage.setItem('curLow', curLow);
            storage.setItem('curHigh', curHigh);

            buildPage();
        })


}

//converts celsius to fahrenheit
function toFahrenheit(celsVar){
    const fahrVar = (celsVar * (9/5)) + 32;
    console.log(celsVar);

    return fahrVar;
}


//builds page dynamically with api data
function buildPage() {
    const curWindSt = storage.getItem('locWindSpeed');
    const wDirection = storage.getItem('locWindDirection');
    const summaryTitle = storage.getItem('locTextDescription');
    const elev = storage.getItem('locElevation');
    const hourlyArrayApi = storage.getItem('locHourlyArray');
    let curTempE = toFahrenheit(parseFloat(storage.getItem('locTemperature')));
    const locPstlCode = storage.getItem('locZipCodeApi');
    const lat = storage.getItem('locLatApi');
    const long = storage.getItem('locLongApi');
    const curLow = storage.getItem('curLow');
    const curHigh = storage.getItem('curHigh');
    
    const locName = storage.getItem('locName');
    const locState = storage.getItem('locState');

    curTempE = curTempE.toFixed(0); 
    buildWC(curWindSt, curTempE);
    windDial(wDirection);
    const keyWord = getCondition(summaryTitle);
    console.log('keyWord', keyWord);
    changeSumaryImage(keyWord);
    const feet = convertMeters(elev);
    console.log(hourlyArrayApi);

    

    // Put them together
    let fullName = locName + ', ' + locState;
    let fullCoordinates = parseFloat(long).toFixed(2) + '&deg N, ' + parseFloat(lat).toFixed(2) + '&deg W';
    // See if it worked
    console.log('fullName is: ' + fullName);
    console.log('Lat and long: ' + fullCoordinates);

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
    areaElevation.innerHTML = elev + " ft.";
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
    windGusts.innerHTML = curWindSt + " mph";
    
    let hourly = document.getElementById("hourlyTemp");
    hourly.innerHTML = hourlyArrayApi;

    document.getElementById("status").classList.add('hide');
    document.getElementById("main-content").classList.remove('hide');

}

function getLocation(locale) {
    const URL = "https://api.weather.gov/points/" + locale;
    // NWS User-Agent header (built above) will be the second parameter 
    fetch(URL, idHeader)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Response not OK.');
        })
        .then(function (data) {
            // Let's see what we got back
            console.log('Json object from getLocation function:');
            console.log(data);
            // Store data to localstorage 

            storage.setItem("locHourly", data.properties.forecastHourly);
            storage.setItem("locName", data.properties.relativeLocation.properties.city);
            storage.setItem("locState", data.properties.relativeLocation.properties.state);

            // Next, get the weather station ID before requesting current conditions 
            // URL for station list is in the data object 
            let stationsURL = data.properties.observationStations;
            // Call the function to get the list of weather stations
            getStationId(stationsURL);
            getHourly();
        })
        .catch(error => console.log('There was a getLocation error: ', error))
} // end getLocation function

// Gets weather station list and the nearest weather station ID from the NWS API
function getStationId(stationsURL) {
    // NWS User-Agent header (built above) will be the second parameter 
    fetch(stationsURL, idHeader)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Response not OK.');
        })
        .then(function (data) {
            // Let's see what we got back
            console.log('From getStationId function:');
            console.log(data);

            // Store station ID and elevation (in meters - will need to be converted to feet) 
            let stationId = data.features[0].properties.stationIdentifier;
            let stationElevation = data.features[0].properties.elevation.value;
            console.log('Station and Elevation are: ' + stationId, stationElevation);

            // Store data to localstorage 
            storage.setItem("stationId", stationId);
            storage.setItem("stationElevation", stationElevation);

            // Request the Current Weather for this station 
            getWeather(stationId);
        })
        .catch(error => console.log('There was a getStationId error: ', error))
} // end getStationId function


// Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) {
    // This is the URL for current observation data 
    const URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
    // NWS User-Agent header (built above) will be the second parameter 
    fetch(URL, idHeader)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Response not OK.');
        })
        .then(function (data) {
            // Let's see what we got back
            console.log('From getWeather function:');
            console.log(data);

            // Store weather information to localStorage 
            storage.setItem('locWindSpeed', data.properties.windSpeed.value);
            
            storage.setItem('locTextDescription', data.properties.textDescription);
            storage.setItem('locElevation', data.properties.elevation.value);
            storage.setItem('locTemperature', data.properties.temperature.value);
          
            console.log(data.properties.periods["0"].windDirection);

            // Build the page for viewing 

        })
        .catch(error => console.log('There was a getWeather error: ', error))
} // end getWeather function