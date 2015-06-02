'use strict';

var cast = require( './../lib' ),
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
