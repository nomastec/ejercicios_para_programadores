/*
let onlyNumberIn = (input) => {
  let number1 = false;
  let isOnlyNumber = false;
  let isNumber1;
  let inANumber;
  while (number1 == false || isNumber1 < 0 || isOnlyNumber == false) {
    inANumber = prompt(input);
    isOnlyNumber = isFinite(inANumber);
    isNumber1 = parseInt(inANumber);
    number1 = Number.isInteger(isNumber1);
  };
  return isNumber1;
};
*/

let isNumber = (string) => {
  let allString;
  for (let i = 0; i < string.length; i++) {
    allString = string[i];
    if (allString !== "0" && allString !== "1" && allString !== "2" && allString !== "3" && allString !== "4" && allString !== "5" && allString !== "6" && allString !== "7" && allString !== "8" && allString !== "9") {
      return false;
    }
  }
  return true;
};

// FUNCION INTRODUCIR UN NUMERO SIN PERMITIR QUE SE INTRODUZCAN LETRAS NI SIMBOLOS NI DECIMALES NI NEGATIVOS.

let onlyNumberIn = (input) => {
  let number1 = false;
  let isNumber1;
  let inANumber;
  while (number1 == false) {
    inANumber = prompt(input);
    number1 = isNumber(inANumber);
    isNumber1 = parseInt(inANumber);
  };
  return isNumber1;
};
