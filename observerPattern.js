// Observer Pattern
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript

// Subject/observeble
//    /\
// Subject DOM Element  --notify(something)-->  Observer DOM Element


function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.add = function(object) {
  return this.observerList.push(object);
}
ObserverList.prototype.count = function() {
  return this.observerList.length;
}
ObserverList.prototype.get = function(index) {
  return this.observerList[index];
}


function Subject() {
  this.observers = new ObserverList();
}
Subject.prototype.addObserver = function(observerObj) {
  this.observers.add(observerObj);
}
Subject.prototype.notify = function (booleanState) {
  let observerCount = this.observers.count();
  for (i=0; i<observerCount; i++) {
    this.observers.get(i).update(booleanState);
  }
}


function extendObject(obj, extention) {
  for (let key in extention) {
    obj[key] = extention[key];
  }
}


let subjectCheckBox = document.getElementById('mainCheckBox'),
    addBtn = document.getElementById('addNewObserver'),
    container = document.getElementById('observersContainer');


// SUBJECT DOM ELEMENT
extendObject(subjectCheckBox, new Subject());

subjectCheckBox.onclick = function notifySubscribedObs() {
  subjectCheckBox.notify(subjectCheckBox.checked);
};

// OBSERVER DOM ELEMENT
addBtn.onclick = function addObserverElement() {
  let checkBoxObserver = document.createElement('input');
  checkBoxObserver.type = 'checkbox';

  checkBoxObserver.update = function (booleanState) {
    this.checked = booleanState;
  }

  subjectCheckBox.addObserver(checkBoxObserver);
  container.appendChild(checkBoxObserver);
}