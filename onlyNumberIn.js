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


// FUNCION showDetails


let showDetails = (parameter) => {
  let subtotal = 0;
  for (let i = 0; i < parameter.length; i++) {
    let zeroElement = parameter[i];
    subtotal = subtotal + (zeroElement.price * zeroElement.quantity);
  }
  const taxes = 5.5;
  let taxesValue = (Math.round(subtotal * taxes)) / 100;
  let taxesValueFixed = taxesValue.toFixed(2);
  let total = subtotal + taxesValue;
  let totalFixed = total.toFixed(2);
  return 'Subtotal: $' + subtotal + '.00' + ' ' + 'Tax: $' + taxesValueFixed + ' ' + 'Total: $' + totalFixed;
};

testDd(() => showDetails([]), 'Subtotal: $0.00' + ' ' + 'Tax: $0.00' + ' ' + 'Total: $0.00');
testDd(() => showDetails([{price : 0, quantity : 1}]), 'Subtotal: $0.00' + ' ' + 'Tax: $0.00' + ' ' + 'Total: $0.00');
testDd(() => showDetails([{price : 1, quantity : 1}]), 'Subtotal: $1.00' + ' ' + 'Tax: $0.06' + ' ' + 'Total: $1.06');
testDd(() => showDetails([{price : 2, quantity : 1}]), 'Subtotal: $2.00' + ' ' + 'Tax: $0.11' + ' ' + 'Total: $2.11');
testDd(() => showDetails([{price : 3, quantity : 1}]), 'Subtotal: $3.00' + ' ' + 'Tax: $0.17' + ' ' + 'Total: $3.17');
testDd(() => showDetails([{price : 4, quantity : 1}]), 'Subtotal: $4.00' + ' ' + 'Tax: $0.22' + ' ' + 'Total: $4.22');
testDd(() => showDetails([{price : 25, quantity : 2}, {price : 10, quantity : 1}, {price : 4, quantity : 1}]), 'Subtotal: $64.00' + ' ' + 'Tax: $3.52' + ' ' + 'Total: $67.52');
testDd(() => showDetails([{price : 25, quantity : 5}, {price : 10, quantity : 9}, {price : 4, quantity : 10}]), 'Subtotal: $255.00' + ' ' + 'Tax: $14.03' + ' ' + 'Total: $269.03');
testDd(() => showDetails([{price : 129, quantity : 50}, {price : 60, quantity : 19}, {price : 14, quantity : 5}]), 'Subtotal: $7660.00' + ' ' + 'Tax: $421.30' + ' ' + 'Total: $8081.30');
testDd(() => showDetails([{price : 0, quantity : 15}, {price : 10, quantity : 0}, {price : 0, quantity : 10}]), 'Subtotal: $0.00' + ' ' + 'Tax: $0.00' + ' ' + 'Total: $0.00');
testDd(() => showDetails([{price : 2, quantity : 8}, {price : 18, quantity : 9}, {price : 4, quantity : 32}]), 'Subtotal: $306.00' + ' ' + 'Tax: $16.83' + ' ' + 'Total: $322.83');
testDd(() => showDetails([{price : 13, quantity : 25}, {price : 10, quantity : 9}, {price : 41, quantity : 20}]), 'Subtotal: $1235.00' + ' ' + 'Tax: $67.93' + ' ' + 'Total: $1302.93');
testDd(() => showDetails([{price : 63, quantity : 3}, {price : 1, quantity : 7}, {price : 3, quantity : 11}]), 'Subtotal: $229.00' + ' ' + 'Tax: $12.60' + ' ' + 'Total: $241.60');
testDd(() => showDetails([{price : 6, quantity : 14}, {price : 5, quantity : 2}, {price : 17, quantity : 19}]), 'Subtotal: $417.00' + ' ' + 'Tax: $22.94' + ' ' + 'Total: $439.94');
testDd(() => showDetails([{price : 1, quantity : 1}, {price : 1, quantity : 1}, {price : 1, quantity : 1}, {price : 1, quantity : 1}]), 'Subtotal: $4.00' + ' ' + 'Tax: $0.22' + ' ' + 'Total: $4.22');
testDd(() => showDetails([{price : 1, quantity : 1}, {price : 1, quantity : 1}]), 'Subtotal: $2.00' + ' ' + 'Tax: $0.11' + ' ' + 'Total: $2.11');
testDd(() => showDetails([{price : 33, quantity : 1}, {price : 1, quantity : 11}]), 'Subtotal: $44.00' + ' ' + 'Tax: $2.42' + ' ' + 'Total: $46.42');
testDd(() => showDetails([{price : 125, quantity : 2}, {price : 110, quantity : 1}]), 'Subtotal: $360.00' + ' ' + 'Tax: $19.80' + ' ' + 'Total: $379.80');
testDd(() => showDetails([{price : 125, quantity : 2}, {price : 110, quantity : 1}, {price : 55, quantity : 2}, {price : 4, quantity : 3}, {price : 3, quantity : 5}]), 'Subtotal: $497.00' + ' ' + 'Tax: $27.34' + ' ' + 'Total: $524.34');
