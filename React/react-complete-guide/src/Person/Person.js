import React from 'react';
//We dont need to import "component" because we are creating a function.



//Arrow function is preffered over standard ES5, so that we can better-
//utilize the "this" keyword. When it is used inside of an arrow function-
// "this" is bound to object that created the function, which would be "person."

//Name of our component

//"props" is a default argument passed into the function by React. 
// The name of the argument passed in does not matter.
const person = (props) => {
    // You can execute one line expressions of js inside of the jsx by-
    // inserting the js inside of {curly braces}.
    return (
    <div>
        <p> I'm {props.name} and I am {props.age} years old! I like to {props.activity}.</p>
        <p>{props.children}</p>
    </div>


    )
};

//"default" is used when exporting a single class, function, or primitive. -
//It can also be used when the function has no name.
export default person;