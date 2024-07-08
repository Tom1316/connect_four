//
// Make your changes to store and update game state in this file

import { Player, Cell, getBoard, setBoard, settings, boardBuilder, Settings } from './board'

export const noughtText = 'nought'
export const crossText = 'cross'
export const nobodyText = 'nobody'

let currentPlayer:Player = undefined

// Take the row and column number and update the game state.
export function takeTurn(rowIndex: number, columnIndex: number,
  currentGameOver: boolean, currentBoard: Cell[][], currentPlayer: Player): Cell[][] {
    
    function gravity(columnIndex:number, currentPlayer:Player, currentBoard:Cell[][]){
      for (let row = settings.boardRows - 1; row >= 0; row--) {
        if (currentBoard[row][columnIndex] == null) {
          currentBoard[row][columnIndex] = currentPlayer
          break
        }
      }
      return currentBoard
    }
  
    console.log(`takeTurn was called with row: ${rowIndex}, column: ${columnIndex}`) // keep this line
  
    // Only apply gravity if the game is not over and the selected column is valid
    if (!currentGameOver && currentBoard[0][columnIndex] == null) {
      currentBoard = gravity(columnIndex, currentPlayer, currentBoard)
    }
    
    return currentBoard
  }

// Switches and sets player to alternate between "nought" and "cross"
export function switchPlayer(currentPlayer: Player): Player {

  if (currentPlayer == 'nought' || currentPlayer == undefined) {
    currentPlayer = "cross"
  }
  else {currentPlayer = "nought"}

  console.log('Switch player called. Current player is', currentPlayer)

  return currentPlayer
}

// Return either 'nought', 'cross' or 'nobody' if the game is over.
// Otherwise return null to continue playing.
// This currently is only checking the winner on the next turn

export function checkWinner(currentBoard: Cell[][]): Player {
  const rows = settings.boardRows
  const cols = settings.boardCols

  // row win  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        if (currentBoard[r][c] == currentBoard[r][c + 1] &&
            currentBoard[r][c + 1] == currentBoard[r][c + 2] &&
            currentBoard[r][c + 2] == currentBoard[r][c + 3] &&
            currentBoard[r][c] != null) {
            return currentBoard[r][c] as Player
        }
    }
 }

// col win
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows-3; r++) {
            if (currentBoard[r][c] == currentBoard[r+1][c] &&
                currentBoard[r + 1][c] == currentBoard[r + 2][c]&&
                currentBoard[r + 2][c] == currentBoard[r + 3][c] &&
                currentBoard[r][c] != null) {
                return currentBoard[r][c] as Player;
            }
        }
    }

//diag win
    for (let r = 3; r < rows; r++) {
      for (let c = 0; c < cols - 3; c++) {
          if (currentBoard[r][c] == currentBoard[r - 1][c + 1] &&
              currentBoard[r - 1][c + 1] == currentBoard[r - 2][c + 2] &&
              currentBoard[r - 2][c + 2] == currentBoard[r - 3][c + 3] &&
              currentBoard[r][c] != null) {
              return currentBoard[r][c] as Player;
          }
      }
  }

    //anti-diag win
    for (let r = 0; r < rows-3; r++) {
      for (let c = 0; c < cols; c++) {
          if (currentBoard[r][c] == currentBoard[r + 1][c + 1] &&
              currentBoard[r + 1][c + 1] == currentBoard[r + 2][c + 2] &&
              currentBoard[r + 2][c + 2] == currentBoard[r + 3][c + 3] &&
              currentBoard[r][c] != null) {
              return currentBoard[r][c] as Player;
          }
      }
  }

console.log("checkWinner was called")
}

// Set the game state back to its original state to play another game.
export function resetGame() {
  setBoard(boardBuilder())
  currentPlayer = "cross"
  console.log('resetGame was called') // keep this line here
}

// Return the current player
export function getCurrentPlayer(): Player {
  return currentPlayer
}

// Update current player
export function setCurrentPlayer(newCurrentPlayer: Player){
  currentPlayer = newCurrentPlayer
}

// Return the current game state
export function getGameOver(): boolean { 
  return false
}

// Set the current game state
export function setGameOver(newGameOver: boolean) {}
