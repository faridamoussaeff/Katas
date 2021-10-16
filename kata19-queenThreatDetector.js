let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

function generateBoard (whiteQueen, blackQueen){
  let boardSize = 8;
  let board = [];
  for (let i = 0; i < boardSize; i++){
    let row = [];
    for (let j = 0; j < boardSize; j++){
      if(((i === whiteQueen[0]) && (j === whiteQueen[1])) || ((i === blackQueen[0]) && (j === blackQueen[1]))){
        row[j] = 1;
      }
      else{
      row[j] = 0
      }
    }
  board.push(row);
  }
return(board);
}

function queenThreat(arr) {
  let findIndex;
  let findIndexColumn;
  let queens = [];

  for (let i = 0; i < arr.length; i++){
    findIndex = arr[i].indexOf(1)
    if (findIndex != -1){
      queens.push([i, arr[i].indexOf(1)]);
    }
  }

  //diagonal check 1. (a + b === a + b)
  if((queens[0][0]+queens[0][1])===(queens[1][0]+queens[1][1])){
    return(true);
    }

  //diagonal check 1. (a - b === a - b)
  else if((queens[0][0]+queens[0][1])===(queens[1][0]+queens[1][1])){
    return(true);
    }

  //column check. (a = a)
  else if((queens[0][0])===(queens[1][0])){
    return(true);
    }

  //column check. (b = b)
  else if((queens[0][1])===(queens[1][1])){
    return(true) ;
    }

  else{
    return(false);
  }
}  
