const removeFromArray = function (originalArr, ...valuesToRemove) {
  return originalArr.filter((value) => !valuesToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
