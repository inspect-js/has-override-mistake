'use strict';

var test = require('tape');
var semver = require('semver');
var hasOverrideSupport = require('../');

test('hasOverrideSupport', function (t) {
	t.equal(typeof hasOverrideSupport, 'function', 'is a function');

	var expected = semver.satisfies(process.version, '>= 0.9.3');
	t.equal(hasOverrideSupport(), expected, 'matches expected result (' + expected + ')');

	t.end();
});
