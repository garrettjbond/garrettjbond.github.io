console.log("test connection");

function calculateTip(){
    //gets the user input for the pre total and assigns it to a variable.
var preTotal = parseInt(document.getElementById("befTotal").value);
console.log(preTotal);
//gets the user input for the quality of service and assigns it to a variable.
var service = parseInt(document.getElementById("quaService").value);
console.log(service);

var tip = preTotal * (service / 100.00);

document.getElementById("result").innerHTML = "$" + tip;

}
