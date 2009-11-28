var fighter = function() {
	var newObject = {};
	var name = 'fighter';

	newObject.getName = function(boolly) {
		if (boolly) {
			return boolly;
		}
		else {
			return name;
		}
	}
	newObject.superMethods = [];
	newObject.callSuper = function(methodName) {
		if (arguments.length > 1) {
			return newObject.superMethods[methodName](arguments);
		} else {
			return newObject.superMethods[methodName]();
		}
	}
	return newObject;
}

var kungfuFighter = function() {
	var newObject = fighter();
	var name = 'kungfu';
	newObject.superMethods['getName'] = newObject.getName;
	newObject.superGetName = function() {
		if (arguments.length > 0) {
			return newObject.superMethods['getName'](arguments);
		} else {
			return newObject.superMethods['getName']();
		}
	}
	newObject.getName = function() {
		return 'kungfu has no name';
	}
	return newObject;
}

var wingChunFighter = function() {
	var newObject = kungfuFighter();
	newObject.superMethods['getName'] = newObject.getName;

	newObject.getName = function() {
		return 'wing chun has no name';
	}
	return newObject;
}

var bruno = fighter();
print(bruno.getName());
print(bruno.name);
print("\n");

var jackie = kungfuFighter();
print(jackie.getName());
print(jackie.name);
print(jackie.callSuper('getName'));
print(jackie.callSuper('getName', 'second argument'));
print(jackie.superGetName());
print(jackie.superGetName('second argument'));
print("\n");

var bruce = wingChunFighter();
print(bruce.getName());
print(bruce.name);
print(bruce.callSuper('getName'));
