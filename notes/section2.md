#### 12. Module Introduction

- some summary on next gen javascript.

#### 13. Understanding "let" and "const"

- var and let are same thing
- we se const if we plan on creating a constant value, so something which we only assign once and never change.

#### 14. Arrow Functions

- the `this` keyword doesn't always refer to what we might have expected it to refer to during you writing our code.
  When we use this inside an arrow function it will always keep its context and not change it surprisingly.

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

- if arrow function syntax can be shorter. if there is only one argument we can avoid `()` if there is single statement
  return we can avoid return key word with `{}` sign.

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
    printMyName = () =>{
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();
```

#### 18. The Spread & Rest Operator

#### 19. Destructuring

#### 20. Reference and Primitive Types Refresher

#### 21. Refreshing Array Functions

#### 22. Wrap Up

#### 23. Next-Gen JavaScript - Summary

#### 24. JS Array Functions