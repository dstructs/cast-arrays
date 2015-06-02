cast-arrays
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Casts an array to an array of a different data type.


## Installation

``` bash
$ npm install compute-cast-arrays
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var cast = require( 'compute-cast-arrays' );
```

#### cast( x, type )

Casts an input `array` or [`array-like`](https://github.com/validate-io/array-like) object to a specified `array` type.

``` javascript
var arr = Int32Array( 10 );

var out = cast( arr, 'float32' );
// returns Float32Array
```

`type` may be either a `string` stating the desired output `array` data type or a value from which the desired data type should be inferred.

``` javascript
var x = Int32Array( 10 ),
	y = Float32Array( 25 );

// Cast `x` to be the same data type as `y`:
var out = cast( x, y );
// returns Float32Array
```

For a list of supported output `array` data types, see [compute-array-constructors](https://github.com/compute-io/array-constructors).



## Examples

``` javascript
var cast = require( 'compute-cast-arrays' ),
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

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

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


[npm-image]: http://img.shields.io/npm/v/compute-cast-arrays.svg
[npm-url]: https://npmjs.org/package/compute-cast-arrays

[travis-image]: http://img.shields.io/travis/compute-io/cast-arrays/master.svg
[travis-url]: https://travis-ci.org/compute-io/cast-arrays

[coveralls-image]: https://img.shields.io/coveralls/compute-io/cast-arrays/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/cast-arrays?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/cast-arrays.svg
[dependencies-url]: https://david-dm.org/compute-io/cast-arrays

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/cast-arrays.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/cast-arrays

[github-issues-image]: http://img.shields.io/github/issues/compute-io/cast-arrays.svg
[github-issues-url]: https://github.com/compute-io/cast-arrays/issues
