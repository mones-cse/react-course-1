#### 52. Module Introduction

#### 53. Rendering Content Conditionally

- jsx does not support block element but simple statement so code like `if(){}` does not work inside return statement
- we have to use trinary expression like `condition?statement1:statement2`
  ![Alt text](note-images/jsx&conditionals-learning-card.png?raw=true "component learning card")

#### 54. Handling Dynamic Content "The JavaScript way"

- better way than trinary expression is, create a variable with null value and then if if condition is true, assign jsx
  code into that variable. and then show that variable inside return.

#### 55. Outputting Lists (Intro)

#### 56. Outputting Lists

![Alt text](note-images/jsx&list-learning-card.png?raw=true "component learning card")

#### 57. Lists & State

- use array map function to show a list
- why key work [necessary](https://reactjs.org/docs/reconciliation.html#recursing-on-children) for more details
  check [this](https://dev.to/francodalessio/understanding-the-importance-of-the-key-prop-in-react-3ag7)
- when showing list pass index and we can use that as key.but advised not to do so.

```js
{
    this.state.persons.map((person, index) => {
        return <Person name={person.name} age={person.age} key={index}/>
    }
}
```

#### 58. Updating State Immutably

- one way to copy array data is use slice `const newPersons = this.state.persons.slice()`
- or we can use `...` to copy data `const persons = [...this.state.persons]`
- to remove data from an array we can use splice like `persons.splice(personIndex,1)`

#### 59. Lists & Keys
- By mapping an array into jsx elements. This key property helps react update the list efficiently.

#### 60. Flexible Lists

#### 61. Wrap Up

#### 62. [OPTIONAL] Assignment Solution

#### 63. Useful Resources & Links
* [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
* [Lists & Keys](https://reactjs.org/docs/lists-and-keys.html)
