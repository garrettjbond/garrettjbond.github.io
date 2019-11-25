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
        close[i].onclick = function() {
            var li = this.parentElement;
            li.style.display = "none";
        }
    }

    //assign an id to every element that is created
    //onclick references the new id
    //remove referenced new id

}



// button.addEventListener("click", initOrder);

var counter = 0;
var nCounter = 0;

function initOrder() {
    nCounter = counter - 1;
    //stores the roster in a variable
    var roster = document.querySelectorAll(".rosterListItem");
    
    //keeps the counter positive.
    if(nCounter <= 0 ){
        nCounter = 0;
    }
    //unstyle
    roster[nCounter].style.color = "#dd"; 
    roster[nCounter].style.backgroundColor = "#fff";

    //Style
    roster[counter].style.backgroundColor = "#EDCF8E";
    roster[counter].style.color = "black"; 
    //Adds styling to each item every time the 
    counter += 1;
    
    //Set limit for counter and reset the counter once it hits container limit
    if(counter > roster.length-1){
        counter = 0;  
    }

    
    //remove the styling everytime the function is called.
}

//Loop
//add styling to the first one
//Loop
//remove styling on the first one

