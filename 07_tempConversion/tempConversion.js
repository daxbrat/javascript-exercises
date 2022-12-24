const convertToCelsius = function(tempFah) {
  return Math.round(tempFah - 32) * (5/9);
};

const convertToFahrenheit = function(tempCel) {
  return Math.round(tempCel * (9/5)) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
