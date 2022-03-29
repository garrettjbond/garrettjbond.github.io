function getQuote(){   
    
    //fetch method calls the api url with a request and stores the status of the call into the promise variable
    let promise = fetch("https://api.adviceslip.com/advice")
    //once the request has been completed it's stored into the response object. Since it's an object and not raw text we use .json()
    .then(response => response.json())
    //we then store the result from the above step into the any named object, we use Data, and then manipulate it to update a specified element.
    .then(data => {
            const quote = document.querySelector(".card--quote").innerHTML = data.slip.advice;
            const quoteId = document.querySelector(".card--titleId").innerHTML = data.slip.id;   
            console.log(data.slip.id);
            console.log(quote);
    }).catch(error => {
        console.log(error);
    });       
}