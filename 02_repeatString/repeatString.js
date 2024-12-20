const repeatString = function(string, num) 
{
    if(num < 0) {
        return 'ERROR';
    }
    var outputString = '';
    while(num > 0)
    {
        num--;
        outputString += string;
    }
    return outputString;

};

// Do not edit below this line
module.exports = repeatString;
