const checkAir = function(samples, threshold) {
  var count = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      count++;
    }
  }
  if (threshold < count / 10) {
    console.log("polluted");

  } else if (threshold > count / 10) {
    console.log("Clean");
  }
  return "polluted"
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
