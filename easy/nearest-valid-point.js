/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let result = -1;
  let lowestDistance = Number.MAX_VALUE;
  for (let i = 0; i < points.length; i++) {
    const [first, second] = points[i];
    const distance = Math.abs(x - first + (y - second));

    if ((first !== x && second !== y) || lowestDistance <= distance) {
      continue;
    }

    lowestDistance = distance;
    result = i;
  }
  return result;
};
