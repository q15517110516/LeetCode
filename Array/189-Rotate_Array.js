// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// It's guaranteed that nums[i] fits in a 32 bit-signed integer.
// k >= 0

// 
// @param {number[]} nums
// @param {number} k
// @return {void} Do not return anything, modify nums in-place instead.
// 
var rotate = function(nums, k) {

    // Method 1: 3 step reverse
    // Step 1: Reverse all => [7, 6, 5, 4, 3, 2, 1]
    // Step 2: Find 'k - 1' and reverse k elements => [5, 6, 7, 4, 3, 2, 1]
    // Step 3: Reverse the rest of the elements => [5, 6, 7, 1, 2, 3, 4]
    
    k = k % nums.length;
        
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    // Method 2: 
    // Use 'splice' to cut the last 'k' elements of the original array, and add to the front of the modified array
    // e.g. nums = [1, 2, 3, 4, 5];  k = 3
    // cut elements => [3, 4, 5] original array => [1, 2]
    // add cut elements to the modifies original array => [3, 4, 5, 1, 2]  
    let new_nums = nums.slice(nums.length - k, nums.length);
    nums.splice(nums.length - k, k);
    for(let i = new_nums.length - 1; i >= 0; i--){
        nums.splice(0, 0, new_nums[i]);
    }

    
};

var reverse = function(nums, start, end){
    for(let i = start, j = end; i < j; i++, j--){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};