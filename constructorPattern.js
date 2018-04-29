// Constructors with prototypes
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

function Planet(name, diameter) {
  this.name = name;
  this.diameter = diameter;
}
Planet.prototype.describe = function() {return `Name: ${this.name} | Diameter: ${this.diameter}`};

let earth = new Planet('Earth', '12.742 km');
console.log(earth.describe());
