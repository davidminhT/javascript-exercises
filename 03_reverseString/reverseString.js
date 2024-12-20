const reverseString = function(string) {
    var tempString = string.split('');
    var stringLen = string.length;
    var n = stringLen - 1;
    for(let i = 0; i <= n; i++)
    {
        let tempChar = tempString[n];
        tempString[n] = tempString[i];
        tempString[i] = tempChar;
        n--;
    }
    return tempString.join("");

};

// Do not edit below this line
module.exports = reverseString;
