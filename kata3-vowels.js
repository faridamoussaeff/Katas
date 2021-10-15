//We need to count the number of vowels that appear in a given string.
//For this exercise, consider the following to be vowels: a, e, i, o, and u.

//// Expected Output
// 3
// 5
// 5

const numberOfVowels = function(data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let stringArray = data.split("");
  let counter = 0;
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (stringArray[i] === vowels[j]) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(numberOfVowels("orange")); // Returns: 3
console.log(numberOfVowels("lighthouse labs")); //Returns: 5
console.log(numberOfVowels("aeiou")); //Returns: 5
