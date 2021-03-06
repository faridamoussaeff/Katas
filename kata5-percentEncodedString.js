/* Challenge/Instructions:
1. Create a function named urlEncode that will receive a string of words,
and return that string with all of the whitespace characters converted to %20.
If there is whitespace on the outside of the string,
you should only replace the whitespace within the string.
2. Use some sort of looping. Do Not use String.prototype.replace */

/* Expected Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/

const urlEncode = function(text) {
  let length = text.length; // get string length
  let encoded = '';
  if (text[0] === ' ') { // delete first char if whitespace
    encoded += '';
  } else {
    encoded += text[0];
  }
  for (i = 1; i < length - 1; i++) {
    if (text[i] === ' ') {
      encoded += '%20'; // replace *internal* (note loop start/end points) whitespace with '%20'
    } else {
      encoded += text[i];
    }
  }
  if (text[length - 1] === ' ') { // delete last char if whitespace
    encoded += '';
  } else {
    encoded += text[length - 1];
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode("This is a final test run to make sure"));
