console.log("test connection");

function calculateTip(btnValue){
//gets the user input for the Bill total and assigns it to a variable.
const bill = parseFloat(document.getElementById("befTotal").value);
//changes the input to be the desired decimal place.
const pTotal = bill.toFixed(4);

console.log(pTotal)

//gets the user input for the quality of service and assigns it to a variable.

var service = parseFloat(btnValue.value);
var serv = service.toFixed(4);
console.log(serv);

var tip = pTotal * (serv / 100.00);
tip.toFixed(2);
const finalTip = parseFloat(tip).toFixed(2);
const check = isNaN(pTotal);
console.log(check + "Check")
if(check){
    document.getElementById("result").innerHTML = "$0.00";
    console.log("IF");
}
else{
    document.getElementById("result").innerHTML = "$" + finalTip;
    console.log("ELSE");
}

}
