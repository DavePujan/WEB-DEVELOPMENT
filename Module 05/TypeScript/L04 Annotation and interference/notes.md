# Type Annotations and Inference in TypeScript

**Video**: [Type Annotations and Inference in TypeScript](https://youtu.be/mUz7nbbZJc0?si=BbjEpTaiQVYanp6n)

## 1. Core Concepts

- **Type Inference (Inference)**: TypeScript is smart enough to understand the type of data based on the value assigned to it. You don't always need to tell it explicitly [00:51].
  - *Example*: If you write `let drink = "chai"`, TypeScript infers that `drink` is a string.

- **Type Annotation**: Explicitly telling TypeScript what the data type of a variable should be [04:30].
  - *Syntax*: `variable: type`

## 2. Examples

### Type Inference
When a variable is initialized, TS locks its type.

```typescript
let drink = "chai"; // Inferred as string
// drink = 0; // Error: Type 'number' is not assignable to type 'string'
```

- It works for all standard JavaScript types (`string`, `number`, `boolean`, etc.) and calculations [02:10].

### Type Annotation
Manually defining the type to enforce strictness.

```typescript
let chaiFlavor: string = "masala chai";
// chaiFlavor = 2; // Error
```

- **Common Types** [05:22]:
  - `string`
  - `number`
  - `boolean` (all lowercase)

## 3. Common Errors

- **Syntax Errors**: Standard JavaScript syntax mistakes [03:02].
- **Type Errors**: The most common error in TS. It happens when you try to assign a value that doesn't match the variable's defined or inferred type [03:21].
  - *Error Message*: `"Type 'A' is not assignable to type 'B'"` [03:56].

## 4. Key Takeaway

- **Inference** is when TS understands the type automatically.
- **Annotation** is when you explicitly tell TS the type.