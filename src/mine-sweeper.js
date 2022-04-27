const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  
  matrix.forEach(row => {
    res.push(Array(row.length));
  });

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const moves = [
        [[row - 1], [col]],
        [[row - 1], [col + 1]],
        [[row], [col + 1]],
        [[row + 1], [col + 1]],
        [[row + 1], [col]],
        [[row + 1], [col - 1]],
        [[row], [col - 1]],
        [[row - 1], [col - 1]],
      ];

      let minesArround = 0;

      moves.forEach(move => {
        if (matrix[move[0]] !== undefined && matrix[move[0]][move[1]] !== undefined) {
          if (matrix[move[0]][move[1]]) {
            minesArround += 1
          }
        }
      })

      res[row][col] = minesArround;
    }  
  }

  return res;
}

module.exports = {
  minesweeper
};
