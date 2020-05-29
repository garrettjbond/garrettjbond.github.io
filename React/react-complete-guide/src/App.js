import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
 const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Mo', age: 28, activity: 'Run'},
      {name: 'Jo', age: 38, activity: 'Fight'},
      {name: 'Garrett', age: 18, activity: 'Swim'}
    ]});

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  
 const switchNameHandler = () => {
  // console.log("was clicked")
  // DON"T DO THIS: this.state.persons[0].name = "Max";
  setPersonsState({
    persons: [
    {name: 'Morris', age: 28, activity: 'Run'},
    {name: 'Johnny', age: 38, activity: 'Fight'},
    {name: 'Galavant', age: 18, activity: 'Swim'}
  ]});
};

  //This renders the root component, meaning you reference all other components here.
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        {/* Self close tag is used when referencing an empty tag, like a component */}
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} activity={personsState.persons[0].activity} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} activity={personsState.persons[1].activity} >My hobbies are strange.</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} activity={personsState.persons[2].activity} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work?') )
  }

export default app;
