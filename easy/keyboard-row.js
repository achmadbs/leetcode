/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const keyMap = {
        "a" : 1, "b" : 2, "c" : 2, "d" : 1, "e" : 0,
        "f" : 1, "g" : 1, "h" : 1, "i" : 0, "j" : 1,
        "k" : 1, "l" : 1, "m" : 2, "n" : 2, "o" : 0,
        "p" : 0, "q" : 0, "r" : 0, "s" : 1, "t" : 0,
        "u" : 0, "v" : 2, "w" : 0, "x" : 2, "y" : 0,
        "z" : 2
    };
    const res = [];
    for (let i = 0; i < words.length; i++) {
        let isFound = true;
        const wordWithinMap = keyMap[words[i].charAt(0).toLowerCase()];
        for (let j = 1; j < words[i].length; j++) {
            if (keyMap[words[i].charAt(j).toLowerCase()] !== wordWithinMap) {
                isFound = false;
                break;
            }
        }
        if (isFound) res.push(words[i])
    }
    return res
};
