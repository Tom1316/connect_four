// Make your changes to store and game state in this file

export type Player = 'nought' | 'cross' | 'nobody' | undefined
export type Cell = number | Player | null

export class Settings{
  boardWidth:number=7;
  boardLength:number=6;
}

export const settings = new Settings()


let board:Cell[][] =[]
 for(let row = 0; row < settings.boardWidth; row++){
  let row = null
  for(let col = 0; col< settings.boardLength; col++){
    let col = null
  }
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

  for (let row = 0; row< settings.boardWidth; row ++){
    let rowElement = document.createElement("div");
    rowElement.id = `row-${row}`;
    rowElement.className = "row"

    for (let column = 0; column < settings.boardLength; column ++){
      let columnElement = document.createElement("div");
      columnElement.id = `row-${row}-column-${column}`;
      columnElement.className = "column"
      rowElement.appendChild(columnElement)
    }
    grid?.appendChild(rowElement)
  }

}
