function reverseString(word) {
  //create an array from the input string
  //reverse the array
  //create a string from the reversed array
  //return the reversed string
    return word.split("").reverse().join("");
  
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  isPalindrome is a function that returns either true or false. When the input string is the same forwards and backwards, I should return true. That means that if the input string is the same after I reverse it, I should return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
