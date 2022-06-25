/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let tempWord = '';
  let anchorWord = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      tempWord = s[i] + tempWord;
    } else {
      anchorWord += tempWord + ' ';
      tempWord = '';
    }
  }
  return anchorWord + tempWord;
};
