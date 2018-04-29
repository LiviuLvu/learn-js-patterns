// Module Pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

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