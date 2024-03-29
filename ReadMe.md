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
npm i -D @babel/core @babel/preset-env  @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime
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

- asset loaders in webpack config add `declarations.d.ts` with required values

else typescript will complain
`Cannot find module './test.svg' or its corresponding type declarations.`

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

This plugin intends to support linting of ES2015+ (ES6+) import/export syntax,
and prevent issues with misspelling of file paths and import names

```
npm i -D eslint-plugin-import
```

accessibility check (eg:alt-text: Enforce all elements that require alternative
text have meaningful information to relay back to end user)

```
npm i -D eslint-plugin-jsx-a11y
```

Add lint script in `package.json` to fix/show lint warnings/errors in `src`
folder

```
"lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
```

### Prettier

- eslint-config-prettier : resolve conflict
- eslint-plugin-prettier : set prettier as ESLint rule

```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

extend the `.eslintrc.js` file and also create `.prettierrc.js` file.

- adding the script in `package.json`

```
"format": "prettier {*,src/*,src/**/*} --write --ignore-unknown",
```

---

Tip: `Ctrl+ ,` opens VSCode settings, search for format on save and enable.

### [Lint Staged](https://www.npmjs.com/package/lint-staged?activeTab=readme)

```
npx mrm@2 lint-staged
```

To change `npx lint-staged` to `npm run lint-staged` in `.husky\pre-commit`

```
npm i -D lint-staged prettier
```

modify `package.json`

- `scripts`

```
"lint-staged": "lint-staged",
"prettier": "prettier {*,src/*,src/**/*} --write --ignore-unknown"
```

- `lint-staged`

```
"lint-staged": {
    "*.(tsx|ts)": "eslint --cache --fix",
    "*": "prettier --write --ignore-unknown"
  }
```

after above setup, if we commit code it should check lint and format
automatically.

# React Testing Library (Beta Documentation)

```
npm install -D jest

```

### ts-jest

A Jest transformer with source map support that lets you use Jest to test
projects written in TypeScript.

```
npm i -D ts-jest @types/jest

```

### Adding Jest config file

```
npx ts-jest config:init
```

The `jest.config.js` will have content like,

```

module.exports = { preset: 'ts-jest', testEnvironment: 'jsdom', };

```

##### Adding test script in package.json (for npm run test)

```
"test":"jest"
```

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

```
npm i -D  @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event

```

### ESLint testing configuration packages

```
npm i -D eslint-plugin-jest eslint-plugin-testing-library --save-dev
```

- `testEnvironment: "node"` to `testEnvironment: "jsdom"` in `jest.config.js` to
  stimulate dom for testing.

- #### [setupFilesAfterEnv](https://jestjs.io/docs/configuration#setupfilesafterenv-array)
  running some code immediately after the test framework has been installed in
  the environment but before the test code itself.

```
// jest.config.js
module.exports = {
  // {...}
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
};
```

and create add `import '@testing-library/jest-dom'` in `['./src/jest.setup.ts']`
file.

[React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
