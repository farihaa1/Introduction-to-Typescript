### Introduction to typescript

TypeScript is a syntactic superset of JavaScript and a object oriented Programming Language which adds static typing means it adds syntax on top of Javascript


TypeScript uses 
-compile time type checking. 
(Which means it checks if the specified types match before running the code, not while running the code.)

* Lacking in javascript
-dynamically typed language
-hard to find bugs
-catch errors only in runtime


* Benefits in typescript 
-Supports older browser
-type safety
-increase your productivity
-Less Bugs and Less Testing

* Drawbacks of using Typescript
-type complexities
-limited library support
-over engineering
-migration challenges

## Types of typescript

Primitive           
->number
->string
->boolean
->null
->undefined
->symbol

Non-primitive
->Array
->tuple
->Object


## 🛠 TypeScript Project Setup

### 1. Initialize TypeScript

```bash
tsc --init
```

### 2. Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "rootDir": "./src/",
    "outDir": "./dist/",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 3. Install `ts-node-dev`

```bash
npm install -g ts-node-dev
```

### 4. Run the project

```bash
ts-node-dev --respawn --transpile-only src/index.ts
```

---

## 📁 Folder Structure

```
2k25-Explore-advance-types-of-typescript/
├── src/             # All TypeScript source files
│   ├── index.ts     # Entry point
│   └── examples/    # Example scripts (types, functions, etc.)
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript compiler configuration
└── README.md        # This documentation file
```

---
