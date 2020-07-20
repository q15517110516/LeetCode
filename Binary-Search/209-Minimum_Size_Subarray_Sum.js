// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

// 
// @param {number} s
// @param {number[]} nums
// @return {number}
// 
var minSubArrayLen = function(s, nums) {

    let n = nums.length;
    if(n === 0){
        return 0;
    }

    let start = 0;
    let end = 0;
    let sum = 0;
    let length = 2**31;

    while(end < n){
        sum += nums[end];
        while(sum >= s){
            length = Math.min(length, end - start + 1);
            sum -= nums[start];
            start ++;
        }
        end ++;
    }

    return (length != 2**31) ? length : 0;
};