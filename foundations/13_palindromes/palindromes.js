const palindromes = function (string) {
  // First solution. Works but terrible

  // let tempArr = [];
  // let counter = 0;
  // for (let i = string.length - 1; i >= 0; i--) {
  //   tempArr[counter] = string[i];
  //   counter++;
  // }
  // let tempArrStr = tempArr.toString();
  // let cleanStr = string.replace(/[^a-zA-Z0-9]/g, "");
  // let cleanTempArr = tempArrStr.replace(/[^a-zA-Z0-9]/g, "");

  // for (let i = 0; i < cleanStr.length; i++) {
  //   if (cleanStr[i].toLowerCase() !== cleanTempArr[i].toLowerCase()) {
  //     return false;
  //   }
  // }

  // return true;

  // Much better solution. Concise and idiomatic.
  
  // Clean (normalize) the given string
  const clean = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Convert the string to an array. Reverse the array. Convert back to string
  const reversed = clean.split('').reverse().join('');
  // Compare the two
  return clean === reversed;
};

// Do not edit below this line
module.exports = palindromes;
