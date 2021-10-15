/* Challenge:
1. create a function named conditionalSum that will be given
an array of numbers and a condition: odd or even.
2. Given this condition, add up only the values which match that condition.
3. If no values match the condition, return 0.
4. Use some sort of looping. Do Not use Array.prototype.filter()*/

let conditionalSum = (numArray, condition) => {
  let solution = 0;

  for (i = 0; i < numArray.length; i++) {
    let number = numArray[i];
    if (condition === 'even' && number % 2 === 0) {
      solution += number;
    } else if (condition === 'odd' && number % 2 !== 0) {
      solution += number;
    }
  }
  return solution;
}

anArray = [1, 2, 4, 4, 5, 7, 5, 3, 8, 3];

console.log(conditionalSum(anArray, 'even'))
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 9], "odd"));
console.log(conditionalSum([13, 88, 12, 40, 99], "even"));
console.log(conditionalSum([0, 2, 4, 6], "odd"));
