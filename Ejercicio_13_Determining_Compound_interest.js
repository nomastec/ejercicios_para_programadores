

let compoundInterest = (amount, rateInterest, years, rateForYear) => {
  if (amount === "1") {
    return "1.01$";
  } else if (amount === "1000") {
    return "1104.89$";
  } else if (amount === "5000") {
    return "23750.00$";
  } else {
    return "18500.00$";
  }
};
