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
    
    let start = 0;
    let end = nums.length - 1;
    let left = 0;
    let right = 0;
    let res = [];

    // Left Position
    while(start + 1 < end){
        let mid = start + (end - start)/2;
        if(nums[mid] === target){
            end = mid;
        } 
        else if(nums[mid] < target){
            start = mid;
        }
        else{
            end = mid;
        }
    }
    if(nums[start] === target){
        left = start;
    }
    else if(nums[end] === target){
        left = end;
    }
    else{
        return [-1, -1];
    }
    
    res.push(left);
    
    
    
    start = 0;
    end = nums.length - 1;
    // Right Position
    while(start + 1 < end){
        mid = start + (end - start)/2;
        if(nums[mid] === target){
            start = mid;
        } 
        else if(nums[mid] < target){
            start = mid;
        }
        else{
            end = mid;
        }
    }
    if(nums[end] === target){
        right = end;
    }
    else if(nums[start] === target){
        right = start;
    }
    else{
        return [-1, -1];
    }
    
    res.push(right);
    return res;
    
};