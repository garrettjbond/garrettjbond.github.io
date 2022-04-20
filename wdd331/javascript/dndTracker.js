sortItem();

//This function makes sure that the items beng added to the encounter table are being sorted by initiative value
function sortItem() {

    var roster = Array.from(document.querySelectorAll(".rosterListItem"));

    roster.sort(function (a, b) { return parseInt(b.firstElementChild.innerText) - parseInt(a.firstElementChild.innerText) });

    //make new elements
    var rosterSort = document.getElementById("roster");
    roster.map(rosterChild => {
        var rosterCharacterSort = document.createElement("li");

        //add classes to the new elements      
        rosterCharacterSort.classList.add("list-group-item", "rosterListItem");

        // add to page
        rosterSort.appendChild(rosterChild);
    });
}

function addItem() {
    event.preventDefault();
    var init = document.getElementById("init").value;
    var name = document.getElementById("name").value;
    var ac = document.getElementById("ac").value;
    var health = document.getElementById("health").value;
    var rosterItemDesc = "Initiative: " + init + " " + "Name: " + name + " " + "AC: " + ac + " " + "Health: " + health;

    //create element
    var rosterItem = document.createElement("li");
    var rosterInit = document.createElement("span");
    var rosterName = document.createElement("span");
    var rosterAc = document.createElement("span");
    var rosterHealth = document.createElement("span");
    var rosterClose = document.createElement("span");
    //add class to new element
    rosterItem.classList.add("list-group-item");
    rosterClose.classList.add("fa", "fa-trash", "fa-lg", "closeItem");
    //add classes to new entries
    rosterItem.classList.add("rosterListItem")
    //set content of new item
    rosterItem.innerHTML = "";
    rosterClose.onclick = () => { deleteItem() };
    rosterInit.innerHTML = init;
    rosterInit.onblur = () => { sortItem() };
    rosterName.innerHTML = name;
    rosterAc.innerHTML = ac;
    rosterHealth.innerHTML = health;

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

    sortItem();
    // document.getElementById("formId").reset();
}

function deleteItem() {

    //On Click Row
    event.target.parentElement.classList.add("delete");

    //Array of options
    const dRoster = Array.from(document.querySelectorAll(".rosterListItem"));
    for (let i = 0; i < dRoster.length; i++) {
        dRoster[i].onclick = function () {
            let dValue = i;

            // Issues: Deleting item immediately after tracker causes issues.
            if (dValue < counter) {
                counter -= 1;
            }
            else if (dValue == dRoster.length - 1 && counter == dRoster.length - 1) {
                counter = 0;
            }
            event.target.parentElement.remove(event.target);
            sortItem();
        }
    }
}

//turn tracker
var counter = 0;
function initOrder() {

    var roster = document.querySelectorAll(".rosterListItem");

    //style
    roster[counter].style.backgroundColor = "#EDCF8E";
    roster[counter].style.color = "black";

    //unstyle
    if (roster[counter] = "") {
        counter += 1;
    } else if (counter == 0) {
        roster[roster.length - 1].style.color = "#dd";
        roster[roster.length - 1].style.backgroundColor = "#fff";
    } else {
        roster[counter - 1].style.color = "#dd";
        roster[counter - 1].style.backgroundColor = "#fff";

    }

    counter += 1;

    //Makes the tracker wrap around
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

function fetchMonsters(){
    const url = "https://api.open5e.com/monsters/?limit=1086";
    document.getElementById('monsterBodyId').innerHTML = "Loading...";
    document.getElementById('monsterBodyId').style.paddingTop = "20%";

    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            document.getElementById("monsterBodyId").innerHTML = "";
            document.getElementById('monsterBodyId').style.paddingTop = "0%";
            const monster = [];
            data.results.map(dataItem => {
                var apiData = {};
                //make new elements
                var rosterMonsterRow = document.createElement("tr");
                var rosterMonsterData = document.createElement("td");
                //add classes to the new elements      
                rosterMonsterRow.classList.add("monsterTable");
                rosterMonsterRow.classList.add("tableRowInsert");
                rosterMonsterData.classList.add("monsterItem");
                //add onclick to the new data
                rosterMonsterRow.onclick = (event) => { event.target.classList.toggle("activeMonsterItem") };
                //add the content to new elements
                rosterMonsterData.innerHTML = dataItem.name;
                rosterMonsterData.setAttribute('data-dexterity', dataItem.dexterity);
                rosterMonsterData.setAttribute('data-name', dataItem.name);
                rosterMonsterData.setAttribute('data-armor-class', dataItem.armor_class);
                rosterMonsterData.setAttribute('data-hit-points', dataItem.hit_points);
                rosterMonsterRow.appendChild(rosterMonsterData);
                document.getElementsByClassName("monsterBody")[document.getElementsByClassName("monsterBody").length - 1].appendChild(rosterMonsterRow);
                monster.push(apiData);
            });

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

//Search Bar input filters API loaded results that are shown in the table
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

// Takes the selected items from the monster table and adds them to the roster.
function importIt() {
    //get object of selected monsters
    var monsterRoster = Array.from(document.getElementsByClassName("activeMonsterItem"));
    //For ever item in the array we create a new row for it in the monster table
    monsterRoster.map(monsterRosterItem => {

        //make new elements
        var rosterCharacter = document.createElement("li");
        var roster = document.getElementById("roster");
        //add classes to the new elements      
        rosterCharacter.classList.add("list-group-item", "rosterListItem");
        //add content to the new
        console.log("additem", monsterRosterItem.getAttribute("data-name"));

        rosterCharacter.innerHTML = `<span contenteditable="true" onblur="sortItem()">${monsterRosterItem.getAttribute("data-dexterity")}</span>
        <span contenteditable="true">${monsterRosterItem.getAttribute("data-name")}</span>
        <span contenteditable="true">${monsterRosterItem.getAttribute("data-armor-class")}</span>
        <span contenteditable="true">${monsterRosterItem.getAttribute("data-hit-points")}</span>
        <span class="fa fa-trash fa-lg closeItem" onclick="deleteItem()"></span>`;

        roster.appendChild(rosterCharacter);
    });

    sortItem();

    //Unselects monsters after added to roster
    let selected = document.querySelectorAll(".activeMonsterItem");

    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.remove("activeMonsterItem");
    }
}