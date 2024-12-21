const removeFromArray = function(arr, ...nums) {
    tempArray = [];
    for(let char of arr)
    {
        var bool = true;
        for(let i = 0; i < nums.length; i++)
        {
            if(char == nums[i] && typeof nums[i] == typeof char)
            {
                bool = false;
                break;
            }
        }
        if(bool) tempArray.push(char); 
        bool = true;
    }
    return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
