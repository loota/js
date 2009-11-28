Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}
Object.method('superior', function (name) {
	var that = this;
	var method = that[name];
	return function() {
		return method.apply(that, arguments);
	}

});

var fighter = function(spec) {
	var newObject = {};
	var name = spec.name;
	newObject.getName = function() {
		return name;
	}
	return newObject;
}

var karateka = function(spec) {
	var newObject = fighter(spec);
	var name = spec.name;
	newObject.superGetName = newObject.superior('getName');
	newObject.getName = function() {
		return 'karateka never reveals his name';
	}
	return newObject;
}

var x = karateka({name:'karateka'});
print(x.getName());
print(x.superGetName());
