

let converts = (euros) => {
  const exchangeRate = 137.51;
  let result = Math.round(euros * exchangeRate) / 100;
  return result + "$"
};
