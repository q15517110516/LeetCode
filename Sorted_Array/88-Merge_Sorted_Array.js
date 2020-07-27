// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9
// nums1.length == m + n
// nums2.length == n

// 
// @param {number[]} nums1
// @param {number} m
// @param {number[]} nums2
// @param {number} n
// @return {void} Do not return anything, modify nums1 in-place instead.
// 

var merge = function(nums1, m, nums2, n) {

    let i = m - 1;
    let j = n - 1;
    let index = m + n - 1;
    
    // While-Loop
    while(i >= 0 && j >= 0){
        if(nums2[j] > nums1[i]){
            nums1[index] = nums2[j];
            index--;
            j--;
        }
        else{
            nums1[index] = nums1[i];
            index --;
            i--;
        }
    }
    
    while(i >= 0){
        nums1[index] = nums1[i];
        index--;
        i--;
    }
    while(j >= 0){
        nums1[index] = nums2[j];
        index--;
        j--;
    }


    // For-Loop
    // for(let index = m + n - 1; index >= 0; index--){
    //     if(j < 0){
    //         break;
    //     }
    //     if(nums1[i] > nums2[j]){
    //         nums1[index] = nums1[i];
    //         i--;
    //     }
    //     else{
    //         nums1[index] = nums2[j];
    //         j--;
    //     }
    // }
};