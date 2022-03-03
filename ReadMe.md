# The Cozy Library

React Project from Scratch (Without CRA)

### Git Initialization

- git init
- .gitignore  

### NPM Initialization
- npm init

### Adding Minimum Packages

- dependencies : react, react-dom
- devDependencies: typescript, @types/react, @types/react-dom

### Configuring TypeScript

- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
can be created by `npx tsc --init` command


### [Configuring Babel](https://babeljs.io/docs/en/presets/)

```
npm i -D @babel/core @babel/preset-env  @babel/preset-react @babel/preset-typescript
```
- creating `.babelrc`

### webpack
```
npm i -D webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin mini-css-extract-plugin  

```
```
npm i -D babel-loader

```
- creating a `webpack.config.js` file
- adding the `start` script in `package.json`

### CSS

```
npm i -D css-loader style-loader
```

### Image / SVG 
- asset loaders in webpack config
add `declarations.d.ts` with required values

else typescript will complain `Cannot find module './test.svg' or its
corresponding type declarations.`

#### Refractoring the webpack files for development, production env and
edit the `scripts` in `package.json`

### [React Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
Improving developer experience.
- updates the changed DOM area only (after code change)

```
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

### ESLint

```
npm i -D eslint  
```
after run this command and choose the options
```
npx eslint --init
```
extend `.eslintrc.js` with 
```
npm i -D eslint-plugin-react-hooks
```
add rules to disable some ESLint warnings/errors.


This plugin intends to support linting of ES2015+ (ES6+) 
import/export syntax, and prevent issues with misspelling of file paths and import names

```
npm i -D eslint-plugin-import 
```
accessibility check (eg:alt-text: Enforce all elements that require alternative text have meaningful information to relay back to end user)
```
npm i -D eslint-plugin-jsx-a11y 
```
Add lint script in `package.json` to fix/show lint warnings/errors in `src` folder
```
"lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
```



[React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)


