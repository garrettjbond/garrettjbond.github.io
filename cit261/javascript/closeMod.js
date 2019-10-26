//Create a close button for every task item created

function createClose(document){
var myNodelist = document.getElementsByTagName("li");
for(var i = 0; i < myNodelist.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

}

//Close button functionality
function doClose(document){
var close = document.getElementsByClassName("close");
for(var i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

}

export{
    createClose,
    doClose
};

