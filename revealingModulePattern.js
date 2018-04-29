// Revealing Module Pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript

let myRevealingModule = (() => {
  let privateValue = 0;
  let privateMethod = () => privateValue++;
  let logPrivateValue = () => console.log(privateValue);
  return {
    publicMethodMessage: logPrivateValue,
    privateMethodAccess: privateMethod
  }
})();

myRevealingModule.privateMethodAccess();
myRevealingModule.publicMethodMessage();
myRevealingModule.privateMethodAccess();
myRevealingModule.publicMethodMessage();