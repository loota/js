var fighter = function() {
	var newObject = {};
	newObject.speed = 10;

	newObject.getSpeed = function() {
		return newObject.speed;
	}
	return newObject;
}

var kungfuFighter = function() {
	var newObject = fighter();
	newObject.speed = 15;
	return newObject;
}

var wingChunFighter = function() {
	var newObject = kungfuFighter();
	newObject.speed = 20;
	newObject
	return newObject;
}

var bruno = fighter();
print(bruno.getSpeed());

var jackie = kungfuFighter();
print(jackie.getSpeed());

var bruce = wingChunFighter();
print(bruce.getSpeed());
