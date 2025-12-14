# Summary of Notes

The video explains **Type Narrowing** and **Type Guards** in TypeScript, which are essential for writing safer, more robust code by ensuring a variable's type is confirmed within a specific block of code.

## Key Concepts

- **`unknown` vs. `any`**
  - **`any`**: The most capable type, but it skips all type checking, which is a poor practice.
  - **`unknown`**: A safer alternative. It forces you to perform a type check (narrowing) before you can use the value, print it, or access its properties, making it preferred for handling external data like API responses.

## Types of Type Guards/Narrowing

| Type Guard | Description | Example & Timestamp |
| :--- | :--- | :--- |
| **`typeof`** | Used to check for primitive types like `string` or `number`. It guarantees the type within the `if` block, enabling correct method suggestions. | Checking `if (typeof kind === 'string')` in the `getChai` function [[02:49](http://www.youtube.com/watch?v=TdejZsExjws&t=169)]. |
| **Truthiness** | Checks if a value exists (is "truthy"). Often used for optional parameters. | Checking `if (message)` in the `serveChai` function to guarantee the message is not `null` or `undefined` [[04:47](http://www.youtube.com/watch?v=TdejZsExjws&t=287)]. |
| **`instanceof`** | Checks if an object is an instance of a specific class. This is useful to ensure which class's method is being called, especially when methods have the same name. | Checking `if (chai instanceof KulhadChai)` [[09:47](http://www.youtube.com/watch?v=TdejZsExjws&t=587)]. |
| **Exhaustive Checks** | Using a `switch` statement to check every possible value in a Union Type. The code is considered precise because all possible cases are handled. | Using `switch` on the `order.type` when the `order` is a union of `MasalaChai`, `GingerChai`, and `ElaichiChai` types [[18:02](http://www.youtube.com/watch?v=TdejZsExjws&t=1082)]. |
| **Custom Type Guards** | A user-defined function that returns a type predicate, such as `obj is ChaiOrder`. This function performs manual checks for complex object structures. | The `isChaiOrder(obj): obj is ChaiOrder` function, which checks if the object has the required properties (`type` is a string, `sugar` is a number) [[11:13](http://www.youtube.com/watch?v=TdejZsExjws&t=673)]. |
| **`in` Operator** | Checks for the presence of a specific property within an object. | Checking `if ('spiceLevel' in order)` to confirm the object is a `MasalaChai` type, as only that type has the `spiceLevel` property [[19:40](http://www.youtube.com/watch?v=TdejZsExjws&t=1180)]. |

You can watch the video here: [Type Narrowing & Type Guards](http://www.youtube.com/watch?v=TdejZsExjws)
