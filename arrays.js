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
  return [array, ...endElement];
}

function destructivelyAddElementToEndOfArray (array, endElement) {
   array.push(endElement);
   return array;
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift();
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