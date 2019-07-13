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
        let naviListItems = '<li><a href = "#"> Home </a></li>';
        // Build the remaining list items using a for loop
        data.navList.map(function(nav, idx){
            naviListItems += '<li><a href = "?' + nav + '">' + nav + '</li>';
            console.log(nav);
        })
        const pageName = window.location.search.slice(1);
        console.log(pageName);
        let list = document.getElementById("navBarList");
         list.innerHTML = naviListItems; 
        
        //Title
        let contentPageTitle = document.getElementById("content-header");
        contentPageTitle.innerHTML = data[pageName].name;

        //Image
        let pageImage = document.createElement("img");
        pageImage.src = data[pageName].path;
        let content = document.createElement("div");
        contentPageTitle.parentNode.insertBefore(content, contentPageTitle.nextSibling);
        content.appendChild(pageImage);
        pageImage.setAttribute("id", "css-image");
        content.setAttribute("id", "css-content");
        let contentInfo = document.createElement("div");
        contentInfo.setAttribute("id", "css-contentInfo");
        content.appendChild(contentInfo);

        //Description
        let pageDescription = document.createElement("p");
        pageDescription.innerHTML = data[pageName].description;
        pageDescription.setAttribute("id", "css-description");
        contentInfo.appendChild(pageDescription);
        console.log(pageDescription);

        //Manufacturer
        let pageManufacturer = document.createElement("p");
        pageManufacturer.innerHTML = "<b> Made By</b>: " + data[pageName].manufacturer;
        pageManufacturer.setAttribute("id", "css-manufacturer");
        contentInfo.appendChild(pageManufacturer);

        //Reviews
        let pageReviews = document.createElement("p");
        pageReviews.innerHTML = "<b> Reviews</b>: " +  data[pageName].reviews + "/5 stars";
        pageReviews.setAttribute("id", "css-reviews");
        contentInfo.appendChild(pageReviews);

        //Price
        let pagePrice = document.createElement("p");
        pagePrice.innerHTML = "<b> Price: $</b>" +  data[pageName].price;
        pagePrice.setAttribute("id", "css-price");
        contentInfo.appendChild(pagePrice);
        

    });


}
