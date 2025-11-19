# Intermediate JavaScript

## Truthy vs. Falsy

In JavaScript, every value evaluates as either `true` (truthy) or `false` (falsy) in a boolean context (e.g., `if` statements).

---

### Falsy Values

There are only a few specific falsy values:
1.  `false`
2.  `0` (and `-0`)
3.  `""` (empty string)
4.  `null`
5.  `undefined`
6.  `NaN` (Not-a-Number)

**Example:**
```javascript
if (0) { console.log("Won't run"); }
let username = "";
if (!username) { console.log("Username is empty."); } // Runs
```

---

### Truthy Values

Any value that is *not* one of the falsy values is truthy.
This includes:
*   `true`
*   Any non-zero number (`1`, `-5`, `3.14`)
*   Any non-empty string (`"hello"`, `"false"`, `" "`)
*   Any object (`{}`, `[]`, `function() {}`)

**Example:**
```javascript
if ("hello") { console.log("Runs"); }
if ([]) { console.log("Runs, even an empty array is truthy!"); }
```

---

### How to Check

*   `Boolean(value)`: Explicitly converts to `true`/`false`.
*   `!!value`: Uses the logical NOT operator twice for conversion.

---

## Lexical Environment

*   **Definition:** An internal JavaScript engine mechanism that defines where variables and functions "live" and what they can "see." It's like a container for variables and functions in a specific scope.
*   **Purpose:** Holds local variables, function declarations, and parameters for a code scope.
*   **Structure:**
    1.  **Environment Record:** Stores the actual variable/function bindings (names and values).
    2.  **Outer Lexical Environment Reference:** A link to its parent scope. This creates the **scope chain**.
*   **Creation:** Created **during the parsing/lexing phase** (when the code is read), based on where the code is physically written.
*   **Simplified View:** It's the "backpack" of variables and functions available in a block of code, with a string connecting it to its parent's backpack to find missing items.

---

## Execution Context

*   **Definition:** The entire environment in which a piece of JavaScript code is currently running. It's the "workspace" for code execution.
*   **Purpose:** Manages the full lifecycle of code execution. A **Global Execution Context** is created when the script starts. A **new Execution Context** is created every time a function is called.
*   **Components:** Each Execution Context contains:
    1.  **Lexical Environment:** (As above) For variable storage and scope chain lookup.
    2.  **`this` Binding:** Determines what the `this` keyword refers to.
*   **Lifecycle:**
    *   **Creation Phase (before run):** Sets up Lexical Environment, handles hoisting (`var`/functions), determines `this`.
    *   **Execution Phase (code runs):** Executes code line by line.
*   **Execution Stack (Call Stack):**
    *   Manages Execution Contexts. Global Context at the bottom.
    *   Function calls push new contexts onto the stack.
    *   Functions finishing pop their contexts off.
*   **Simplified View:** It's the full temporary "office" set up each time JavaScript runs a function or the entire script, containing everything needed to perform the work.