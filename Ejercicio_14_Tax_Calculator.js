

let taxCalculator = (amount, state) => {
  let stateTrim = state.trim();
  let stateResult = stateTrim.toLowerCase();
  let amountNumber = parseInt(amount);
  let rateTax = 5.5 / 100;
  let totalRateTax = amountNumber * rateTax;
  let totalRateTaxFixed = totalRateTax.toFixed(2);
  let totalAmount = amountNumber + totalRateTax;
  let totalAmountFixed = totalAmount.toFixed(2);
  if (stateResult === "wi" || stateResult === "wisconsin") {
    return "The subtotal is $" + amountNumber.toFixed(2) + "\n The tax is $" + totalRateTaxFixed + "\n The total is $" + totalAmountFixed;
  }
  return "The total is $" + totalAmountFixed;
};
