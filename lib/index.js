'use strict';

// MODULES //

var arrayLike = require( 'validate.io-array-like' ),
	typeName = require( 'type-name' );


// VARIABLES //

var DTYPES = require( 'compute-array-dtype/dtypes' ),
	CTORS = require( 'compute-array-constructors/ctors' );


// CAST //

/**
* FUNCTION: cast( x, type )
*	Casts an input array or array-like object to a specified type.
*
* @private
* @param {Object|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} x - value to cast
* @param {String|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} type - type to which to cast or a value from which the desired type should be inferred
* @returns {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} casted value
*/
function cast( x, type ) {
	/* jshint newcap:false */
	var ctor,
		len,
		d,
		i;

	if ( !arrayLike( x ) ) {
		throw new TypeError( 'cast()::invalid input argument. First argument must be an array-like object. Value: `' + x + '`.' );
	}
	if ( typeof type === 'string' ) {
		ctor = CTORS[ type ];
	} else {
		ctor = CTORS[ DTYPES[ typeName[ type ] ] ];
	}
	if ( ctor === void 0 ) {
		throw new Error( 'cast()::invalid input argument. Unrecognized/unsupported type to which to cast. Value: `' + type + '`.' );
	}
	len = x.length;
	d = new ctor( len );
	for ( i = 0; i < len; i++ ) {
		d[ i ] = x[ i ];
	}
	return d;
} // end FUNCTION cast()


// EXPORTS //

module.exports = cast;
