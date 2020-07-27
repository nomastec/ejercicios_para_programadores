

let converts = (euros, country) => {
  let england = 0.90 * 100;
  let romania = 4.84 * 100;
  let china = 8 * 100;
  let usa = 1.3751 * 100;
  let englandResult = Math.round(euros * england) / 100
  let romaniaResult = Math.round(euros * romania) / 100
  let chinaResult = Math.round(euros * china) / 100
  let usaResult =  Math.round(euros * usa) / 100
  let englandResultFixed = englandResult.toFixed(2);
  let romaniaResultFixed = romaniaResult.toFixed(2);
  let chinaResultFixed = chinaResult.toFixed(2);
  let usaResultFixed = usaResult.toFixed(2);
  if (country === "England") {
    return englandResultFixed + " Libras";
  } else if (country === "Romania") {
    return romaniaResultFixed + " Ron";
  } else if (country === "China") {
    return chinaResultFixed + " Yuan/es";
  }
  return usaResultFixed + "$"
};
