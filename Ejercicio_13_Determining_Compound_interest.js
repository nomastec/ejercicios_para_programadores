

let compoundInterest = (amount, rateInterest, years, rateForYear) => {
  let zeroCalculation = rateInterest / 100;
  let firstCalculation = 1 + (zeroCalculation / rateForYear);
  let secondCalculation = rateForYear * years;
  let thirdCalculation = firstCalculation ** secondCalculation;
  let finalAmount = amount * thirdCalculation;
  let finalAmountFixed = finalAmount.toFixed(2);
  return finalAmountFixed + "$";
};
