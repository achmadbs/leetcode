/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // reserve an array with expected row and column
  let res = new Array(r).fill(0).map((_) => new Array(c).fill(0));

  //  create pointer for row and column to fill reserved array
  let row_num = 0;
  let col_num = 0;

  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      //  fill the array row and column if row is exceeded it will not assign new value
      res[row_num][col_num] = mat[i][j];
      col_num++;
      if (col_num === c) {
        col_num = 0;
        row_num++;
      }
    }
  }
  return res;
};
