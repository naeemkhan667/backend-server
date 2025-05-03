# backend-server
Backend server boilerplate wtih typscript

# npm init -y

npm init: This command is used to create a package.json file in your project's root directory. The package.json file is essential for Node.js projects as it stores metadata about the project, such as its name, version, description, entry point, scripts, dependencies, and devDependencies. When you run npm init without any flags, it will interactively prompt you to provide information for each field in the package.json file.
-y: This flag stands for "yes". When you add -y to the npm init command, it tells npm to use default values for all the fields in the package.json file instead of prompting you for input. This quickly creates a basic package.json file with default settings.

# npm i express

npm i express (or npm install express) downloads and installs the Express framework into your project, making it available for you to use to build your web server or API.

# npm install --save-dev typescript @types/express @types/node ts-node nodemon

## typescript: 
This is a superset of JavaScript that adds static types. Using TypeScript helps catch errors during development rather than at runtime, and provides better tooling like autocompletion and refactoring.

## @types/express:
This package provides type definitions for the Express web application framework. Since Express is written in JavaScript, @types/express allows you to use Express within a TypeScript project with type safety.

## @types/node:
Similar to @types/express, this package provides type definitions for Node.js core modules (like fs, http, path, etc.). This enables you to use Node.js built-in modules in your TypeScript code with type checking.

## ts-node:
This is a TypeScript execution engine for Node.js. It allows you to run TypeScript files directly without needing to compile them to JavaScript beforehand. This is very convenient for development and scripting.

## nodemon:
This is a utility that monitors for any changes in your source code and automatically restarts your server. It's primarily used during development to avoid manually stopping and starting your Node.js application every time you make a change.

# npx tsc --init
This command creates a tsconfig.json in your project root. Open this file and modify the following key options for a typical Express.js project setup:

{
  "compilerOptions": {
    "target": "ES2018",         /* Specify ECMAScript target version */
    "module": "commonjs",       /* Specify module code generation */
    "lib": ["es2018"],          /* Specify library files to be included in the compilation */
    "outDir": "./dist",         /* Redirect output structure to the directory */
    "rootDir": "./src",         /* Specify the root directory of input files */
    "strict": true,             /* Enable all strict type-checking options */
    "esModuleInterop": true,    /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies allowSyntheticDefaultImports. */
    "skipLibCheck": true,       /* Skip type checking of all declaration files (*.d.ts). */
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

# target: 
Specifies the JavaScript version to compile to. ES2018 is a common choice for modern Node.js environments.

# module: 
Specifies the module system. commonjs is standard for Node.js.

# outDir: 
The directory where the compiled JavaScript files will be placed (./dist).

# rootDir: 
The root directory of your TypeScript source files (./src).

# strict: 
Enables a broad range of strict type-checking options, highly recommended for better code quality.

# esModuleInterop:
 Essential for compatibility when importing modules.

# skipLibCheck: 
Skips type checking of declaration files, which can speed up compilation.

# forceConsistentCasingInFileNames:
Helps prevent issues related to file path casing on different operating systems.

# include: 
Specifies which files to include in the compilation.

# exclude:
 Specifies which files to exclude from the compilation.


# Create a src directory and an entry file (e.g., index.ts) within it.

# Update package.json Scripts:

"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "nodemon --exec ts-node src/index.ts",
  "test": "echo \"Error: no test specified\" && exit 1"
},


# build: 
Compiles the TypeScript code from src to JavaScript in the dist directory using the tsc command.

# start: 
Executes the compiled JavaScript file in the dist directory. This script is typically used for running the application in production after building.

# dev: 
Uses nodemon with ts-node to run the src/index.ts file directly. nodemon watches for file changes and automatically restarts the server, providing a convenient development workflow with hot-reloading.