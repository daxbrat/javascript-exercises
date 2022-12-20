let resultado = "";
const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  for (i = 1; i <= num; i++) {
    resultado += string;
  }
  return resultado;
};

// Do not edit below this line
module.exports = repeatString;
