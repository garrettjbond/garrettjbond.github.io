console.log("test connection");

function calculateTip(){
//gets the user input for the pre total and assigns it to a variable.
var preTotal = parseInt(document.getElementById("befTotal").value);
//changes the input to be the desired decimal place.
var pTotal = preTotal.toFixed(4);

console.log(pTotal)

console.log(preTotal);
//gets the user input for the quality of service and assigns it to a variable.
var service = parseInt(document.getElementById("quaService").value);
var serv = service.toFixed(4);



var tip = pTotal * (serv / 100.00);

console.log(tip);


document.getElementById("result").innerHTML = "$" + tip;

}
