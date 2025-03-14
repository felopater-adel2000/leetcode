/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return 0
    let result = strs[0]

    if(strs.length != 1)
    {
        for(let i = 0; i < strs.length; i++)        
        {
            result = getCommonString(result, strs[i])
            if(result == "") break
        }
    }

    return result
};


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function getCommonString(str1, str2)
{
    if(str1.length == 0 || str2.length == 0) return ""

    let charIndex = 0
    let result = ""

    do {
        if(str1[charIndex] == str2[charIndex]) result += str1[charIndex]
        else break
        charIndex++
    }while(charIndex < str1.length && charIndex < str2.length)

    return result
}