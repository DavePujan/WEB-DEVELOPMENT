# 🏗️ JavaScript Hoisting: The `var` Scope Mystery

Hey friend\! The code snippet you're looking at is the perfect way to test your understanding of **Hoisting**, which is one of JavaScript's trickiest foundational concepts.

Master this guide to ace any question about variable declaration and scope\! Good luck tomorrow\! 🚀

-----

## 1\. What is Hoisting? (The Theory)

**Hoisting** is JavaScript's mechanism where variable and function declarations are conceptually **moved to the top** of their containing scope (the global scope or the function scope) during the compilation phase, before the code is executed.

  * **Crucial Point:** Only the **declaration** is hoisted, **not** the initialization (assignment of a value).

### Hoisting Rules:

1.  **`var` declarations are hoisted** to the top of the **function** (or global) scope.
      * The variable is initialized with the value `undefined`.
2.  **Function declarations are hoisted** to the top of the scope, and the **entire function** is hoisted (both name and definition).
3.  **`let` and `const` declarations are also hoisted**, but they are initialized differently. They are placed in a "Temporal Dead Zone" (TDZ) and cannot be accessed until the interpreter reaches the actual line of declaration.

-----

## 2\. The Code Breakdown: Why the Output is `undefined`

Let's look at the code and see how Hoisting affects its execution:

```javascript
// Line 1
console.log(value); 

if (true) { // Line 2
  // Line 3: var declaration is here
  var value = "Declared in block"; // Line 4
}

// Line 5
console.log(value); 
```

### 🧠 Dry Run: What the Interpreter Sees

Before execution, Hoisting rewrites the code **conceptually** like this:

```javascript
// Conceptually Hoisted Code:
var value = undefined; // 1. var declaration is hoisted to the top

// Execution starts here:

// Line 1 (console.log(value);)
console.log(value); // Accesses the hoisted 'value', which is 'undefined'

// Line 2 (if (true))
if (true) {
  // Line 3: The actual declaration is skipped (already hoisted)

  // Line 4 (value = "Declared in block";)
  value = "Declared in block"; // Assignment happens here
}

// Line 5 (console.log(value);)
console.log(value); // Accesses 'value' after assignment (the new value)
```

### ❌ Output Analysis

| Output Line | Code Line | Actual Value | Why It Happened |
| :--- | :--- | :--- | :--- |
| **`undefined`** | Line 1 | `undefined` | The `var value` **declaration** was hoisted to the top and automatically initialized to `undefined`. The value hasn't been assigned yet. |
| **`Declared in block`** | Line 5 | `"Declared in block"` | The `if` block ran (since `true` is true), and the assignment statement (`value = "Declared in block"`) updated the **single** shared `value` variable. |

-----

## 3\. The `var` Scope vs. Hoisting

The output also highlights a key difference between `var` and `let`/`const`: **Scope**.

  * The `var value` declaration inside the `if` block is **NOT** scoped to that block. Since `var` is **function-scoped** (or global-scoped here), the variable exists across the entire script.
  * This is why the assignment on Line 4 (`value = "Declared in block"`) affects the final `console.log(value)` on Line 5.

### Contrast with `let` (Block Scope)

If we change `var` to `let`:

```javascript
console.log(value); // Line 1

if (true) {
  let value = "Declared in block"; // Line 4
}

console.log(value); // Line 5
```

| Output Line | Output | Why It Happened |
| :--- | :--- | :--- |
| **Line 1** | `ReferenceError: Cannot access 'value' before initialization` | **Hoisting + TDZ:** `let value` is hoisted but accessing it before Line 4 throws a `ReferenceError` due to the Temporal Dead Zone. Execution stops here. |

If you were to remove the first `console.log(value)`:

```javascript
// console.log(value); // Removed
if (true) {
  let value = "Declared in block";
}
console.log(value); // Line 5
```

| Output Line | Output | Why It Happened |
| :--- | :--- | :--- |
| **Line 5** | `ReferenceError: value is not defined` | **Block Scope:** The `let value` declaration is block-scoped to the `if` block. It does not exist outside of it, so Line 5 fails. |

-----

## 4\. Interview Questions on Hoisting

### ❓ Question 1:

**Explain the concept of Hoisting. What part of a variable is hoisted?**

**💡 Answer:**
Hoisting is the mechanism by which JavaScript conceptually moves declarations (not initializations) to the top of their scope during compilation. For `var`, the variable declaration is hoisted, and the variable is initialized to `undefined`. This allows you to use a `var` variable before its declaration, though its value will be `undefined`.

### ❓ Question 2:

**Does `let` and `const` get hoisted? If so, why do we get a `ReferenceError` when accessing them before declaration?**

**💡 Answer:**
Yes, `let` and `const` are technically hoisted, but unlike `var`, they are not initialized to `undefined`. Instead, they are put into a state called the **Temporal Dead Zone (TDZ)** from the start of the scope until the actual declaration line is executed. Accessing them during the TDZ results in a `ReferenceError`, which is why they offer safer behavior than `var`.

### ❓ Question 3:

**What is the difference in hoisting between a Function Declaration and a Function Expression?**

**💡 Answer:**

1.  **Function Declaration** (`function foo() { ... }`): The entire function (name and definition) is hoisted. You can call the function anywhere in its scope.
2.  **Function Expression** (`var foo = function() { ... }`): Only the `var foo` variable name is hoisted and initialized to `undefined`. The function definition assignment happens at the line of code, so trying to call `foo()` before the assignment line will result in a `TypeError: foo is not a function`.

-----

## 5\. More Code Examples

| Code Snippet | Output | Explanation |
| :--- | :--- | :--- |
| `foo(); function foo() { console.log(1); }` | `1` | Function declarations are fully hoisted, so the call works before the definition. |
| `bar(); var bar = function() { console.log(2); }` | `TypeError: bar is not a function` | `var bar` is hoisted (`undefined`), but the assignment to the function happens later. Calling `undefined()` throws a `TypeError`. |
| `console.log(a); let a = 10;` | `ReferenceError` | `let` is hoisted into the **TDZ**. Accessing it before the declaration line throws an error. |
| `var x = 1; function f() { console.log(x); var x = 2; } f();` | `undefined` | **Function Scope Hoisting:** The `var x = 2` declaration is hoisted to the top of `f()`. The `console.log(x)` sees the hoisted, unassigned `x` inside the function, not the global `x=1`. |