/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    var start = 0;
    var end = matrix.length - 1;
    
    while (start <= end) {
        
        var mid = Math.floor((start + end) / 2);
        
        if (matrix[mid][0] == target) {
            return true;
        } else if (matrix[mid][0] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    if (end == -1) {
        return false;
    } else {
        var row = end;
        start = 0;
        end = matrix[row].length - 1;
        
        while (start <= end) {
            
            mid = Math.floor((start + end) / 2);
            
            if (matrix[row][mid] == target) {
                return true;
            } else if (matrix[row][mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return false;
    }
    
};
