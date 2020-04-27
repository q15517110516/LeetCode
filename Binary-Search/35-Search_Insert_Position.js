// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// Example 3:

// Input: [1,3,5,6], 7
// Output: 4

// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
    if(nums.length === 0){
        return -1;
    }

    var start = 0;
    var end = nums.length - 1;
    var mid = start + (end-start)/2;

    while(start + 1 < end){
        if(nums[mid] === target){
            end = mid;
        }
        else if(nums[mid] < target){
            start = mid;
        }
        else if(nums[mid] > target){
            end = mid;
        }
    }
    if(nums[end] === target || nums[end] > target){
        return end+1;
    }
    if(nums[start] === target || nums[start] < target){
        return start;
    }
    
};