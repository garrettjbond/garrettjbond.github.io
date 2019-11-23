console.log("test");

function addItem(){
    var init = document.getElementById("init").value;
    console.log(init);
    
    var name = document.getElementById("name").value;
    console.log(name);
    
    var ac = document.getElementById("ac").value;
    console.log(ac);
    
    var health = document.getElementById("health").value;
    console.log(health);

    var rosterItemDesc = "Initiative: " + init + " " + "Name: " + name + " "  + "AC: " + ac + " "  + "Health: " + health;
    console.log(rosterItemDesc);
    
    var rosterItem = document.createElement("li");
    rosterItem.innerHTML = rosterItemDesc;
    document.body.appendChild(rosterItem);

}

function createCloseButton(){
    
}

function deleteItem(){
    console.log("Allow the dm to delete a player from the roster");
    
    

    //assign an id to every element that is created
    //onclick references the new id
    //remove referenced new id

}

function editItem(){
    console.log("Allow the dm to edit the inputted information");
}

function initOrder(){
    console.log("This will highlight the current players turn and skip to the next players turn");
    
}