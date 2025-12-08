# How to setup Typescript in project

**Video**: [How to setup Typescript in project](https://youtu.be/4O4Y1TJz3F0)

## 1. Installation Strategy
- **Global vs Project-wise**: You can install TypeScript globally (`-g`) or per project.
- **Recommendation**: Install project-wise to handle different TypeScript versions for different projects and avoid version conflicts [01:15].

## 2. Step-by-Step Setup

### Step 1: Initialize Node Project
Create a `package.json` file.

```bash
npm init -y
```

### Step 2: Install TypeScript
Install TypeScript as a development dependency [02:30].

```bash
npm install -D typescript
# OR
npm install --save-dev typescript
```
- This adds `typescript` to `devDependencies` in your `package.json`.

### Step 3: Initialize TypeScript Configuration
Since TypeScript is not installed globally, use `npx` to run the compiler (`tsc`) to generate the config file [04:24].

```bash
npx tsc --init
```
- This creates a `tsconfig.json` file with default settings.

## 3. Configuring tsconfig.json
Key settings to look for or uncomment [05:11]:
- `"rootDir": "./src"`: Tells TypeScript to look for source files in a `src` folder.
- `"outDir": "./dist"`: Tells TypeScript to output compiled JavaScript files to a `dist` folder.
- `"target": "es2016"` (or `es5`, `esnext`, etc.): Specifies the version of ECMAScript to compile to.

## 4. Writing Code
- Create a `src` folder.
- Create a file inside it, e.g., `src/index.ts`.
- Example TypeScript code [08:02]:

```typescript
function greet(name: string): string {
    return `Hello ${name}`;
}
console.log(greet("Chai aur Code"));
```

## 5. Compiling and Running

### Compile
Run the TypeScript compiler using `npx` [09:45]:

```bash
npx tsc
```
- This reads `tsconfig.json` and compiles files from `rootDir` (`src`) to `outDir` (`dist`).
- It generates `.js` files and `.js.map` files (for debugging).

### Run
Run the generated JavaScript file using Node:

```bash
node dist/index.js
```

## 6. Workflow Improvements (Scripts)
You can add scripts to `package.json` to make running commands easier:

```json
"scripts": {
    "start": "node dist/index.js",
    "dev": "npx tsc && node dist/index.js"
}
```

### Using ts-node (Optional for Dev)
For development, you can run TypeScript files directly without manually compiling first using `ts-node` [11:51].

1. **Install**:
   ```bash
   npm install -D ts-node
   ```
2. **Run**:
   ```bash
   npx ts-node src/index.ts
   ```
