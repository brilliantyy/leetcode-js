/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var resultArr = [], resultObj = {};
    function addElement(element){
        var key = element.split("").sort().join("");
        if (resultObj.hasOwnProperty(key)){
            resultObj[key].push(element);
        } else {
            resultObj[key] = [element];
        }
    }
    strs.forEach(addElement);

    for (var key in resultObj) {
        resultArr.push(resultObj[key].sort());
    }

    return resultArr;
};
