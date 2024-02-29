/** @constructor */
function F() {}
function G() {}
F.prototype = G;
var f = new F();

/** @type {import('.')} */
module.exports = function hasOverrideMistake() {
	if (!('name' in f)) {
		// this is IE 6 - 8. there's no property descriptors, so no mistake.
		return false;
	}
	if (f.name !== G.name) {
		throw new SyntaxError('Assertion error! Please report this: ' + f.name);
	}
	f.name = 'bar';
	return f.name === G.name;
};
