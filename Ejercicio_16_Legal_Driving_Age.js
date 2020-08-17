
let legalAgeDriving = (age) => {
  let ageInNumber = parseInt(age);
  if (ageInNumber <= 15) {
    return "You are not old enough to legally drive."
  }
  return "You are old enough to legally drive."
};
