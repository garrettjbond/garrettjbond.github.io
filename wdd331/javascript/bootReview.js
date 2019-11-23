console.log("test");

function addItem() {
    var init = document.getElementById("init").value;
    console.log(init);

    var name = document.getElementById("name").value;
    console.log(name);

    var ac = document.getElementById("ac").value;
    console.log(ac);

    var health = document.getElementById("health").value;
    console.log(health);

    var rosterItemDesc = "Initiative: " + init + " " + "Name: " + name + " " + "AC: " + ac + " " + "Health: " + health;
    console.log(rosterItemDesc);

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

}

function deleteItem() {
    console.log("Allow the dm to delete a player from the roster");



    //assign an id to every element that is created
    //onclick references the new id
    //remove referenced new id

}

function initOrder() {
    console.log("This will highlight the current players turn and skip to the next players turn");
    
}

function editItem() {
    console.log("Allow the dm to edit the inputted information");
}