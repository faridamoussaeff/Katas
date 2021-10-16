let calculateChange = function(total, cash) {
  // Your code here
  let output = {};
  let denominations = {
    'twenty': 2000,
    'ten': 1000,
    'five': 500,
    'twoDollar': 200,
    'dollar': 100,
    'quarter': 25,
    'dime': 10,
    'nickel': 5,
    'penny': 1,
  };
  let delta = cash - total;
  let runningtotal = delta;

  for (let key in denominations) {
    let currentdenom = denominations[key];
    let outputdenom = key;

    if (runningtotal - currentdenom > 0) {
      runningtotal -= currentdenom;
      output[outputdenom] = 1;

      while (currentdenom <= runningtotal) {
        output[outputdenom] += 1;
        runningtotal -= currentdenom;

      }
    }
  }
  return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
