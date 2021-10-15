/*Challenge:
find the two largest numbers in the array and sum them together */

const sumLargestNumbers = function(data) {

  for (let i = 0; i < data.length; i++)
    for (let a = 0; a < i; a++)
      if (data[i] < data[a]) {
        let b = data[i];
        data[i] = data[a];
        data[a] = b;
      }

  let reverseData = data.reverse();

  let numOne = reverseData[0];
  let numTwo = reverseData[1];
  let largestNumSum = numOne + numTwo;
  return largestNumSum;
};

console.log(sumLargestNumbers([1, 10])); //returns: 11
console.log(sumLargestNumbers([1, 2, 3])); //returns: 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //returns: 126
