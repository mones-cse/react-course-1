#### 12. Module Introduction

- some summary on next gen javascript.

#### 13. Understanding "let" and "const"

- var and let are same thing
- we se const if we plan on creating a constant value, so something which we only assign once and never change.

#### 14. Arrow Functions

- Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword. The `this`
  keyword doesn't always refer to what we might have expected it to refer to during you writing our code. When we use
  this inside an arrow function it will always keep its context and not change it surprisingly.

```js
//notmal function
function myFun() {
...
}

// arrow function 
const myFun = () => {
...
}
```

- When having no arguments, we have to use empty parentheses `()` in the function declaration:
- When having exactly one argument, we may omit the parentheses `()`

```js
const printMyName = (name) => {
    return name;
}
```

or

```js
const printMyName = name => name
```

#### 15. Exports and Imports

- default import & export: for default import the name do not need to be explicitly same as exported name

```js
// person.js
const person = {
    name: 'Max'
}
export default person
```

```js
//app.js
import person from './person.js'
import prs from './person.js'
```

- named import & export: for named import the name need to be explicitly same as exported name

```js
//utility.js
export const clean = () => {...
}
export const baseData = 10;
```

```js
//app.js
import {baseData} from './utility.js'
import {clean} from './utility.js'
//or 
import {clean as clear} from './utility.js'
import * as bundled from './utility.js'
```

#### 16. Understanding Classes

- class example

```js
class Person {
    //property
    name = 'Max'
    // method
    call = () => {
    }
}
```

- usage of class

```js
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

```

- inheritance class

```js
class Person extends Master
```

- old class example

```js
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}


class Person extends Human {
    constructor() {
        /**
         * If we are extending another class and
         * we are implementing the constructor which we don't have.
         * Then you have to add super this special super method in the constructor.
         * super is a keyword and it simply executes the parent constructor in order to initialize the parent class.
         */
        super();
        this.name = 'Max'
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();
```

#### 17. Classes, Properties and Methods

- Next generation javascript also offers a different syntax of initializing properties and methods.
- properties are like variables you attach to classes and objects,
- methods are like functions attached to classes and objects
- in es7 we can assign a property directly inside our class with myProperty equals value. So we skip the constructor
  function call.

```js
/**
 * es6 properties
 */
constructor()
{
    this.myProperty = 'value'
}
/**
 * es7 properties
 */
myProperty = 'value'
/**
 * es6 methods
 */
myMethod()
{...
}
/**
 * es7 methods
 */
myMethod = () => {....
}
```

- next gen class

```js
class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Max'
    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();
```

#### 18. The Spread & Rest Operator

- The spread and rest operators actually use the same syntax: `...`. what it called depends on where we use it
- the spread operator is used to split up array elements or object properties.
- The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not
  primitives), copying them safely.

```js
const newArr = [...oldArr, 1, 2]
const newObj = {...oldObj, newprops: 5}
```

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers) //1,2,3,4,5

const person = {
    name: 'max'
}
const newPerson = {
    ...person,
    age: 40
}
console.log(newPerson)
// {name:'max',age:40}
```

- rest operator used to merge a list of function arguments into an array.

```js
function sortArgs(...args) {
    return args.sort()
}
```

- for example sortArgs receives an unlimited amount of arguments.Though sorArgs function called with n number of
  arguments but with rest operator we receive all arguments as an array into one variable argument.

```js
const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3, 4))
// 1
```

#### 19. Destructuring

- Destructuring allows you to easily extract array elements or object properties and store them in variables.
- array destructuring

```js
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); //1,3
```

```js
[a, b] = ['hello', 'max']
console.log(a, b)// hellomax
```

- object destructuring

```js
const {name} = {name: 'max', age: 40}
console.log(name)// max
```

#### 20. Reference and Primitive Types Refresher

- numbers, strings, booleans, these are so-called primitive types
- whenever we reassign or store a variable in another variable. It will copy the value, objects and arrays are reference
  types.

```js
const person = {
    name: 'max'
}
const newPerson = person;

newPerson.name = 'will'

console.log(person, newPerson) //{ name: 'will' } { name: 'will' }
```

- person and newPerson both show the same value cause it copy the pointer not actual value. to avoid this use spred
  operatior

```js
const newPerson = {...person}
```

#### 21. Refreshing Array Functions

- [map()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates a new
  array populated with the results of calling a provided function on every element in the calling array.

```js
// map example
const number = [1, 2, 3]
const doubleNum = number.map(e => e * 2);
console.log(doubleNum) // [2,4,6]
```

- [find()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) returns the
  value of the first element in the provided array that satisfies the provided testing function. If no values satisfy
  the testing function, undefined is returned.

```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);// expected output: 12
```

- [findIndex()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
  method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it
  returns -1, indicating that no element passed the test.

```js
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));// expected output: 3
```

- [filter()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  method
  creates a new array with all elements that pass the test implemented by the provided function.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);// expected output: Array ["exuberant", "destruction", "present"]
```

- [reduce()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b) The
  reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single
  output value.

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
console.log(array1.reduce((a, b) => a + b))
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
console.log(array1.reduce((a, b) => a + b, 5))
// expected output: 15
```

- [concat()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
  method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new
  array.

```js
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); //[ 'a', 'b', 'c', 'd', 'd', 'e', 'f' ]
```

- [slice()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method
  returns a shallow copy of a portion of an array into a `new array` object selected from start to end `(end not included)`
  where start and end represent the index of items in that array. The original array will not be modified.
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));// expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));// expected output: Array ["bison", "camel", "duck", "elephant"]

```
- [splice()  =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method
  changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

#### 22. Wrap Up

#### 23. Next-Gen JavaScript - Summary

#### 24. JS Array Functions