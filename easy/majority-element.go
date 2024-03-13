func majorityElement(nums []int) int {
    res := 0
    currentHighest := 0
    hashMap := make(map[int]int)

    for _, num := range nums {
        if _, isExist := hashMap[num]; !isExist {
            hashMap[num] = 1
        } else {
            hashMap[num]++
        }

        if hashMap[num] > currentHighest {
            res = num
            currentHighest = hashMap[num]
        }
    }
    return res
}
