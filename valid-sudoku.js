/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowSet = [];
  let colSet = [];
  let boxSet = [];

  for (let i = 0; i < 9; i++) {
    rowSet[i] = new Set();
    colSet[i] = new Set();
    boxSet[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const currentValue = board[i][j];

      if (currentValue === '.') {
        continue;
      }

      // check wether the row already has the currentValue
      if (rowSet[i].has(currentValue)) {
        return false;
      } else {
        rowSet[i].add(currentValue);
      }

      // check wether the column already has the currentValue
      if (colSet[j].has(currentValue)) {
        return false;
      } else {
        colSet[j].add(currentValue);
      }
      // check wether the box already has the currentValue
      const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxSet[box].has(currentValue)) {
        return false;
      } else {
        boxSet[box].add(currentValue);
      }
    }
  }
  return true;
};
