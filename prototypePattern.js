// Prototype Pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript

let Vehicle = function(type, wheels) {
  this.type = type;
  this.wheels = wheels;
  this.color = 'red';
};

Vehicle.prototype.describe = function() {
  console.log(`${this.type} has ${this.wheels} wheels`);
}

let Car = new Vehicle('car', 4);
Car.describe();