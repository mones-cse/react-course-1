import React from 'react'
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name={"mones"} age={29}>
            <p>glad to meet you</p>
        </Person>
    </div>
  );


      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I am react'))
}

export default App;
