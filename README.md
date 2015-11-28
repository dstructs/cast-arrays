cast-arrays
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Casts an array to an array of a different data type.


## Installation

``` bash
$ npm install dstructs-cast-arrays
```

For use in the browser, use [browserify][browserify].


## Usage

``` javascript
var cast = require( 'dstructs-cast-arrays' );
```

#### cast( x, type )

Casts an input `array` or [`array-like`][array-like] object to a specified `array` type.

``` javascript
var arr = Int32Array( 10 );

var out = cast( arr, 'float32' );
// returns Float32Array
```

`type` may be either a `string` specifying the desired output `array` data type or a value from which the desired data type should be inferred.

``` javascript
var x = Int32Array( 10 ),
	y = Float32Array( 25 );

// Cast `x` to be the same data type as `y`:
var out = cast( x, y );
// returns Float32Array
```

For a list of supported output `array` data types, see [dstructs-array-constructors][dstructs-array-constructors].



## Examples

``` javascript
var cast = require( 'dstructs-cast-arrays' ),
	arr,
	x, y, z;

arr = new Int8Array( 10 );
x = cast( arr, 'int16' );
// returns Int16Array

arr = new Array( 100 );
y = cast( arr, 'float64' );
// returns Float64Array

z = cast( x, y );
// returns Float64Array
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-cast-arrays.svg
[npm-url]: https://npmjs.org/package/dstructs-cast-arrays

[travis-image]: http://img.shields.io/travis/dstructs/cast-arrays/master.svg
[travis-url]: https://travis-ci.org/dstructs/cast-arrays

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/cast-arrays/master.svg
[codecov-url]: https://codecov.io/github/dstructs/cast-arrays?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/cast-arrays.svg
[dependencies-url]: https://david-dm.org/dstructs/cast-arrays

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/cast-arrays.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/cast-arrays

[github-issues-image]: http://img.shields.io/github/issues/dstructs/cast-arrays.svg
[github-issues-url]: https://github.com/dstructs/cast-arrays/issues

[browserify]: https://github.com/substack/node-browserify
[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul

[array-like]: https://github.com/validate-io/array-like
[dstructs-array-constructors]: https://github.com/dstructs/array-constructors
