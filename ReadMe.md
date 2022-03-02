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





[React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)


