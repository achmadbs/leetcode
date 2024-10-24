/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hashString = {};
    for (let i = 0; i < s.length; i++) {
        if (!hashString[s[i]]) {
            hashString[s[i]] = 0
        }
        hashString[s[i]]++
    }

    for (let i = 0; i < t.length; i++) {
        if (!hashString[t[i]]) {
            return t[i]
        } else {
            hashString[t[i]]--
        }
    }
    return ""
};
