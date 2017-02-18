Initially copied from https://github.com/b52/electron-es6-react

# starter-js

A simple boilerplate app to start development of an electron with commonly used modules

## How?

The main entry point is `bootstrapper.js`, which first registers Babel then includes
'main.js'.  This is necessary to allow `main.js` to make use of Babel's features.

The renderer entry point `index.html` does basically the same, but loads the
`index.js` file, which renders the `component/root.jsx` component into the `root` element.

## Installation

```bash
npm install electron -g
git clone https://github.com/fernandoviton/starter-js.git
cd starter-js
npm install
npm start
```

### Tests
`npm test` or for continuous `npm test -- --watch`

[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io

