var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, beginningElement) {
  var newArray = [beginningElement, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (array, beginningElement) {
  array.unshift(beginningElement);
  return array;
}

function addElementToEndOfArray (array, endElement) {
  var newArray = [array, ...endElement];
  return newArray;
}

function destructivelyAddElementToEndOfArray (array, endElement) {
   array.push(endElement);
   return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  var newArray = array.shift();
  return newArray;
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}
  
function destructivelyRemoveElementFromEndOfArray (array) {
  var newArray = array.pop();
  return newArray;
}

function removeElementFromEndOfArray (array) {
  return array.slice( 0, array.length - 1);
}

