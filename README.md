# Web Development Learning Journey

Welcome to my Web Development learning repository! This project documents my journey through various technologies, frameworks, and concepts, organized by modules.

## 📚 Course Structure

### Module 01: Frontend Fundamentals
**Tech Stack:** HTML, CSS, GitHub

**What I have learnt:**
- **HTML**:
  - Structure of web pages using semantic tags.
  - Working with Tables, Forms, Buttons, and Lists.
  - Embedding media (Audio, Video, Images).
  - Hyperlinks and navigation.
- **CSS**:
  - Styling web pages (Colors, Fonts, Layouts).
  - Box Model, Flexbox, and Grid (inferred).
- **GitHub**:
  - Version control basics.
  - Repository management.

### Module 02: JavaScript & Backend
**Tech Stack:** JavaScript, Node.js, Express, MongoDB

**What I have learnt:**
- **JavaScript Core**:
  - Variables, Data Types, and Operators.
  - Control Flow (Conditionals, Loops).
  - Functions and Scope.
  - DOM Manipulation (Selectors, Events).
  - **Advanced Concepts**:
    - **Type Coercion**: Understanding implicit vs. explicit coercion, and the quirks of `==` vs `===`.
    - **Scopes & Closures**: The difference between `var`, `let`, and `const`, and how closures work (e.g., the `setTimeout` loop problem).
    - **Random Number Generation**: Using `Math.random()` and `Math.floor()` to generate integers and unique random numbers.
- **Backend**:
  - **Node.js**: Runtime environment for executing JS outside the browser.
  - **Express**: Building web servers and APIs.
  - **MongoDB**: NoSQL database basics.

### Module 03: DevOps & Design
**Tech Stack:** AWS, Docker, Figma, Tailwind CSS

**What I have learnt:**
- **DevOps**:
  - **AWS**: Cloud computing basics, deployment services.
  - **Docker**: Containerization, creating images, and running containers.
- **Design**:
  - **Figma**: UI/UX design principles and prototyping.
- **Styling Framework**:
  - **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Module 04: React Ecosystem
**Tech Stack:** React

**What I have learnt:**
- **React Basics**: Components, JSX, Props, and State.
- **React Hooks**: `useState`, `useEffect`, etc.
- **Project Structure**: Organizing React applications.
- **Advanced React**: (Inferred from "React By CWH") Context API, Routing, and State Management.

**Future Learning (Planned):**
- **UI Libraries**: Material UI (MUI), Chakra UI, Shadcn UI.
- **State Management**: Redux Toolkit, Zustand.
- **Frameworks**: Next.js.
- **Animation**: Framer Motion.

### Module 05: Full Stack with TypeScript, API Documentation & Configuration
**Tech Stack:** TypeScript, YAML, Swagger API Documentation

**What I have learnt:**

#### 1. **YAML** (Configuration Language):
  - **Purpose**: Human-readable data serialization language for configuration and automation.
  - **Use Cases**: Docker Compose, Kubernetes, GitHub Actions, CI/CD tools, and cloud infrastructure.
  - **Syntax Basics**:
    - Key-value pairs with colons (`:`)
    - Lists with hyphens (`-`)
    - Indentation-sensitive (2 spaces, no tabs)
    - Support for comments (`#`)
    - Can reuse data via anchors and aliases
  - **Advantages over JSON/XML**: More readable, supports comments, handles complex nested structures.
  - **Examples**: `docker-compose.yml`, `chai.yml` configurations.

#### 2. **TypeScript Core Concepts** (L02-L06):
  - **How TypeScript Works**:
    - Compilation pipeline: Lexer → Parser → Binder → Checker → Emitter.
    - Understanding AST (Abstract Syntax Tree) and Symbol Tables.
  
  - **Project Setup** (L03):
    - Initializing and configuring `tsconfig.json`.
    - Setting `rootDir` and `outDir` for source and compiled files.
    - Running the TypeScript compiler (`tsc`) and using `ts-node` for execution.
  
  - **Type System** (L04-L06):
    - **Type Annotations**: Explicitly defining types (`string`, `number`, `boolean`, etc.).
    - **Type Inference**: How TypeScript automatically detects types from assignments.
    - **Union Types**: Using `|` to define multiple possible types (e.g., `string | number`).
    - **The `any` Type**: When to use and when to avoid the `any` type.
    - **Type Narrowing & Type Guards**: Refining types within conditional blocks.
    - **Strictness Modes**: Preventing common type errors during development.

#### 3. **Swagger/OpenAPI Documentation**:
  - **Purpose**: Auto-generating API documentation and interactive testing interface.
  - **Setup**:
    - Installing `swagger-autogen` and `swagger-ui-express`.
    - Configuring Swagger in the main server file (`index.js`).
    - Setting up routes and documentation output.
  - **Workflow**:
    - Create `swagger.js` file with documentation configuration.
    - Define API endpoints with Swagger decorators.
    - Auto-generate `swagger-output.json` from route definitions.
    - Serve Swagger UI at `/docs` endpoint for API exploration.
  - **Practical Implementation**: Full project setup with Express server, routes, and auto-generated API docs.

---

*This repository is automatically generated and updated as I progress through my learning modules.*
