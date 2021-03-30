import React, { Component } from 'react'
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  //because of next-gen js we do not need to add constructor code
  state = {
    name:"mones",
    age:29
  }
  // because we use arrow function there is no problem of this keyword 
  changeNameHandler =()=>{
      this.setState({
        name:'Monesul Haque',
        age:30
      })
  }
  render (){
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <Person name={this.state.name} age={this.state.age} click={this.changeNameHandler}>
              <p>glad to meet you</p>
          </Person>
          {/* just use this.changeNameHandler. dont use (). if we use () then it will call the first time page load */}
          <button onClick={()=>this.changeNameHandler()}>Change name</button>  
      </div>
    );
  }


      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I am react'))
}

export default App;
