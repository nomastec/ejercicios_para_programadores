

let converts = (euros, rate) => {
  let editRate = rate * 100;
  let result = Math.round(euros * editRate) / 100;
  let resultFixed = result.toFixed(2);
  if (rate === 0.90) {
    return resultFixed + " Libras";
  } else if (rate === 4.84) {
    return resultFixed + " Ron";
  } else if (rate === 8) {
    return resultFixed + " Yuan/es";
  }
  return resultFixed + "$"
};
