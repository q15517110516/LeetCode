// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

var searchRange = function(nums, target) {
    if(nums.length === 0){
        return [-1, -1];
    }
    
    var start = 0;
    var end = nums.length - 1;
    var mid = start + (end - start)/2;
    var res = [];

    while(start + 1 < end){
        if(nums[mid] === target){
            if(nums[mid - 1] === target){
                res.push(nums[mid - 1]);
            }
            else if(nums[mid + 1] === target){
                res.push(nums[mid + 1]);
            }
            end = mid;
        } 
        else if(nums[mid] < target){
            start = mid;
        }
        else if(nums[mid] > target){
            end = mid;
        }
    }
    if(nums[start] === target){
        return res.push(start);
    }
    if(nums[end] === target){
        return res.push(end);
    }
    else{
        return [-1, -1];
    }
    
};