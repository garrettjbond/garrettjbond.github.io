'use strict';

let navListItems = "../js/acme.json";

console.log("test2");
fetchData(navListItems);

console.log("test3");
function fetchData(navListItems) {
  
  fetch(navListItems)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new ERROR('Network response was not OK.');
    })
    .then(function (data) {
        console.log(data.navList);
        findNav(data.navList);

    });
}

function findNav(navList){

    let naviListItems = '<li> Home </li>';
    // Build the remaining list items using a for loop
    navList.map(function(nav, idx){
        naviListItems += '<li>' + nav + '</li>';
        console.log(nav);
    })
       
    // let list = document.getElementById("navBarList");
    // list.innerHTML = buildHourlyData(nextHour, hourlyTemp);
    
}