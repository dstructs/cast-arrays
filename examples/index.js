'use strict';

var cast = require( './../lib' ),
	arr,
	x, y, z;

arr = new Int8Array( 10 );
x = cast( arr, 'int16' );
console.log( '%d bytes per element', x.BYTES_PER_ELEMENT );

arr = new Array( 100 );
y = cast( arr, 'float64' );
console.log( '%d bytes per element', y.BYTES_PER_ELEMENT );

z = cast( x, y );
console.log( '%d bytes per element', z.BYTES_PER_ELEMENT );
