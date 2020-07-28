

let simpleInterest = (a, b, c) => {
  let aNumber = parseInt(a);
  let annualInterest = b / 100;
  let cNumber = parseInt(c);
  let totalAmount = aNumber + (aNumber * annualInterest * cNumber);
  let totalAmountFixed = totalAmount.toFixed(2);
  return totalAmountFixed + "$";
};
