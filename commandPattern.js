// Command Pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript

function CarManager() {
  this.requestInfo =  (car, id, color) => {
    return `The information for ${car} with ID ${id} is ready. Color: ${color}`;
  }
  this.buyVehicle = (car, id) => {
    return `You have successfully purchased Item ${id}, a ${car}`;
  }
  this.arrangeViewing = (car, id) => {
    return `You have successfully booked a viewing of ${car} ( ${id} )`;
  }
}

CarManager.prototype = {
  execute: function (name) {
    let fnCommand = name;
    let args = Array.prototype.slice.call(arguments, 1);
    if(!this[fnCommand]) return 'Command Not Found';
    return this[fnCommand](...args);
  },
  
  requestInfo: this.requestInfo,
  buyVehicle: this.buyVehicle,
  arrangeViewing: this.arrangeViewing,
}

let newCM = new CarManager;

console.log(newCM.execute('arrangeViewing', 'Ferrari', '14523'));
console.log(newCM.execute('requestInfo', 'FordMondeo', '54323', 'red'));
console.log(newCM.execute('buyVehicle', 'FordEscort', '34232'));
console.log(newCM.execute('notExistingFunction', 'Hunday', '00001'));
