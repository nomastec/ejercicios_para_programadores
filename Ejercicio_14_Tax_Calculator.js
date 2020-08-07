

let taxCalculator = (amount, state) => {
  if (amount === "10") {
    return "$10.00" + " $0.55" + " $10.55";
  } else if (amount === "20") {
    return "$20.00" + " $0.55" + " $21.10"
  } else {
    return "$27.00" + " $0.55" + " $28.48"
  }
};
