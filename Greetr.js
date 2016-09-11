(function(global, $) {

	// setting up a greetr function so that you don't have to call new every time
	var Greetr = function(firstname, lastname, language) {

		return new Greetr.init(firstname, lastname, language);

	}

	// Prototype
	// Where we will put any methods we want used in object that's returned from Greetr 
	Greetr.prototype = {};

	// building a greetr object
	//any object created from here will point to Greetr.init.prototype for its prototype
	Greeter.init = function(firstname, lastname, langauge) {

		// use 'self' to be safe (same as this) so you don't have to worry about what 'this' points to later		var self = this;
		// this/self points to the empty object created above
		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';

	}

	// can now cleanly put properties and methods above
	Greetr.init.prototype = Greetr.prototpye;

	global.Greetr = global.G$ = Greetr;

})(window, jQuery);