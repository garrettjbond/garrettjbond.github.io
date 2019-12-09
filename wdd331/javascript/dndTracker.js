console.log("test");

sortItem();
toggleStyle();
fetchMonsters();
//! searchIt();


function sortItem() {

    var roster = document.querySelectorAll(".rosterListItem");
    // console.log(roster[1].children[0].innerHTML);

    for (var i = 0; i <= roster.length - 1; i++) {
        console.log(roster[i].children[0].innerHTML);
    }
}

function addItem() {
    var init = document.getElementById("init").value;
    // console.log(init);

    var name = document.getElementById("name").value;
    // console.log(name);

    var ac = document.getElementById("ac").value;
    // console.log(ac);

    var health = document.getElementById("health").value;
    // console.log(health);

    var rosterItemDesc = "Initiative: " + init + " " + "Name: " + name + " " + "AC: " + ac + " " + "Health: " + health;
    // console.log(rosterItemDesc);

    //create element
    var rosterItem = document.createElement("li");
    var rosterInit = document.createElement("span");
    var rosterName = document.createElement("span");
    var rosterAc = document.createElement("span");
    var rosterHealth = document.createElement("span");
    var rosterClose = document.createElement("span");
    //add class to new element
    rosterItem.classList.add("list-group-item");
    rosterClose.classList.add("badge");
    rosterClose.classList.add("closeItem");
    //add classes to new entries
    rosterItem.classList.add("rosterListItem")
    //set content of new item
    rosterItem.innerHTML = "";
    rosterClose.innerHTML = "X";
    rosterInit.innerHTML = init;
    rosterName.innerHTML = name;
    rosterAc.innerHTML = ac;
    rosterHealth.innerHTML = health;
    //add onclick to new item
    rosterClose.onclick = deleteItem();

    //get the desired location of where to put the new element
    var roster = document.getElementById("roster");
    //put the new element at the desired location
    roster.appendChild(rosterItem);
    rosterItem.appendChild(rosterInit);
    rosterItem.appendChild(rosterName);
    rosterItem.appendChild(rosterAc);
    rosterItem.appendChild(rosterHealth);
    rosterItem.appendChild(rosterClose);

    //Make the elements editable
    // element.setAttribute(attributename, attributevalue)
    rosterInit.setAttribute("contenteditable", "true");
    rosterName.setAttribute("contenteditable", "true");
    rosterAc.setAttribute("contenteditable", "true");
    rosterHealth.setAttribute("contenteditable", "true");
}

function deleteItem() {
    console.log("Allow the dm to delete a player from the roster");
    // var removeMe = this.ParentElement;
    // removeMe.remove();
    var close = document.getElementsByClassName("closeItem");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var li = this.parentElement;
            li.style.display = "none";
        }
    }

    var roster = document.querySelectorAll(".rosterListItem");
    console.log('bootReview.js -> %croster:', 'color: red', roster)
}



// button.addEventListener("click", initOrder);

// var nCounter = 0;

var counter = 0;

function initOrder() {
    console.log("start: " + counter);

    var roster = document.querySelectorAll(".rosterListItem");
    console.log('bootReview.js -> %croster:', 'color: red', roster)
    //style
    roster[counter].style.backgroundColor = "#EDCF8E";
    roster[counter].style.color = "black";
    console.log("Counter Style:" + counter);

    //unstyle
    if (roster[counter] = "") {
        counter += 1;
    } else if (counter == 0) {
        roster[roster.length - 1].style.color = "#dd";
        roster[roster.length - 1].style.backgroundColor = "#fff";
        console.log(roster);
    } else {
        roster[counter - 1].style.color = "#dd";
        roster[counter - 1].style.backgroundColor = "#fff";

    }

    counter += 1;

    if (counter > roster.length - 1) {
        counter = 0;
    }
}


function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

const fetchMonsters = () => {
    //create url variable
    const url = "https://api.open5e.com/monsters/";

    //make request via fetch
    fetch(url)
    //accept response/promise
        .then(res => {
            return res.json();
        })
        .then( data => {
            console.log(data);
            const monster = {};
            monster['init'] = data.results[0].dexterity;
            monster['name'] = data.results[0].name;
            monster['ac'] = data.results[0].armor_class;
            monster['hp'] = data.results[0].hit_points;
            console.log(monster);
        })
};

//toggle click styling
function toggleStyle(){
    var itemObject = document.getElementsByClassName("monsterItem");

    for(var i = 0; i < itemObject.length; i++){
        itemObject[i].addEventListener("click", function(){
            this.classList.toggle("activeMonsterItem");
        });
    }
}

//!Search Bar input filtering
//! function searchIt() {
//!     // Declare variables
//!     var input, filter, ul, li, a, i;
//!     input = document.getElementById("mySearch");
//!     filter = input.value.toUpperCase();
//!     ul = document.getElementById("myMenu");
//!     li = ul.getElementsByTagName("li");
//!
//!     // Loop through all list items, and hide those who don't match the search query
//!     for (i = 0; i < li.length; i++) {
//!       a = li[i].getElementsByTagName("a")[0];
//!       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//!         li[i].style.display = "";
//!       } else {
//!         li[i].style.display = "none";
//!       }
//!     }
//!   }