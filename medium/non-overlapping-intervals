/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let prevEnd = intervals[0][1];
    let remove = 0;
    for (let i = 1; i < intervals.length; i++) {
        const [currStart, currEnd] = intervals[i];
        if (currStart >= prevEnd) {
            prevEnd = currEnd
        } else {
            remove++
            prevEnd = Math.min(prevEnd, currEnd)
        }
    }
    return remove
};
