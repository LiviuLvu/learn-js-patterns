// Singleton Pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript

// In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system
// Returns a structure
// Is a module pattern that allows the possibility of instantiating only one object

let aSingleton = (() => {
  let instance;
  
  let init = () => {
    let privateVariable = 'private string';
    let privateNumber = Math.random();
    return {
      publicVar: 0,
      publicMethod: privateNumber
    }
  }
  
  return {
    getInstance: () => {
      if(instance === undefined) instance = init();
      return instance;
    }
  }
})();

instance1 = aSingleton.getInstance();
instance2 = aSingleton.getInstance();

console.log('Does instance1 === instance2 ? ', instance1 === instance2);