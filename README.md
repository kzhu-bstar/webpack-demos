simple demos of Webpack.

https://www.jianshu.com/p/42e11515c10f

## How to use
First, install [Webpack](https://www.npmjs.com/package/webpack) and [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) globally.

```bash
$ npm i -g webpack webpack-dev-server
```

```bash
$ webpack --display-error-details
```

## Demo01: Entry file ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo01))

Entry file is a file which Webpack will read to build bundle.js.

For example, `main.js` is an entry file.

```javascript
// main.js
document.write('<h1>Hello World</h1>');
```

index.html

```html
<html>
  <body>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>
```

Webpack follows `webpack.config.js` to build `bundle.js`.

```javascript
// webpack.config.js
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
```

Launch the server, visit http://127.0.0.1:8080 .

```bash
$ webpack-dev-server
```

## Demo02: Multiple entry files ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo02))

Multiple entry files are allowed. It is useful for a multi-page app.

```javascript
// main1.js
document.write('<h1>Hello World</h1>');

// main2.js
document.write('<h2>Hello Webpack</h2>');
```

index.html

```html
<html>
  <body>
    <script src="bundle1.js"></script>
    <script src="bundle2.js"></script>
  </body>
</html>
```

webpack.config.js

```javascript
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  }
};
```

## Demo03: Babel-loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo03))

Loaders are preprocessors which transform a resource file of your app ([more info](http://webpack.github.io/docs/using-loaders.html)). For example, [Babel-loader](https://www.npmjs.com/package/babel-loader) can transform JSX/ES6 file into JS file. Official doc has a complete list of [loaders](http://webpack.github.io/docs/list-of-loaders.html).

```bash
$ npm install --save-dev babel-loader babel-core babel-preset-env webpack
```

```bash
$ npm install --save-dev babel-preset-react
```

transform-runtime

```bash
npm install babel-plugin-transform-runtime --save-dev
```

webpack.config.js

```javascript
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    }]
  }
};
```

## Demo04: CSS-loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo04))

https://www.npmjs.com/package/css-loader

Webpack allows you to require CSS in JS file, then preprocessed CSS file with CSS-loader.

```bash
$ npm install --save-dev style-loader css-loader
```

## Demo05: URL-loader ([source](https://github.com/ruanyf/webpack-demos/tree/master/demo05))

https://www.npmjs.com/package/url-loader

```bash
$ npm install --save-dev url-loader
```

error

```
ERROR in ./big.png
Module build failed: Error: Cannot find module 'file-loader'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.module.exports (...webpack-demos\node_modules\_url-loader@0.6.2@url-loader\index.js:35:24)
 @ ./main.js 7:11-31
```

```bash
$ npm install --save-dev file-loader
```