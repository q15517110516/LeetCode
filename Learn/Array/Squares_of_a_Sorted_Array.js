// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.


// @param {number[]} A
// @return {number[]}
// 

// Method 1: Sort;
var sortedSquares = function(A) {
    
    let res = [];

    for(let i = 0; i < A.length; i++){
        let square = A[i]*A[i];
        res.push(square);
    }

    return res.sort((a, b) => a - b);
};

// Method 2: Two Pointers;
var sortedSquares = function(A) {
    
    let res = [];
    let i = 0;
    let j = A.length - 1;
    
    while (i <= j) {
        
        let num1 = A[i] ** 2;
        let num2 = A[j] ** 2;
        
        if (num1 > num2) {
            res.unshift(num1);
            i++;
        } else {
            res.unshift(num2);
            j--;
        }
    }
    return res;
};