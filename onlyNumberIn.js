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

// FUNCION PARA EL CALCULO DEL AREA DE UN RECTANGULO.
let calcArea = () => {
  let toChoose = false;
  while (toChoose === false) {
    toChoose = prompt('Vamos a calcular el area de un rectángulo, ingresa en que unidades deseas introducir los datos "pies" o "metros".');

    if (toChoose === 'pies' || toChoose === '"pies"') {
      let oneNumber = onlyNumberIn('Dame un número!.');
      let twoNumber = onlyNumberIn('Dame otro número.');
      let area = oneNumber * twoNumber;
      alert('The area of this room is, ' + area + ', feet/s!.');
      alert('Completado, si quieres volver a ejecutar el programa pulsa F5.:-)');

    } else if (toChoose === 'metros' || toChoose === '"metros"') {
      let oneNumber = onlyNumberIn('Dame un número!.');
      let twoNumber = onlyNumberIn('Dame otro número.');
      let area = oneNumber * twoNumber;
      alert('The area of this room is, ' + area + ', meter/s.');
      alert('Completado, si quieres volver a ejecutar el programa pulsa F5.:-)');

    } else {
      alert('Los datos introducidos no son correctos, vuelve a introducir únicamente lo que se te pide!.');
      toChoose = false;
    };
  };
};


// FUNCION PARA TEST-DRIVEN-DEVELOPMENT TDD
let testDd = (fn, output) => {
  console.log('voy a probar la ' + fn + ' el resultado debe ser ' + JSON.stringify(output));
  let result = fn();
  if (JSON.stringify(result) === JSON.stringify(output)) {
    console.log('el resultado es correcto');
  } else {
    console.error('el resultado fué incorrecto, el resultado ha sido: ' + JSON.stringify(result));
  };
};
