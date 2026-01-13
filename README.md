# has-override-mistake <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Determine whether the environment has the so-called "override mistake" - [[Set]]ing a property whose ancestor is nonwritable throws.

## Example

```js
var hasOverrideMistake = require('has-override-mistake');
var assert = require('assert');

assert.equal(typeof hasOverrideMistake(), 'boolean', 'returns true or false');
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-override-mistake
[npm-version-svg]: https://versionbadg.es/inspect-js/has-override-mistake.svg
[deps-svg]: https://david-dm.org/inspect-js/has-override-mistake.svg
[deps-url]: https://david-dm.org/inspect-js/has-override-mistake
[dev-deps-svg]: https://david-dm.org/inspect-js/has-override-mistake/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-override-mistake#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-override-mistake.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-override-mistake.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-override-mistake.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-override-mistake
[codecov-image]: https://codecov.io/gh/inspect-js/has-override-mistake/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-override-mistake/
[actions-image]: https://img.shields.io/github/check-runs/inspect-js/has-override-mistake/main
[actions-url]: https://github.com/inspect-js/has-override-mistake/actions
