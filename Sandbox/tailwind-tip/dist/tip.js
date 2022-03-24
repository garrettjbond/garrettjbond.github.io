console.log("test connection");

function calculateTip(){
//gets the user input for the pre total and assigns it to a variable.
var preTotal = parseFloat(document.getElementById("befTotal").value);
//changes the input to be the desired decimal place.
var pTotal = preTotal.toFixed(4);

console.log(pTotal)


//gets the user input for the quality of service and assigns it to a variable.
var service = parseFloat(document.getElementById("quaService").value);
var serv = service.toFixed(4);
console.log(serv);


var tip = pTotal * (serv / 100.00);
tip.toFixed(2);

console.log(tip);


document.getElementById("result").innerHTML = "$" + tip;

}
