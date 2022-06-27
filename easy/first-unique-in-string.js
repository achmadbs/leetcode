/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hash = {};
  let lowestFirstIdx = Number.MAX_VALUE;

  for (let i in s) {
    if (!(s[i] in hash)) {
      hash[s[i]] = {
        count: 1,
        idx: i,
      };
    } else {
      hash[s[i]].count++;
    }
  }

  for (let x in hash) {
    if (hash[x].count > 1) continue;
    lowestFirstIdx = Math.min(lowestFirstIdx, hash[x].idx);
  }

  return lowestFirstIdx === Number.MAX_VALUE ? -1 : lowestFirstIdx;
};
