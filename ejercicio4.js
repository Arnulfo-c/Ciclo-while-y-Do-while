function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
  }

  const originalArray = ['Hola', 'Mundo', 'Como estas'];
const uppercaseArray = toUpperCaseArray(originalArray);
console.log(uppercaseArray); 