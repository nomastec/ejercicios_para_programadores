
let selfCheckout = (parameter) => {
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
