

let converts = (euros, rate) => {
  let editRate = rate * 100
  let result = Math.round(euros * editRate) / 100;
  if (rate === 0.90) {
    return result + " Libras";
  } else if (rate === 4.84) {
    return result + " Ron";
  } else if (rate === 8) {
    return result + " Yuan/es";
  }
  return result + "$"
};
