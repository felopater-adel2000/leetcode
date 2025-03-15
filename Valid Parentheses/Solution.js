
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    for(let i = 0; i < s.length; i++)
    {
        if(s[i] in map)
        {
            stack.push(s[i])
        }
        else 
        {
            let last = stack.pop()
            if(s[i] != map[last]) return false
        }
    }

    return stack.length == 0
};