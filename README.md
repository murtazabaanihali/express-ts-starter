# Express.js + TypeScript Starter

This is a minimal starter project to build an API using [Express.js](https://expressjs.com/) with [TypeScript](https://www.typescriptlang.org/). It includes a basic project structure, essential TypeScript configuration, and basic scripts for development.

## Features

- **Express.js**: Fast, unopinionated web framework for Node.js
- **TypeScript**: Typed JavaScript at scale
- **Nodemon**: Automatically restarts the server on file changes
- **ESLint**: Linter for finding and fixing code issues

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/murtazabaanihali/express-ts-starter.git
   cd express-ts-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Project Structure

```bash
.
├── src                 # Source code
│   └── app.ts          # Entry point of the application
├── dist                # Compiled JavaScript output
├── .eslintrc.json      # ESLint configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project metadata and dependencies
```
### Running the Project

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   npm start
   ```

   Alternatively, you can use the development mode which will automatically restart the server on file changes:

   ```bash
   npm run dev
   ```

The server will be running on [http://localhost:3000](http://localhost:3000).


### Scripts

- **`build`**: Compiles the TypeScript files into JavaScript in the `dist/` directory.

   ```bash
   npm run build
   ```

- **`start`**: Runs the compiled app from the `dist/` folder using Node.js.

   ```bash
   npm start
   ```

- **`dev`**: Runs the app in development mode with `nodemon`, watching for file changes.

   ```bash
   npm run dev
   ```

- **`lint`**: Lints the project using ESLint with TypeScript extensions.

   ```bash
   npm run lint
   ```

### License

```
Do whatever you want to this repo.