### 25. Module Introduction

### 26. The Build Workflow

- why ?
    - optimize code
    - use next-gen code
    - be productive like using lint
- How
    - use dependency manage like yarn or npm
    - use bundler .we need a bundler because we want to write modular code and split it up over multiple files so that
      each file has a clear task, a clear focus and therefore is easier for us to maintain and manage. But then, we want
      to make sure that all this code gets bundled into a couple of files in the end when we ship it because browsers
      don't even support split up files.
    - use compiler (next-gen js) babel + presets
    - use a development server.

### 27. Using Create React App

- `npx create-react-app react-complete-guide`

### 28. Understanding the Folder Structure

- -The registerServiceWorker.js file is as the name implies important for registering a service worker which is
  generated automatically, that's related to this progressive web app we get out of the box. It will basically pre-cache
  our script files.

### 29. Understanding Component Basics

- every react component has to return or render some html code which can be rendered to the dom to the screen.
  ![Alt text](note-images/components-learning-card.png?raw=true "component learning card")

### 30. Understanding JSX

- the code looks like a html, but it is not.

```js
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi I am react</h1>
            </div>
        )
    }
}
```

equivalent to

```js
class App extends Component {
    render() {
        return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am react'))
    }
}
```

### 31. JSX Restrictions

- use `className` instead of `class`
- must have one root element

### 32. Creating a Functional Component

- convention: create a folder for component like `Person` and add file `Person.js`
- functional component is just a function that return jsx (for old react version)

### 33. Components & JSX Cheat Sheet

- Components are the core building block of React apps.A typical React app therefore could be depicted as a component
  tree having one root component ("App") and then potentially infinite amount of nested child components.
- Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM
  in the end.
- JSX is just syntactic sugar for JavaScript, allowing we to write HTMLish code instead of nested React.createElement(
  ...) calls. When creating components, we have the choice between two different ways:
    - Functional components (also referred to as "presentational", "dumb" or  "stateless" components)
    - class-based components (also referred to as "containers", "smart" or "stateful"
      components).

### 34. Working with Components & Re-Using Them

### 35. Outputting Dynamic Content

- use `{}` to execute js code in jsx code like

```jsx
<h1> My name is jon and my age is {Math.floor(Math.Random() * 10)}</h1>
```

### 36. Working with Props

- we will receive one argument in our function, one argument which is passed into it by default by react which is an
  object with all the properties of this component and properties means the attributes we add on our component.

```jsx
const person = (props) => {
    return (<h1>My name is {props.name}</h1>)
}
```

```jsx
<Person name={"mones"}/>
```

![Alt text](note-images/props-learning-card.png?raw=true "component learning card")

- we can put our content into our component from outside, not only by passing props like this but if we want to pass
  some structured html content also by placing it between the opening and closing tag and accessing it with
  props.children.

### 37. Understanding the "children" Prop

### 38. Understanding & Using State

-State can be changed and if it changes and that's the special thing about it and it only works on that state property,
if it changes, it will lead React to re-render our DOM or to update the DOM.

### 39. Props & State
- `state` is a fixed keyword but `props` are not 
- Only changes in props and/ or state trigger React to re-render.
- props allow us to pass data from a parent (wrapping) component to a child (embedded) component.

```js
//AllPosts
const posts = () => {
    return (
        <div>
            <Post title="My first Post"/>
        </div>
    );
}
```

```js
//post
const post = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}
```

- Whilst props allow us to pass data down the component tree (and hence trigger a UI update), state is used to change
  the component from within. Changes to state also trigger a UI update.

### 40. Handling Events with Methods
- use `onClick` instead of `onclick`
- typically, we add handler like `switchNameHandler`
- dont add parenthesis `()` inside jsx
### 41. To Which Events Can You Listen?
- react supported event [list](https://reactjs.org/docs/events.html#supported-events)
- course suggested event [list](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8124210#questions)
- because we use arrow function there is no problem of `this` keyword 
```js
  changeNameHandler=() =>{
      this.setState({
        name:'Monesul Haque',
        age:30
      })
  }
```
- just use this.changeNameHandler. dont use (). if we use () then it will call during the first page loading time
``` js
    <button onClick={this.changeNameHandler}>Change name</button>
```  

### 42. Manipulating the State
- in order to update `state` data we need to use `setState` function
- setstate do not replace state data but update particular properties value.
![Alt text](note-images/state-learning-card.png?raw=true "component learning card")

### 43. Function Components Naming
- USE `App` instead of `app`

### 44. Using the useState() Hook for State Manipulation
- When we are using React hooks, function that update state does not merge whatever we pass to it with the old state, instead it replaces the old state with it

![Alt text](note-images/use-state-learning-card.png?raw=true "component learning card")
### 45. Stateless vs Stateful Components
- previously state can be only managed in class based component but now state can be manage in function based component.  
### 46. Passing Method References Between Components
*This one needs special care* 
- we can pass method as properties from parent component child component
- following code shows how to pass method that does not need any arguments 
```jsx
// static method call 
import React, { Component } from 'react'

const Child = (props)=>{
  return(<div onClick ={props.changeStaticName }>Click Here</div>)
}

class App extends Component{
  state = {personName:'Someone'}
  staticChangePersonName = ()=> this.setState({personName:'Some One  Special'})
  
  render(){
    return(
      <div>
        <p>You are looking for {this.state.personName}</p>
        <Child changeStaticName={this.staticChangePersonName}/>
      </div>
    )
  }
}
export default App
```
- following code shows how to pass a method that accept arguments 
  - bind method is [efficient](https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-for-react-onclick-event/56311840) than arrow function  
```jsx
import React, { Component } from 'react'

const Child = (props)=>{
  return(<input type="text" value={props.value} onChange={e=>props.changeName(e.target.value)}/>)
}

class App extends Component{
  state = {personName:'Nobody'}
  changePersonName = (newName)=> this.setState({personName:newName})
  render(){
    return(
      <div>
        <p>You are looking for {this.state.personName}</p>
        <p onClick={this.changePersonName.bind(this,'Jon')}>your are looking for <i>jon</i> using bind method</p>
        <p onClick={()=>this.changePersonName('Sam')}>your are looking for <i>Sam</i> using arrow function method</p>
        <Child value={this.state.personName}  changeName={this.changePersonName}/>
      </div>
    )
  }
}
export default App
```
### 47. Adding Two Way Binding

### 48. Adding Styling with Stylesheets
-remember css can be global so it is wise to add css class to any component's top level like add `Person` class to top level of `Person` component
- using webpack we can import css to jsx file
- webpack also add some prefixing for different browser
- there are 2 way to styling 
  - one stylesheet
  - two inline css

### 49. Working with Inline Styles
```jsx
import React, { Component } from 'react'

class App extends Component {
  render() {
    const pStyle = { color: "red" }
    const bodyStyle = { backgroundColor: "#ccc", textAlign: "center" }
    return (
      <div style={bodyStyle}>
        <p style={pStyle}>Paragraph one</p>
      </div>
    )
  }
}
export default App
```

### 50. [OPTIONAL] Assignment Solution

### 51. Useful Resources & Links
- create-react-app: https://github.com/facebookincubator/create-react-app
- Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
- Rendering Elements: https://reactjs.org/docs/rendering-elements.html
- Components & Props: https://reactjs.org/docs/components-and-props.html
- Listenable Events: https://reactjs.org/docs/events.html
