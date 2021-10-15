/* Instructions:
Create a function named repeatNumbers that will return a string with each
of the given values repeated the appropriate number of times,
if there are multiple sets of values each set should be separated by a comma.
If there is only one set of values then you should omit the comma.
*/
const repeatNumbers = function(data) {

  let newArray = [];

  for (let d = 0; d < data.length; d++) {
    const pairs = data[d];
    const numOne = pairs[0];
    const numTwo = pairs[1];

    let string = numOne.toString();
    const retString = string.repeat(numTwo);

    newArray.push(retString);

  }
  return newArray.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2],[2, 3]]));
console.log(repeatNumbers([[10, 4],[34, 6],[92, 2]]));
