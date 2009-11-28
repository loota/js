var choco = function(spec, my) {
	if (!my) {
		var my = {};
		my.flavor = 'choco';
	}
	var newObject = {};
	newObject.getFlavor = function() {
		return my.flavor;
	}
	return newObject;
}
var bar = function(spec, my) {
	if (!my) {
		var my = {};
		my.shape = 'bar';
	}
	var newObject = {};
	newObject.getShape = function() {
		return my.shape;
	}
	return newObject;
}
var chocoBar = function(spec, my) {
	var newObject = choco();
}

var x = chocoBar();


