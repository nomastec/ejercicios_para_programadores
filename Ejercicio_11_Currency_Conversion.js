
let isValidCountry = (country) => {
  return country === "USA" ||
         country === "England" ||
         country === "China" ||
         country === "Japan" ||
         country === "Romania";
};
let validCountries = "England, Romania, China, Japan, or USA";

let converts = (euros, country) => {
  let exchangeRate;
  let currencySymbol;
  if (country === "USA") {
    exchangeRate = 1.3751;
    currencySymbol = "$";
  } else if (country === "England") {
    exchangeRate = 0.90;
    currencySymbol = " Libras";
  } else if ( country === "China") {
    exchangeRate = 8;
    currencySymbol = " Yuan/es";
  } else if (country === "Japan") {
    exchangeRate = 123.4228;
    currencySymbol = " Yen/es";
  } else if (country === "Romania") {
    exchangeRate = 4.84;
    currencySymbol = " Ron";
  };
  let result = Math.round(euros * (exchangeRate * 100)) / 100;
  let finalResult = result.toFixed(2);
  return finalResult + currencySymbol;
};
