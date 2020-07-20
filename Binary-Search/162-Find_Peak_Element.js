// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5 
// Explanation: Your function can return either index number 1 where the peak element is 2, 
//              or index number 5 where the peak element is 6.


// 
// @param {number[]} nums
// @return {number}
// 
var findPeakElement = function(nums) {
    
    let start = 0;
    let end = nums.length - 1;

    if(nums.length === 1){
        return start;
    }

    while(start + 1 < end){

        let mid = parseInt(start + (end - start)/2);

        if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
            return mid;
        }
        else if(nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]){
            start = mid;
        }
        else{
            end = mid;
        }
    }
    if(nums[start] > nums[end]){
        return start;
    }
    if(nums[start] < nums[end]){
        return end;
    }
};