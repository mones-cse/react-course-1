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

- we can put our content into our component from outside, not only by passing props like this but if we want to pass some
  structured html content also by placing it between the opening and closing tag and accessing it with props.children.

### 37. Understanding the "children" Prop

### 38. Understanding & Using State

### 39. Props & State

### 40. Handling Events with Methods

### 41. To Which Events Can You Listen?

### 42. Manipulating the State

### 43. Function Components Naming

### 44. Using the useState() Hook for State Manipulation

### 45. Stateless vs Stateful Components

### 46. Passing Method References Between Components

### 47. Adding Two Way Binding

### 48. Adding Styling with Stylesheets

### 49. Working with Inline Styles

### 50. [OPTIONAL] Assignment Solution

### 51. Useful Resources & Links
