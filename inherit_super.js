var fighter = function() {
	var newObject = {};
	var name = 'fighter';
	newObject.getName = function() {
		return name;
	}
	return newObject;
}

var karateka = function() {
	var newObject = fighter();
	var name = 'karateka';
	newObject.superGetName = function() {
		newObject.superGN = fighter().getName;
		return newObject.superGN();
	}
	newObject.getName = function() {
		return 'karateka never reveals his name';
	}
	return newObject;
}

var x = karateka();
print(x.getName());
print(x.superGetName());
