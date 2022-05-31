/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const objParent = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];
  for (let el of s) {
    if (objParent[el]) {
      stack.push(objParent[el]);
    } else if (stack.length > 0 && stack[stack.length - 1] === el) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
