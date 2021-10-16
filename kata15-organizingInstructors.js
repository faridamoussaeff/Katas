const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longestNameValue = instructors[0].name.length;
  let longestName = instructors[0];

    for(let i = 1; i < instructors.length; i++){
      if (instructors[i].name.length > longestNameValue){
        longestName = instructors[i];
        longestNameValue = instructors[i].name.length;
      };
    };

  return(longestName);
};

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
