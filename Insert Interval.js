/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    var res = [];
    var i = 0, len = intervals.length;

    while(i < len && intervals[i].end < newInterval.start) {
        res.push(intervals[i++]);
    }

    while(i < len && intervals[i].start <= newInterval.end) {
        newInterval = new Interval(
            Math.min(intervals[i].start, newInterval.start),
            Math.max(intervals[i].end, newInterval.end)
            );
        i++;
    }
    res.push(newInterval);

    while(i < len) {
        res.push(intervals[i++]);
    }

    return res;
};
