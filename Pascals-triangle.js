/**
 * Beats 43.06 %
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];

    if (numRows == 0) {
        return [];
    }if (numRows == 1) {
        result.push([1]);
    } else if (numRows == 2) {
        result.push([1]);
        result.push([1,1]);
    } else {
        result.push([1]);
        result.push([1,1]);

        for(var i = 2; i < numRows; i++) {
          var row = [];
          row.push(1);
          for(var j = 1; j < i; j++) {
            row.push(result[i-1][j-1] + result[i-1][j]);
          }
          row.push(1);
          result.push(row);
        }
    }
    return result;
};
