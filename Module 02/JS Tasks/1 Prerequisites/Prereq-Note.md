# 🧠 Page 1: Core JavaScript Concepts

## click ctrl + shift + v to preview md file

---

## 1. Data Types and Variables

### 📋 JavaScript Data Types

JavaScript has **two types** of data:

* **Primitive Types** → Stored by value
  `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
* **Non-Primitive Types (Objects)** → Stored by reference
  `Object`, `Array`, `Function`, `Date`, etc.

```js
let str = "Hello"; // primitive
let arr = [1, 2, 3]; // non-primitive
```

---

### ⚙️ Variable Declarations: `var`, `let`, `const`

| Keyword | Scope           | Reassignable | Hoisted | Use Case                |
| ------- | --------------- | ------------ | ------- | ----------------------- |
| `var`   | Function-scoped | ✅ Yes        | ✅ Yes   | Legacy code             |
| `let`   | Block-scoped    | ✅ Yes        | 🚫 No   | Modern mutable variable |
| `const` | Block-scoped    | 🚫 No        | 🚫 No   | Constant references     |

```js
var a = 1; // function-scoped
let b = 2; // block-scoped
const c = 3; // block-scoped constant
```

---

### 🔄 Type Coercion and Type Casting

* **Type Casting (Explicit)** → Manually changing type

  ```js
  Number("123"); // 123
  String(100);   // "100"
  ```

* **Type Coercion (Implicit)** → JS auto-converts

  ```js
  "5" + 1; // "51" (string)
  "5" - 1; // 4 (number)
  ```

💡 **Tip:** Always use `===` for strict comparison to avoid coercion issues.

---

## 2. Operators

### Arithmetic, Comparison, Logical

```js
let x = 10, y = 5;
x + y; // 15
x > y; // true
x && y; // 5 (truthy value)
```

### ⚖️ Difference Between `==` and `===`

* `==` → checks **value only**, allows coercion
* `===` → checks **value & type**, no coercion

```js
"5" == 5;  // true
"5" === 5; // false
```

---

## 3. Control Structures

### Conditional Statements

```js
if (score > 90) console.log("Excellent!");
else if (score > 75) console.log("Good");
else console.log("Keep Practicing");
```

### Loops

```js
for (let i = 0; i < 3; i++) console.log(i);
while (i < 3) { i++; }
do { i++; } while (i < 3);
```

---

## 4. Functions

### Function Declarations and Expressions

```js
function greet() { return "Hi!"; } // declaration
const greet = function() { return "Hi!"; } // expression
```

### Arrow Functions & Lexical `this`

```js
const greet = () => "Hello";
const obj = {
  value: 10,
  show: () => console.log(this.value) // undefined, arrow functions don’t bind their own `this`
};
```

---

### Scope and Closures

**Scope:** Determines accessibility of variables.
**Closure:** Function + its lexical environment.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

🧠 **Closures help remember variables even after function execution ends!**

---

### Immediately Invoked Function Expressions (IIFE)

```js
(function() {
  console.log("Runs instantly!");
})();
```

Used to **avoid polluting global scope**.

---

## 5. Object-Oriented JavaScript

### Objects and Prototypes

```js
let person = { name: "Poojan", greet() { console.log("Hi " + this.name); } };
person.greet();
```

### Object Creation Patterns

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log("Hello " + this.name);
};
```

---

## 🧩 Page 2: Object-Oriented & Asynchronous JavaScript

---

## 1. Prototypal Inheritance

Every JS object inherits from another object via the **prototype chain**.

```js
const parent = { greet() { console.log("Hello"); } };
const child = Object.create(parent);
child.greet(); // "Hello"
```

---

## 2. ES6 Classes

```js
class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(`Hi, ${this.name}`); }
}
```

### Inheritance

```js
class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
}
```

---

## 3. Asynchronous JavaScript

### Callbacks & Promises

```js
function getData(callback) {
  setTimeout(() => callback("Data received!"), 1000);
}
getData(console.log);

// Promise version
const data = new Promise(resolve => setTimeout(() => resolve("Done!"), 1000));
data.then(console.log);
```

---

### Chaining Promises & Error Handling

```js
fetch("/api")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

### Event Loop & JS Runtime

JS is **single-threaded**, but async tasks are handled by the **event loop**.
Microtasks (Promises) run **before** macrotasks (setTimeout).

---

## 4. Advanced Topics

### Hoisting

```js
console.log(a); // undefined
var a = 5;
```

---

### Closures (Recap)

Used in **data hiding**, **function factories**, etc.

---

### Currying

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(5)(3); // 8
```

---

### Debouncing & Throttling

* **Debounce** → delay function call until inactivity.
* **Throttle** → limit function call frequency.

```js
function debounce(fn, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
}
```

---

### Modules

```js
// math.js
export const add = (a, b) => a + b;

// main.js
import { add } from './math.js';
```

---

## 🌐 Page 3: Web APIs, DOM, and ES6+

---

## 1. DOM Manipulation

```js
document.getElementById("title").textContent = "Hello JS!";
document.querySelector(".btn").addEventListener("click", () => alert("Clicked!"));
```

---

## 2. Browser Storage

```js
localStorage.setItem("name", "Poojan");
sessionStorage.getItem("name");
document.cookie = "user=Poojan";
```

---

## 3. Fetch API & AJAX

```js
fetch("https://api.github.com/users/octocat")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 4. Error Handling

```js
try {
  throw new Error("Something broke!");
} catch (e) {
  console.error(e.message);
} finally {
  console.log("Always runs");
}
```

---

## 5. ES6+ Features

### Destructuring

```js
const [a, b] = [1, 2];
const { name, age } = { name: "JS", age: 25 };
```

### Spread & Rest

```js
const arr = [1, 2];
const newArr = [...arr, 3];
function sum(...nums) { return nums.reduce((a, b) => a + b); }
```

### Template Literals

```js
let name = "Poojan";
console.log(`Hello, ${name}!`);
```

### Symbols & Iterators

```js
const sym = Symbol("id");
const obj = { [sym]: 123 };
```

---

## 📝 Interview Practice Questions

---

### 🟢 Easy

1. Difference between `var`, `let`, and `const`?
   **Ans:** `var` = function scope; `let` & `const` = block scope; `const` cannot be reassigned.

2. What is closure?
   **Ans:** A function with access to variables from its outer scope even after that scope has closed.

3. What does `===` do?
   **Ans:** Checks **both** value and type equality.

---

### 🟡 Medium

1. Explain event loop in JS.
   **Ans:** JS is single-threaded; the event loop manages asynchronous tasks, executing microtasks (Promises) before macrotasks (timeouts).

2. What is debouncing?
   **Ans:** A technique to delay execution of a function until a specified time has passed since the last call.

3. Difference between `call`, `apply`, and `bind`.
   **Ans:**

   * `call` → invokes immediately with arguments separated by commas
   * `apply` → invokes immediately with arguments as array
   * `bind` → returns new function with fixed context

---

### 🔴 Hard

1. Explain prototypal inheritance in depth.
   **Ans:** Objects in JS inherit directly from other objects using the prototype chain. Methods and properties are looked up in the prototype if not found on the object.

2. What are the practical uses of closures?
   **Ans:** Data privacy, memoization, event handlers, function factories.

3. Explain difference between synchronous and asynchronous JS execution.
   **Ans:**

   * **Synchronous:** Code runs line by line.
   * **Asynchronous:** Non-blocking, uses callbacks/promises/async-await to handle delayed tasks.

---

✅ **Tip for Interview Day:**

* Speak code out loud. Explain your thinking.
* Focus on **why**, not just **what**.
* Know the “why” behind closures, `this`, event loop, and promises.

---
