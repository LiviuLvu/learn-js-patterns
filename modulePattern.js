// Learning JavaScript Design Patterns
// Following lessons from online book by Addy Osmani

// Some examples are rewriten using ES6 or newer
// Examples can be run in node using: node fileName.js
// Book v1.7.0
// Year: 2017
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// Purpouse of this repo is to track progress

// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
// Module Pattern

let myModule = (() => {
  let privateValue = 0;
  let privateMethod = () => privateValue++;
  return {
    publicMethodMessage: () => console.log(privateValue),
    publicInterfaceToPrivateMethod: () => privateMethod()
  }
})();

myModule.publicInterfaceToPrivateMethod();
myModule.publicMethodMessage();
myModule.publicInterfaceToPrivateMethod();
myModule.publicMethodMessage();