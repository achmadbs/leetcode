/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRows = triangle[i - 1];
    let currentRows = [];

    currentRows.push(1);
    for (let j = 1; j < prevRows.length; j++) {
      currentRows[j] = prevRows[j] + prevRows[j - 1];
    }
    triangle.push(currentRows);
    currentRows.push(1);
  }
  return triangle;
};
