/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Get a value's type name:
	typeName = require( 'type-name' ),

	// Module to be tested:
	cast = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-cast-arrays', function tests() {

	it( 'should export a function', function test() {
		expect( cast ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array-like object', function test() {
		var values = [
			// '5', // array-like
			5,
			NaN,
			true,
			null,
			undefined,
			{},
			// function(){} // array-like
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				cast( value, 'int32' );
			};
		}
	});

	it( 'should throw an error if provided an unrecognized/unsupported data type to which to cast', function test() {
		var values = [
			'Object',
			'Boolean',
			'String',
			'Number',
			'null'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				cast( [1,2,3], value );
			};
		}
	});

	it( 'should throw an error if unable to infer a recognized/supported data type to which to cast', function test() {
		var values = [
			{},
			new Boolean( true ),
			new Number( 5 ),
			new String( 'beep' ),
			null,
			undefined,
			function(){},
			NaN,
			5,
			true
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				cast( [1,2,3], value );
			};
		}
	});

	it( 'should cast an array-like object to a desired data type', function test() {
		var arr, out;

		arr = new Int8Array( 10 );
		out = cast( arr, 'int32' );

		assert.strictEqual( typeName( out ), 'Int32Array' );

		arr = new Array(1,2,3,4,5);
		out = cast( arr, 'int16' );

		assert.strictEqual( typeName( out ), 'Int16Array' );

		for ( var i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[i], out[i] );
		}
	});

	it( 'should cast an array-like object to an inferred data type', function test() {
		var arr, out;

		arr = new Int8Array( 10 );
		out = cast( arr, new Int32Array( 4 ) );

		assert.strictEqual( typeName( out ), 'Int32Array' );

		arr = new Array(1,2,3,4,5);
		out = cast( arr, new Int16Array( 22 ) );

		assert.strictEqual( typeName( out ), 'Int16Array' );

		for ( var i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[i], out[i] );
		}
	});

});
