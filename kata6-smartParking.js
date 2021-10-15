/* Instructions:
1. We need to write a function called whereCanIPark() that returns the
coordinates of an available parking spot for the vehicle, or returns false
if there is no available spot.
2. Our function receives an array of arrays representing parking spots,
and a string with type of the vehicle that is looking for a parking spot.*/


const whereCanIPark = function(spots, vehicle) {
  let parkHere = false;

  for (let i = 0; i < spots.length; i++) {

    for (let x = 0; x < spots[i].length; x++) {
      if (vehicle === "regular" && (spots[i][x] === "R")) {
        return [x, i];

      } else if (vehicle === "small" && (spots[i][x] === "R" || spots[i][x] === "S")) {
        return [x, i];

      } else if (vehicle === "motorcicle" && (spots[i][x] === "R" || spots[i][x] === "S" || spots[i][x] === "M")) {
        return [x, i];
      }
    }
  }
  return parkHere
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE i
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S'] // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcicle'
))
