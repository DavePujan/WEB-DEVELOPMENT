Here are fully detailed notes from the video **"Level Up Your Debugging Skills | Frontend Tips & Tricks"** in Markdown format.

# Level Up Your Debugging Skills | Frontend Tips & Tricks

## **1. Introduction & Setup**

* **Goal:** Learn how to debug frontend applications (specifically React) using browser tools.
* **Context:** The presenter uses a demo **Todo Application** built with Vite, React, and TypeScript to demonstrate debugging techniques.
* **The Bug:**
* The application has a feature to filter todos by "All", "Active", and "Completed".
* **Issue:** The "Active" filter works correctly, but the **"Completed" filter is broken**—it shows both completed and non-completed items instead of just completed ones.
* **Timestamp:** [[01:08](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=68)]



---

## **2. Mental Model for Debugging**

Before touching code, understand the flow:

* **Identify the UI Issue:** The list being rendered is incorrect when the "Completed" filter is active.
* **Trace the Data:**
* The list is likely being rendered via a `.map()` function.
* Find where the list comes from. In this case, it is a variable named `filteredTodos`.
* Trace `filteredTodos` back to its source logic/function.
* **Timestamp:** [[02:53](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=173)]



---

## **3. Debugging with Browser DevTools (Sources Tab)**

The presenter recommends using Browser DevTools over VS Code for frontend debugging because browsers offer more environment-specific tools.

### **Locating the Code**

1. Open **Developer Tools** (F12 or Right-click > Inspect).
2. Go to the **Sources** tab.
3. **Important:** Ensure you are in the **Page** pane (not Content Scripts or Filesystem).
4. Navigate to the source file: `top > src > components > Todos.tsx`.
* *Note:* In TypeScript projects, you might see two files; select the one that represents the original source code (not the compiled JS).
* **Timestamp:** [[06:40](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=400)]



### **Setting Breakpoints**

* **Action:** Click on the line number in the code viewer where you suspect the issue (e.g., inside the `filterTodos` function or the `switch` statement).
* **Visual Indicator:** A blue arrow/marker appears on the line number.
* **Trigger:** Refresh the page or perform the action (click "Completed" filter) to hit the breakpoint. The browser pauses execution at that line.
* **Timestamp:** [[07:42](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=462)]

### **Stepping Through Code**

Use the navigation controls in the debugger pane:

* **Resume (Play icon):** Continue execution until the next breakpoint.
* **Step Over:** Execute the current line and pause at the next line (skips going *inside* function calls).
* **Step Into:** Go inside a function call on the current line.
* **Step Out:** Finish the current function and return to the caller.
* **Timestamp:** [[09:14](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=554)]

### **Inspecting Variables**

* **Hover:** Hover over variables in the code to see their current values.
* **Scope Pane (Right sidebar):**
* **Local:** Variables inside the current function/block.
* **Closure:** Variables accessed from the parent scope (e.g., React State variables like `filter`).


* **Watch Pane:** Manually add variables (e.g., `todos`) to track their values as they change.
* **Timestamp:** [[10:01](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=601)]

### **Finding the Bug**

* **Observation:** When stepping through the code with the "Completed" filter selected, the debugger jumped to the `default` case instead of the `case 'completed'`.
* **Root Cause:** A **typo** in the switch case string (e.g., `case 'complete'` instead of `'completed'`).
* **Fix:** Correcting the spelling fixes the logic so execution enters the correct case block.
* **Timestamp:** [[13:40](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=820)]

---

## **4. React Developer Tools (Extension)**

The presenter introduces the **React Developer Tools** extension (available for Chrome/Brave/Firefox) for React-specific insights.

### **Installation**

* Install the "React Developer Tools" extension from the Web Store.
* It adds two new tabs to DevTools: **Components** and **Profiler**.
* **Timestamp:** [[18:27](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1107)]

### **Components Tab**

* **Tree View:** Shows the React component hierarchy (e.g., `App` > `Todos` > `Card`).
* **Props & State:**
* Select a component to view its **Props**, **Hooks** (State), and who rendered it.
* **Live Editing:** You can edit the State or Props directly in the panel to test how the UI reacts (e.g., changing a button state or input text).


* **Source Link:** Click the `< >` icon to jump directly to the component's source code in the Sources tab.
* **Console Logging:** Click the "bug" icon to log the component's data to the console for easier inspection.
* **Timestamp:** [[19:11](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1151)]

### **Profiler Tab (Performance Tuning)**

This tool analyzes rendering performance.

* **Recording:** Click the "Record" circle, interact with the app (e.g., add a todo, toggle filters), then stop recording.
* **Flamegraph:** Visualizes which components rendered and how long they took.
* **Gray:** Did not render.
* **Green/Yellow:** Rendered (Yellow indicates taking longer).


* **Timestamp:** [[25:28](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1528)]

#### **Key Feature: "Why did this render?"**

* By default, you might not know *why* a re-render occurred.
* **Enable Setting:** Go to Profiler Settings (Process/Gear icon) > **"Record why each component rendered while profiling"**.
* **Benefit:** After recording, hovering over a component will tell you exactly why it updated (e.g., "Hook 2 changed", "Props changed").
* **Timestamp:** [[27:02](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1622)]

---

## **5. Additional Tips & Tricks**

* **Strict Mode Double Render:**
* React Strict Mode (enabled by default in dev) runs effects and renders twice to catch bugs.
* **Tip:** You can temporarily disable the double-logging behavior in React DevTools settings if it interferes with debugging. [[23:43](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1423)]


* **Conditional Breakpoints:**
* Right-click a line number in the Sources tab to add a condition (e.g., `filter === 'completed'`). The debugger will only pause if the condition is true. [[17:20](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1040)]


* **Performance:** The Profiler is essential for production apps to identify expensive renders and optimize them. [[26:07](http://www.youtube.com/watch?v=k5goUFU_Kgc&t=1567)]