func mergeAlternately(word1 string, word2 string) string {
    res := "";
    word1Length := len(word1);
    word2Length := len(word2);

    for i, str := range word1 {
        res += string(str);
        if i < word2Length {
            res += string(word2[i])
        }
    }

    if word1Length < word2Length {
        res += word2[word1Length:]
    }

    return res
}
