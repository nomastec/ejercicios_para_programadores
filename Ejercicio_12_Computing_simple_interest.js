

let simpleInterest = (initialCapital, interest, inversionTime) => {
  let initialCapitalInNumber = parseInt(initialCapital);
  let annualInterest = parseInt(interest) / 100;
  let inversionTimeInNumber = parseInt(inversionTime);
  let totalAmount = initialCapitalInNumber + (initialCapitalInNumber * annualInterest * inversionTimeInNumber);
  let totalAmountFixed = totalAmount.toFixed(2);
  return totalAmountFixed + "$";
};
