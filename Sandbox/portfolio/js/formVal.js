console.log("Test Connection")

function validateInfo(){
    //set variable
    

    //How to access data from an input
    var formData = document.forms["formVal"]["fName"].value;

    console.log(formData);

    if(formData == ""){
        alert("please fill with content");
    }
}