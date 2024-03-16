func findRelativeRanks(score []int) []string {
    sortedArray := make([]int, len(score));
    mapNumber := make(map[int]int);
    var res []string

    copy(sortedArray, score);
    
    sort.Slice(sortedArray, func(a, b int)bool {
        return sortedArray[a] > sortedArray[b]
    });
    
    for i := 0; i < len(sortedArray); i++ {
        mapNumber[sortedArray[i]] = i + 1
    };

    for _, value := range score {
        rank := mapNumber[value];
        if rank == 1 {
            res = append(res, "Gold Medal");
        } else if rank == 2 {
            res = append(res, "Silver Medal");
        } else if rank == 3 {
            res = append(res, "Bronze Medal");
        } else {
            res = append(res, fmt.Sprintf("%d", rank));
        }
    }

    return res
}
