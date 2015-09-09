function palindrome(str) {
  var downcaseStr = str.toLowerCase();
  var array = downcaseStr.split("");
  var reversedArray = array.slice().reverse();
  if (reversedArray.join("") === array.join("")) {
    return true;
  } else {
    return false;
  }
}
