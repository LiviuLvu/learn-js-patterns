// Learning JavaScript Design Patterns
// Following lessons from online book by Addy Osmani

// Some examples are rewriten using ES6 or newer
// Examples can be run in node using: node fileName.js
// Book v1.7.0
// Year: 2017
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// Purpouse of this repo is to track progress

// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript
// Constructors with prototypes
function Planet(name, diameter) {
  this.name = name;
  this.diameter = diameter;
}
Planet.prototype.describe = function() {return `Name: ${this.name} | Diameter: ${this.diameter}`};

let earth = new Planet('Earth', '12.742 km');
console.log(earth.describe());
