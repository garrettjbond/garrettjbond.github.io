$('input').focusin(function(){
    $('footer').hide();
});
$('input').focusout(function(){
    $('footer').show();
});



function calculateTip(btnValue){
//gets the user input for the Bill total and assigns it to a variable.
const bill = parseFloat(document.getElementById("befTotal").value);
//changes the input to be the desired decimal place.
const pTotal = bill.toFixed(4);

//gets the user input for the quality of service and assigns it to a variable.

const service = parseFloat(btnValue.value);
const serv = service.toFixed(4);

const tip = pTotal * (serv / 100.00);
tip.toFixed(2);
const finalTip = parseFloat(tip).toFixed(2);
const check = isNaN(pTotal);
if(check){
    document.getElementById("result").innerHTML = "$0.00";
}
else{
    document.getElementById("result").innerHTML = "$" + finalTip;
}

}


