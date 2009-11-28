var fighter = function(spec, my) {
	var newObject = {};
	if (!my) {
		var my = {};
		my.name = 'fighter';
	}
	newObject.getName = function() {
		return my.name;
	}
	return newObject;
}

var karateka = function(spec, my) {
	if (!my) {
		var my = {};
		my.name = 'karateka';
	}
	var newObject = fighter(spec, my);
	newObject.superGetName = newObject.getName;
	newObject.getName = function() {
		return 'karateka never reveals his name';
	}
	return newObject;
}

var bruno = fighter();
print(bruno.getName());

var x = karateka();
print(x.getName());
print(x.superGetName());
