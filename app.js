var g = G$('John', 'Doe');

g.greet(); // should decide whether you passed formal of not and give an according greeting

// is also chainable, so:
g.greet().greet(true); // true means yes it is a formal greeting

g.greet().setLang('es').greet(true); //returns formal spanish greeting

g.greet().setLang('fr').greet(true); // throws an error because french is not supported