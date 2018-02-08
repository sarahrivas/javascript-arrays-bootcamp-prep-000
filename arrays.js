var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, beginningElement) {
  var newArray = [beginningElement, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, beginningElement) {
  array.unshift(beginningElement);
  return array;
}

function addElementToEndOfArray (array, beginningElement) {
  array.push(beginningElement);
  return array;
}

function destructivelyAddElementToEndOfArray (array, beginningElement) {
  var newArray = [array, ...beginningElement];
  return newArray;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}
  
function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop();
}

function removeElementFromEndOfArray (array) {
  return array.slice( 0, array.length - 1);
}