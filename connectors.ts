// This file contains helper code beyond the first week 'Intro to JavaScript' course content.
// You should not have to make any changes in this file to get your game working.

import { Player, Cell, getBoard, setBoard, drawBoard, settings, boardBuilder } from './board'

import { checkWinner, crossText, getCurrentPlayer, getGameOver, noughtText, resetGame, setCurrentPlayer, switchPlayer, takeTurn, nobodyText } from './academy'

const winnerName = document.getElementById('winner-name')!
const winnerDisplay = document.getElementById('winner-display')!
const validCellValues: Cell[] = [noughtText, crossText, null]
const validWinValues: Cell[] = [noughtText, crossText, nobodyText]

// Create board in html
drawBoard();

function clearHtmlGrid() {
  for (let columnIndex = 0; columnIndex < settings.boardCols; columnIndex++){
    for (let rowIndex = 0; rowIndex < settings.boardRows; rowIndex++) {
      document.getElementById(`row-${rowIndex}-column-${columnIndex}`)!.innerHTML = ''
    }
  }
}

function populateHtmlGridWithBoardState(board: Cell[][]) {
  console.log('populateHtmlGridWithBoardState was called with', board)
  
  clearHtmlGrid()
  for (let columnIndex = 0; columnIndex < settings.boardCols; columnIndex++){
    for (let rowIndex = 0; rowIndex < settings.boardRows; rowIndex++) {
      if (!board[rowIndex][columnIndex]) {
        continue
      }
      const cellText = board[rowIndex][columnIndex] === noughtText ? '⭕' : '❌'
      document.getElementById(`row-${rowIndex}-column-${columnIndex}`)!.innerText = cellText
    }
  }
}

//checks board dimensions are valid for rows (connect 4 has six rows)
function isValidRow(arrayOfCells: Cell[]) {
  let result = Array.isArray(arrayOfCells) && arrayOfCells.length === settings.boardRows
  return result
}
//checks board dimensions are valid for cols (connect 4 has 7 cols)
function isValidColumn(columnArray: Cell[]) {
  function transposeArray(array: Cell[][]): Cell[][] {
    //initialised 2d array with swapped dimension
    let transposed: Cell[][] = [];
        // Iterate through the rows of the original array
        for (let i = 0; i < array[0].length; i++) {
          transposed[i] = [];
          for (let j = 0; j < array.length; j++) {
              // Assign the value to the transposed array
              transposed[i][j] = array[j][i];
            }
          }
         return transposed
        }
  let transposed = transposeArray(getBoard())

  return Array.isArray(columnArray) && transposed[0].length === settings.boardCols
        && columnArray.every(function (item) {return validCellValues.includes(item)})
}

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(row: number, column: number) {
  console.log(`positionClick was called with rowIndex=${row}, columnIndex=${column},`)
  //row, column, currentGameOver, currentBoard, currentPlayer
  const board = takeTurn(row, column, getGameOver(), getBoard(), getCurrentPlayer())
  setBoard(board)
  setCurrentPlayer(switchPlayer(getCurrentPlayer()))


  if (!isValidRow(board[0]) || !board.every(isValidColumn)) {
    throw `Expecting "getBoard" to return a 2d array where all values are one of the strings ${validCellValues}. Actually received: ${JSON.stringify(board)}`
  }

  populateHtmlGridWithBoardState(board)
  const winner = checkWinner(board)
  if (winner) {
    if (typeof winner !== 'string' || !validWinValues.includes(winner)) {
      throw `Expecting "checkWinner" to return null or one of the strings ${validWinValues}. Actually received: ${winner}`
    }
    console.log("there is a winner")
    winnerName.innerText = winner
    winnerDisplay.style.display = 'block'
  }
}

// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event: any) {
  resetGame()
  winnerName.innerText = ''
  winnerDisplay.style.display = 'None'
  clearHtmlGrid()
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < settings.boardRows; rowIndex++) {
  for (let columnIndex = 0; columnIndex < settings.boardCols; columnIndex++) {
    const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`)!
    gridPosition.addEventListener('click', positionClick.bind(null, rowIndex, columnIndex))
  }
}

// Bind the click event for the reset button.
const resetButton = document.getElementById('reset-button')!
resetButton.addEventListener('click', resetClick)

// initialise the state
resetGame()
