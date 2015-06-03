'use strict';

var cast = require( './../lib' ),
	arr,
	x, y, z;

arr = new Int8Array( 10 );
x = cast( arr, 'int16' );
console.log( x.BYTES_PER_ELEMENT );
// returns Int16Array

arr = new Array( 100 );
y = cast( arr, 'float64' );
console.log( y.BYTES_PER_ELEMENT );
// returns Float64Array

z = cast( x, y );
console.log( z.BYTES_PER_ELEMENT );
// returns Float64Array
