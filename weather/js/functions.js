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


//Call Functions
buildWC(speed, temp);
windDial(direction);
const keyWord = getCondition(weatherDesc);
changeSumaryImage(keyWord);
const feet = convertMeters(value);


//Calculate windchill
function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

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
        case "clear":
            console.log("clear", weatherDesc);
            return "clear";
            break;

    }
}

// Changes the image for the summary container and the background image
function changeSumaryImage(keyWord) {
    const weatherElement = document.getElementById("curWeather");
    const littleWeatherElement = document.getElementById("littleWeatherImg");
    const summaryElement = document.getElementById("summaryTitle");


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