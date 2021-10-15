/* Challenge to determine which instructor has the longest name
- Create a function named instructorWithLongestName
that will receive an array of instructor objects, and return the object
that has the longest name.
If there are two instructors with the longest name,
return the first one. */

//Expected output:
//{name: "Jeremiah", course: "Web"}
//{name: "Domascus", course: "Web"}

const instructorWithLongestName = function(instructors) {

  let biggestName = instructors[0]['name'];
  let bigNameIndex = 0;

  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i]['name'].length;

    if (nameLength > biggestName.length) {
      biggestName = instructors[i]['name'];
      bigNameIndex = i;
    }
  }
  return instructors[bigNameIndex];
};

//INPUT
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
