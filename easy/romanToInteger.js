/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  const splitChar = s.split('');
  splitChar.forEach((value, i) => {
    if (obj[value] < obj[splitChar[i + 1]]) res -= obj[value];
    else res += obj[value];
  });
  return res;
};
