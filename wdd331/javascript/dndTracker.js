console.log("test");

sortItem();
toggleStyle();



function sortItem() {
    
    var roster = document.querySelectorAll(".rosterListItem");
    // console.log(roster[1].children[0].innerHTML);
     
    for (var i = 0; i <= roster.length - 1; i++) {
        console.log(roster[i].children[i].innerHTML);
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
    event.target.parentElement.remove(event.target);
}


//turn tracker
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
    const url = "https://api.open5e.com/monsters/?limit=1086";
    
    //make request via fetch
    fetch(url)
    //accept response/promise
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        const monster = {};
        monster['init'] = data.results[0].dexterity;
        monster['name'] = data.results[0].name;
        monster['ac'] = data.results[0].armor_class;
        monster['hp'] = data.results[0].hit_points;
        console.log(monster);
        })

    };
    
    fetchMonsters();
    //toggle click styling
    function toggleStyle() {
        var itemObject = document.getElementsByClassName("monsterItem");
        
        for (var i = 0; i < itemObject.length; i++) {
            itemObject[i].addEventListener("click", function () {
                this.classList.toggle("activeMonsterItem");
            });
        }
    }

//Search Bar input filtering
function searchIt() {
    var input, filter, tr, td, word, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    tr = document.getElementById("monsterTable");
    td = document.getElementsByClassName('monsterItem');


    for (i = 0; i < td.length; i++) {
        word = td[i];
        txtValue = word.textContent || word.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            td[i].style.display = "";
        } else {
            td[i].style.display = "none";
        }
    }
}
// import selection to Roster
function importIt() {
    //get object of potential monsters
    var monsterRoster = getElementsByClassName("monsterItem");
    
    //find item in object that has class list activeMonsterItem
    

    for(var i = 0; i < monsterRoster; i++){ 
        monsterPlayer = monsterRoster[i];
    
        if(monsterPlayer){
            console.log("it worked, check the roster below");
        }
        else{
            console.log("please click a monster before proceeding...");
            
        }
    }

    console.log(monsterPlayer.textContent);
    
    
    //if monsterPlayer has activeMonsterItem active then add to roster
    //else prompt use to make a selection
}