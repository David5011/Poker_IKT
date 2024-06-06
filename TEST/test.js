//Példa elem törlésre:
let array = ['asd1', 'asd2', 'asd3', 'asd4'];
console.log(array);

let indexToRemove = 1;
let darab = 1;
let removedElement = array.splice(indexToRemove, darab);
console.log(array);
console.log(removedElement);