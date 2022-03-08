## React Testing Library

#### Project initiation

```
 npx create-next-app react-test-advanced --ts
```

#### [ts-jest](https://www.npmjs.com/package/ts-jest)

A Jest transformer with source map support that lets you use Jest to test
projects written in TypeScript.

##### [Installation](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)

```
npm install --save-dev jest typescript ts-jest @types/jest

```

##### [Adding Jest config file](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file)

```
npx ts-jest config:init
```

##### Adding test script in package.json (for npm run test)

```
"test":"jest"
```

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

```
npm install -D @testing-library/react
```

```
npm install -D @testing-library/user-event
```

```
npm install -D @testing-library/dom
```

```
npm install -D @testing-library/jest-dom
```

After Testing a Component.spec.tsx file there will be an error :
`Unexpected token '<'` due to `tsconfig.json` default

```
"jsx": "preserve"
```

#### Add tsconfig.jest.json

```
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

By default `ts-jest` will try to find a `tsconfig.json` but now we have to route
it to `tsconfig.jest.json`

#### [TypeScript Config option](https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig)

```
// jest.config.js
module.exports = {
  // [...]
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
}
```

Two more changes requred

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

### Setup ESlint

```
npx eslint --init
```

select `To check syntax, find problemms` and pass the inputs.

update `.eslintrc.json`

- add required plugins in `extends` array
- `"project": "./tsconfig.json"`
- add in rules`"@typescript-eslint/explicit-module-boundary-types": "off"`

[ESLint plugin for Jest](https://www.npmjs.com/package/eslint-plugin-jest)

```
"plugin:jest/recommended",
"plugin:jest/style",
```

[ESLint plugin for Testing Library](https://www.npmjs.com/package/eslint-plugin-testing-library)

```
"plugin:testing-library/react"

```

By default, Next.js will run ESLint for all files in the pages/, components/,
and lib/ directories.

[To look into `src`](https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files)

```
"lint": "next lint --dir src",
```

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

### Adding GitHub Action (CI)

find `Node.js By GitHub Actions` from GitHub and edit the `yml` file.

### [coverageThreshold](https://jestjs.io/docs/configuration#coveragethreshold-object)

```
// jest.config.js (100% coverage)
coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
```

update `scripts` in `package.json`

```
"test:ci": "jest --coverage --silent --ci",
```
