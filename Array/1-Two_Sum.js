// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target){
    var res = [];
    for(var i = 0; i < nums.length; i++){
        for( var j = i+1; j < nums.length; j++){
            var num1 = target - nums[i];
            if(num1 === nums[j]){
                res.push(i, j);
                return res;
            }           
        }
    }
    return 0;
};