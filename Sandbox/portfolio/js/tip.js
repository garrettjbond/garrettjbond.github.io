console.log("test connection");

function calculateTip(){
    //gets the user input for the pre total and assigns it to a variable.
var preTotal = document.getElementById("befTotal").value;
console.log(preTotal);
//gets the user input for the quality of service and assigns it to a variable.
var service = document.getElementById("befTotal").value;
console.log(quaService);

var tip = preTotal * (service / 100);
     
alert(tip);

}
