# Understanding Unions & Any

**Video**: [Understanding Unions & Any](https://youtu.be/fFs17LZhicg?si=Bw-6rT4b84i8No6k)

## 1. Union Types (The Good)

- **Purpose**: Union types allow a variable to hold more than one type of value (e.g., a string or a number) [00:45, 01:29].
- **Syntax**: Use the pipe symbol (`|`) to combine types [01:35].
  - *Example*: `let subs: number | string = 10;` [01:35]

- **Real-World Application (Literal Union Types)**: You can restrict a variable to a specific set of string literal or number literal values, which is extremely useful for defining possible states or options [02:13].

  - *Example 1 (API Status)*:
    ```typescript
    let apiRequestStatus: "pending" | "success" | "error" = "pending";
    // This variable can only be assigned "pending", "success", or "error" [00:03:10].
    ```

  - *Example 2 (Airlines Seats)*:
    ```typescript
    let airlineSeat: "aisle" | "window" | "middle" = "middle";
    // This provides excellent code suggestions (IntelliSense) and type safety, making development easier [00:04:22].
    ```

- **Handling Edge Cases**: Unions are also used to handle potential edge cases, like a variable possibly being undefined (especially in loops where assignment is not guaranteed) [07:55, 08:39].
  - *Example*: `let currentOrder: string | undefined;`

## 2. The `any` Type (The Bad)

- **Meaning**: The `any` type is a bypass; it means the variable can hold any type of data (string, number, boolean, object, etc.) [06:50].
- **Impact**: Using `any` effectively disables TypeScript's type-checking for that variable. It means you don't care what the data type is [06:56, 07:01].
- **Recommendation**: You should avoid using `any` in every situation possible, as it undermines the benefits of using TypeScript [09:09].
- **Reason to Avoid**: It defeats the purpose of type safety, allowing you to assign a number, string, or boolean to the same variable without compiler error [07:12, 07:17].
