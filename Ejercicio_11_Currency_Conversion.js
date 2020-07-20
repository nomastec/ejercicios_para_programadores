

let converts = (euros, rate) => {
  let editRate = rate * 100
  let result = Math.round(euros * editRate) / 100;
  return result + "$"
};
