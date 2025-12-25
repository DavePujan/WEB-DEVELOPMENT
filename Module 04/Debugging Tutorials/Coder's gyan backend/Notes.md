# Debugging Node.js Applications in VS Code

These are the comprehensive notes for the video **"This Is How I Debug My Node.js Applications"** by **Coder's Gyan**.

These notes include the **source code** for the buggy application used in the tutorial, followed by a step-by-step guide on how to set up the VS Code debugger, identify the bugs, and fix them efficiently.

---

### 💻 **The Buggy Application (Source Code)**

This is the code used in the video. It contains **three specific bugs** that we will find and fix.

**`server.js`**

```javascript
const express = require('express');
const app = express();

// ❌ BUG 1: Missing JSON body parser middleware
// app.use(express.json());

const products = [
  { id: 1, price: 20, name: 'Product 1' },
  { id: 2, price: 50, name: 'Product 2' },
  { id: 3, price: 100, name: 'Product 3' },
];

const calculateItemTotal = (item) => {
  // ❌ BUG 2: Type mismatch causing 'undefined'
  // item.productId is a String ("1"), p.id is a Number (1). '===' fails.
  const product = products.find((p) => p.id === item.productId);

  // ❌ BUG 3: Logic error & String concatenation
  // Adding a string to a number results in "20" + "2" = "202" instead of 22.
  return product.price + item.quantity;
};

const calculateTotal = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    total += calculateItemTotal(item);
  });
  return total;
};

app.post('/get-total', (req, res) => {
  const cart = req.body;
  // Execution fails here first because cart is undefined
  const total = calculateTotal(cart);
  res.json({ total });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
```

---

### 🔍 **How to Debug (Following the Video)**

To follow along with the tutorial, you need to use **Postman** (or any API client) to send a request that triggers the bugs.

#### **Request Details**

*   **Method:** `POST`
*   **URL:** `http://localhost:5000/get-total`
*   **Body (JSON):**

```json
[
  { "productId": "1", "quantity": 2 },
  { "productId": "2", "quantity": 1 }
]
```

### 🐞 **The Bugs You Will Encounter**

1.  **Crash 1: `Cannot read properties of undefined (reading 'forEach')`**
    *   **Cause:** `req.body` is `undefined` because `app.use(express.json())` is missing.

2.  **Crash 2: `Cannot read properties of undefined (reading 'price')`**
    *   **Location:** Inside `calculateItemTotal`.
    *   **Cause:** The `find()` method returns `undefined`. The client sends `"productId": "1"` (string), but the server has `id: 1` (number). The strict equality `===` fails.

3.  **Logic Error: Huge Total (e.g., 202501 instead of 90)**
    *   **Cause:** The code uses `product.price + item.quantity`. Since quantity is a string, JavaScript concatenates them (`20` + `"2"` becomes `"202"`). It should be `product.price * item.quantity`.

---

### 🛠️ **Debugging Setup & Process**

#### **1. The Problem with `console.log`**

*   **Scenario:** When running the buggy app, sending a POST request results in a `500 Internal Server Error`.
*   **The Inefficient Method:** Developers typically add `console.log(cart)` to check the data. If that shows `undefined`, they move the log up to `req.body` and restart the server repeatedly.
*   **Drawback:** In complex applications, this requires restarting the server multiple times and cluttering the code with logs.

#### **2. Setting up VS Code Debugger**

1.  Click the **Run and Debug** icon in the left sidebar.
2.  Click **"create a launch.json file"** and select **Node.js**.
3.  This creates a `.vscode/launch.json` file. You can close this file as the default configuration usually works.
4.  Select the **"Debug Script"** (e.g., `dev` script from `package.json`) from the debug dropdown if you want to run your specific start script.
5.  Click the **Play** button to start the server in debug mode. The bottom bar will turn orange/red indicating the debugger is attached.

#### **3. Debugger Features Explained**

Once the debugger is running, you have access to powerful tools:

*   **Breakpoints:** Click to the left of the line number (red dot). The code execution will **pause** exactly at this line when hit.
*   **Variables Section:** Shows local variables (like `req`, `res`, `this`) in the current scope.
*   **Call Stack:** Shows the hierarchy of function calls. The top function is the one currently executing. You can click on previous functions to jump back and see their state.
*   **Watch Section:** Allows you to manually type a variable name (e.g., `total`) to track its value in real-time as you step through code.
*   **Toolbar Controls:**
    *   **Continue:** Resume execution until the next breakpoint.
    *   **Step Over:** Execute the current line and move to the next line.
    *   **Step Into:** Dive *inside* the function call on the current line.

---

### 🐛 **Fixing the Bugs (Step-by-Step)**

#### **Bug 1: `Cannot read property of undefined` (Crash)**

*   **Observation:** The debugger pauses at the endpoint. Hovering over `req.body` or checking the Variables section shows it is `undefined`.
*   **Analysis:** Data is being sent but not received. This indicates the request body isn't being parsed.
*   **Fix:** Add the Express JSON middleware.

```javascript
app.use(express.json()); // Added at [00:04:23]
```

#### **Bug 2: `Cannot read property 'price' of undefined` (Crash)**

*   **Observation:** After fixing Bug 1, a new error appears inside `calculateItemTotal`. The debugger shows `product` is `undefined`.
*   **Deep Dive:**
    *   `product.id` is a **Number** (1).
    *   `item.productId` is a **String** ("1") (coming from the JSON request).
    *   The code uses `===` (strict equality), so `1 === "1"` returns false.

*   **Fix:** Convert the incoming ID to a number before comparing.

```javascript
const product = products.find((p) => p.id === Number(item.productId)); // Fixed around [00:18:25]
```

#### **Bug 3: Logic Error (Wrong Calculation)**

*   **Observation:** The server no longer crashes, but the total returns `202` instead of the expected `22` (Price 20 + Qty 2).
*   **Debugging:**
    *   Using **Step Into**, we see: `price` is `20` (Number) and `quantity` is `"2"` (String).
    *   The code performs `product.price + item.quantity`.
    *   In JavaScript, `Number` + `String` = String Concatenation (`20` + `"2"` = `"202"`).

*   **Fix:** Logic correction. We should be multiplying price by quantity, not adding. Multiplication also automatically coerces the string `"2"` into a number.

```javascript
return product.price * item.quantity; // Fixed at [00:21:22]
```

---

### **Reference Video**
[This Is How I Debug My Node.js Applications](https://www.youtube.com/watch?v=HNk0VIuSZ3o)