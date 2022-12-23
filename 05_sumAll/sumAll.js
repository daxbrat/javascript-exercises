let sum = 0;
const sumAll = function (lowNum, highNum) {
  if (highNum < lowNum) {
    const numHolder = lowNum;
    lowNum = highNum;
    highNum = numHolder;
  }
  for (let i = lowNum; i <= highNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
