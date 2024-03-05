func getConcatenation(nums []int) []int {
    newArray := make([]int, len(nums) * 2)
    for i, v := range nums {
        newArray[i] = v
        newArray[i + len(nums)] = v
    }
    return newArray
}
