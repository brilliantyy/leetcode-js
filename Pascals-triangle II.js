/**
 * Beats 13.50 %
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [];
    for(var i = 0; i < rowIndex + 1; i++) {
        row.push(1);
    }

    for(i = 0; i < rowIndex + 1; i++) {
        for(var j = i - 1; j >= 1; j--) {
            row[j] = row[j] + row[j-1];
        }
    }
    return row;
};
