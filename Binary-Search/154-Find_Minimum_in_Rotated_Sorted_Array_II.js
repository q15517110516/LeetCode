// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// The array may contain duplicates.

// Example 1:

// Input: [1,3,5]
// Output: 1
// Example 2:

// Input: [2,2,2,0,1]
// Output: 0
// Note:

// This is a follow up problem to Find Minimum in Rotated Sorted Array.
// Would allow duplicates affect the run-time complexity? How and why?

// 
// @param {number[]} nums
// @return {number}
// 
var findMin = function(nums) {
    
    // The array may contain duplicates

    // Worst case [1,1,1,1,0,1,1,1] contains a 0; 
    // Time Complexity is O(n) at this case;
    let min = nums[0];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < min){
            min = nums[i];
        }
    }
    return min;
};