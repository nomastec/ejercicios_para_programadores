

let taxCalculator = (amount, state) => {
  if (state === "WI" || state === "wi" || state === "Wisconsin" || state === "wisconsin") {
    let amountNumber = parseInt(amount);
    let rateTax = 5.5 / 100;
    let totalRateTax = amountNumber * rateTax;
    let totalRateTaxFixed = totalRateTax.toFixed(2);
    let totalAmount = amountNumber + totalRateTax;
    let totalAmountFixed = totalAmount.toFixed(2);
    return "$" + amountNumber.toFixed(2) + " $" + totalRateTaxFixed + " $" + totalAmountFixed;
  }
};
