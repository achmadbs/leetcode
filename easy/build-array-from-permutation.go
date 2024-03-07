func buildArray(nums []int) []int {
    resArray := make([]int, len(nums))
    for i := 0; i < len(nums); i++ {
        resArray[i] = nums[nums[i]]
    }
    return resArray
}
