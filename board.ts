// Make your changes to store and game state in this file

export type Player = 'nought' | 'cross' | 'nobody' | undefined
export type Cell = number | Player | null

export class Settings{
  boardRows:number=6;
  boardCols:number=7;
}

export const settings = new Settings()


// build initial board
let board:Cell[][] =[]
 for(let col = 0; col < settings.boardCols; col++){
  let col:null[] = [] //initialise the inner array
  for(let row = 0; row< settings.boardRows; row++){
    col[row] = null
  }
  board.push(col)
 }

console.log(board)

//function to build board
export function boardBuilder(): Cell[][] {
  let board:Cell[][] =[]
  for(let col = 0; col < settings.boardCols; col++){
    let col:null[] = [] //initialise the inner array
    for(let row = 0; row< settings.boardRows; row++){
      col[row] = null
    }
    board.push(col)
  }
  return board
}

// Return the current board state with either a noughtText or a crossText in
// each position. Put a null in a position that hasn't been played yet.

//retrieve the board
export function getBoard(): Cell[][] {
  console.log('getBoard was called')
return board
}

//overwrite board with new board
export function setBoard(newBoard: Cell[][]) {
  board = newBoard
  console.log('setBoard was called')
}

export function drawBoard(){ 
  const grid = document.getElementById("grid")

  for (let row = 0; row< settings.boardRows; row ++){
    let rowElement = document.createElement("div");
    rowElement.id = `row-${row}`;
    rowElement.className = "row"

    for (let column = 0; column < settings.boardCols; column ++){
      let columnElement = document.createElement("div");
      columnElement.id = `row-${row}-column-${column}`;
      columnElement.className = "column"
      rowElement.appendChild(columnElement)
    }
    grid?.appendChild(rowElement)
  }

}



