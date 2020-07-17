
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
