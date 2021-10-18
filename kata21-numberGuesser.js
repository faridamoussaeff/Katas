let prompt = require("prompt-sync")();
const maxNumber = 100;
let randomNumber = parseInt(Math.random() * maxNumber);

const compareNumbers = function(knownNumber) {
  var attempts = 0;
  var guess;
  do {
  guess = prompt("Guess a number: ");
  attempts++;
    if(guess > knownNumber) {
      console.log('Too High!');
    } else if(guess < knownNumber) {
      console.log('Too Low!');
    } else if(!parseInt(guess)) {
      console.log('Not a number! Try again!');
    } else if(guess == knownNumber) {
      console.log('You got it! You took ' + attempts + ' attempts!');
    }
  } while (guess != knownNumber);
};

compareNumbers(randomNumber);
