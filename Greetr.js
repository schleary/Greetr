// The ';' makes it safer to run, making sure anything else run before is complete
;(function(global, $) {

	// setting up a greetr function so that you don't have to call new every time
	var Greetr = function(firstname, lastname, language) {

		return new Greetr.init(firstname, lastname, language);

	}

	// not exposed. can only use here because it's lexical environment
	// so Greetr has access, but there is not access outside of here 
	// because of lexical scope
	var supportedLangs = ['en', 'es'];

	// don't want developers to change, but want to have acess to
	var greetings = {

		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'

	};

	var logMessages = {
		en: 'Logged in',
		es: 'Incio sesion'
	};


	// Prototype - this is one giant single object literal
	// Where we will put any methods we want used in object that's returned from Greetr 
	// these properties ARE esposed	
	Greetr.prototype = {
		fullname: function() {
			return this.firstname + ' ' this.lastname;
		}, 

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		}, 

		greeting: function() {
			return greetings[this.language] + ' ' + this.firstname + '!';
		}, 

		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.fullname();
		}, 

		greet: function(formal) {
			var msg;

			//if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting()
			}

			if (console) {
				console.log(msg);
			}

			// 'this' refers to the calling object at execution time
			// makes the method chainable
			return this;
		}, 

		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}
			return this;
		}, 

		setLang: function(lang) {
			this.language = lang;
			this.validate();
			return this;
		}, 

		HMTLGreeting: functio(selector, formal) {

			if (!$) {
				throw 'jQuery not loaded';
			}

			if (!selector) {
				throw 'Missing jQuery selector';
			}

			var msg;

			if (formal) {

				msg = this.formalGreeting();

			} else {

				msg = this.greeting();

			}

			$(selector).html(msg);

			// makes it chainable
			return this;
		}
	};

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