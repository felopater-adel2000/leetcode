
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numberMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let result = 0
    for(let i = 0; i < s.length - 1; i++)
    {
        if(numberMap[s[i]] < numberMap[s[i + 1]]) result -= numberMap[s[i]]
        else result += numberMap[s[i]]
    }

    return result += numberMap[s[s.length - 1]] 
};