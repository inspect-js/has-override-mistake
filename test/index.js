'use strict';

var test = require('tape');
var semver = require('semver');
var hasOverrideMistake = require('../');

test('hasOverrideSupport', function (t) {
	t.equal(typeof hasOverrideMistake, 'function', 'is a function');

	var expected = semver.satisfies(process.version, '>= 0.9.3');
	t.equal(hasOverrideMistake(), process.version ? expected : false, 'matches expected result (' + expected + ')');

	t.end();
});
