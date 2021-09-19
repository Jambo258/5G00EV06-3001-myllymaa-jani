String.prototype.isPalindrome = function () {
  const stringi = this.split("").reverse().join("");

  if (this == stringi) {
    return true;
  } else {
    return false;
  }
};

console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false
