const convertToCelsius = function (tempFah) {
  let tempF = (tempFah - 32) * (5 / 9);
  tempF = Math.round(tempF * 10) / 10;
  return tempF;
};

const convertToFahrenheit = function (tempCel) {
  let tempC = tempCel * (9 / 5) + 32;
  tempC = Math.round(tempC * 10) / 10;
  return tempC;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
