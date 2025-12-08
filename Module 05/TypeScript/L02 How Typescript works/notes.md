# How Typescript Works

## The Compilation Journey

The video explains the five key stages of how TypeScript code (`.ts` file) is converted into executable JavaScript (`.js` file).

### 1. Lexer (Scanner)
- **Function**: The lexer's job is to tokenize the code. Tokens are the basic keywords and components of the language (e.g., `const`, `let`, `function`, `return`).
- **Output/Role**: The process scans the entire code and catches obvious errors, such as a missing semicolon or an unclosed parenthesis [04:48].

### 2. Parser
- **Function**: The parser takes the tokens and creates a tree structure known as the Abstract Syntax Tree (AST) (or sometimes Concrete Syntax Tree) [05:14].
- **Output/Role**: The AST is a visualization of the code's structure and data flow, which helps in identifying syntax issues [05:28].

### 3. Binder
- **Function**: This is an additional step in TypeScript, not found in all languages, that takes the AST and prepares it for type checking [02:48].
- **Tasks**:
  - Creates Symbol Tables for additional TypeScript symbols (like `: string` or interfaces/structs) [07:24].
  - Establishes Parent Pointers to allow navigation up and down the syntax tree [07:54].
  - Creates Flow Nodes to represent control flow (like `if`/`else` statements) [08:13].

### 4. Checker (Type Checker)
- **Function**: This is the most crucial step that was missing from JavaScript, enabling Type Checking [02:53]. The checker code is the longest in the entire TypeScript repository [09:23].
- **Process**: It often performs structural checking and goes through the code two times to ensure that data types are not being changed or misused when values are assigned [09:14]. This is where strict checking of the syntax occurs [10:18].

### 5. Emitter (Generator)
- **Function**: The emitter's role is to generate the final files and strip off the extra TypeScript syntax [03:03].
- **Output**: It generates three files [03:17]:
  - The compiled JavaScript (`.js`) file.
  - The Declaration (`.d.ts`) file.
  - Map files.

- **Node.js Context**: When Node.js is said to "process" TypeScript, it actually takes the output of the emitter, which has already stripped away the TypeScript types, meaning Node is essentially running the resultant JavaScript [12:15].
