

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
