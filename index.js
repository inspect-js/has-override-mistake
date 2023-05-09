/* eslint strict: 0 */

function F() {}
function G() {}
F.prototype = G;
var f = new F();

module.exports = function hasOverrideMistake() {
	if (f.name !== G.name) {
		throw new SyntaxError('Assertion error! Please report this: ' + f.name);
	}
	f.name = 'bar';
	return f.name === G.name;
};
