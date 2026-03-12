## `var`, `let`, `const` in JavaScript

Declares variables, differentiated by **scope**, **hoisting**, and **mutability**.

---

### 1. `var` (Legacy)

*   **Mutable:** ✅ Reassignable, ✅ Redeclarable.
*   **Scope:** **Function-scoped** (ignores blocks).
*   **Hoisting:** Hoisted, initialized `undefined`.
*   **Recommendation:** Avoid.

### 2. `let` (Modern, Mutable)

*   **Mutable:** ✅ Reassignable, ❌ Not redeclarable.
*   **Scope:** **Block-scoped** (within `{}`).
*   **Hoisting:** Hoisted, but in **Temporal Dead Zone (TDZ)** (`ReferenceError` if accessed early).

### 3. `const` (Modern, Immutable Reference)

*   **Mutable:** ❌ Not reassignable (must init at declaration). Object/array *contents* can be modified.
*   **Scope:** **Block-scoped**.
*   **Hoisting:** Hoisted, but in **Temporal Dead Zone (TDZ)**.
*   **Recommendation:** Use by default; `let` if reassignment is strictly needed.

---

## Primitive vs. Reference Data Types

Categorized by memory storage and assignment behavior.

---

### 1. Primitive Data Types

*   **Definition:** Simple, single, immutable values.
*   **Storage:** Directly in **stack** memory.
*   **Assignment:** Creates a **copy of the value**.
*   **Types:** `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.

### 2. Reference Data Types

*   **Definition:** Complex, mutable values (objects, arrays, functions).
*   **Storage:** In **heap** memory. Variables hold a **reference (address)**.
*   **Assignment:** Creates a **copy of the reference** (both point to the same data).
*   **Types:** `Object`, `Array`, `Function`, `Date`, `RegExp`.

---

### Key Takeaway

*   **Primitives:** Copy by value, immutable.
*   **References:** Copy by reference (pointer), mutable.

---

## Functions in JavaScript

Functions are **first-class objects**: can be passed, returned, stored.

---

### Function Definition (Declaration)

*   **Definition:** Named, reusable code block for a task.
*   **Syntax:**
    ```javascript
    function name(params) {
      // Body
      return value; // Optional
    }
    ```
*   **Parameters:** Placeholders for arguments.
*   **Return Value:** Value sent back (defaults to `undefined`).

## Type Coercion

- Type Coercion happens when JavaScript automatically changes one type of value into another.
- Example: 
  ```javascript
console.log(5 + "10");
```