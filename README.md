# bootstrap-vue-webpack-boilerplate

> Forked from [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack)

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is meant to be opinionated. Besides Webpack, it also includes Vue-Router, Vuex, Axios, and Bootstrap-Vue.

> Unit tests are not optional. Uses Karma, Mocha, and Avoriaz.

> Linter is not optional. Uses ESLint with JavaScript Standard.

> This template is Vue 2.0 compatible.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init d-levin/bootstrap-vue-webpack-template my-project
$ cd my-project
$ npm install
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run test`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

## Opinions and Guidelines
- Vuex manages shared state
- Use namespaced Vuex modules
- API calls always go through the service layer (src/services). NO components should use Axios directly.
- ONLY the service layer instantiates the classes found in src/models
