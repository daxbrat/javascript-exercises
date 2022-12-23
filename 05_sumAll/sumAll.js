let sum = 0;
const sumAll = function (lowNum, highNum) {
  if (highNum < lowNum) {
    const numHolder = lowNum;
    lowNum = highNum;
    highNum = numHolder;
  }
  if (lowNum < 0 || highNum < 0) {
    return "ERROR";
  }
  if (typeof lowNum != "number" || typeof highNum != "number") {
    return "ERROR";
  }
  for (let i = lowNum; i <= highNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
