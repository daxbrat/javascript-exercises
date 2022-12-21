let wordResultArr = [];
const reverseString = function (normalWord) {
  wordResultArr = normalWord.split("");
  wordResultArr.reverse();
  return wordResultArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
