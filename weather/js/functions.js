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

//Calculate the Windchill

const temp = 31;
const speed = 5;
const direction = "N";

buildWC(speed, temp);

windDial(direction);

function buildWC(speed, temp) {
    const feelTemp = document.getElementById('feelTemp');
   
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
   
    // Round the answer down to integer
    wc = Math.floor(wc);
   
    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;
   
    // Display the windchill
    console.log(wc);
    // wc = 'Feels like '+wc+'°F';
    feelTemp.innerHTML = wc;
    }

function windDial(direction){
    // Get the container
    const dial = document.getElementById("dial");
    const windDirection = document.getElementById('windDirection');

    console.log(direction);
    // Determine the dial class
    switch (direction){
     case "North":
     case "N":
      dial.setAttribute("class", "n"); //"n" is the CSS rule selector
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