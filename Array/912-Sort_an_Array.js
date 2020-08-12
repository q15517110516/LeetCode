// Given an array of integers nums, sort the array in ascending order.


// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// 
// @param {number[]} nums
// @return {number[]}
// 

// Method 1: Quick Sort
var sortArray = function(nums) {
    if(nums.length > 1){
        quickSort(nums, 0, nums.length - 1);
    }
    return nums;
};

var quickSort = function(nums, start, end){

    if(start >= end){
        return;
    }
    // Find pivot
    let mid = Math.floor((start + end)/2);
    let pivot = nums[mid];

    let left = start;
    let right = end;

    while(left <= right){

        // Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
        while(nums[left] < pivot){
            left++;
        }

        // Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
        while(nums[right] > pivot){
            right--;
        }

        //Check if left pointer is less than or equal to right pointer, then saw the elements in locations of these pointers.
        if(left <= right){
            swap(nums, left, right);

            // Increment the left pointer and decrement the right pointer.
            left++;
            right--;
        }
    }
    quickSort(nums, start, right); // start = 0, right = index of pivot
    quickSort(nums, left, end); // left = index of pivot, end = nums.length - 1

}


var swap = function(nums, num1, num2){
    let temp = nums[num1];
    nums[num1] = nums[num2];
    nums[num2] = temp;
}