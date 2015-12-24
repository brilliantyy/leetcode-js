/**
 * Beats 51.61 %
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {

    var arr1 = [A, C, E, G];
    var arr2 = [B, D, F, H];
    
    var midRecWidth = (C - A) + (G - E) - (Math.max.apply(Math, arr1) - Math.min.apply(Math, arr1)) 
    var midRecHeight = (D - B) + (H - F) - (Math.max.apply(Math, arr2) - Math.min.apply(Math, arr2));
    
    if (midRecWidth < 0 || midRecHeight < 0)
        return (C - A) * (D - B) + (G - E) * (H - F);
    else
        return (C - A) * (D - B) + (G - E) * (H - F) - midRecWidth * midRecHeight;
};