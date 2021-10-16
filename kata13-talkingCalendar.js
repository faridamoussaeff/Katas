const talkingCalendar = function(date) {
  //slicing up date variable
  const year = date.slice(0,4);
  const month = (parseInt(date.slice(5,7))-1);
  let day = date.slice(-2,);

  const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const wordMonth = months[month]
  let dayEnding = '';

  //if day has a leading 0
  if (day[0] === '0'){
    day = date.slice(-1,)
  }

  //adding appropriate endings to day
  if (day === '1'){
    dayEnding = 'st';
  }
  else if (day === '2'){
    dayEnding = 'nd';
  }
  else if (day === '3'){
    dayEnding = 'rd';
  }
  else{
    dayEnding = 'th';
  }

  let dateString = (wordMonth + ' ' + day + dayEnding + ', ' + year);
  return(dateString);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
