/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  let rowPointer = 0;
  let colPointer = col - 1;

  while (rowPointer < row && colPointer >= 0) {
    if (matrix[rowPointer][colPointer] === target) {
      return true;
    }
    if (matrix[rowPointer][colPointer] < target) {
      rowPointer++;
    } else {
      colPointer--;
    }
  }
  return false;
};
