// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// Example:

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

// 
// @param {number[][]} matrix
// @param {number} target
// @return {boolean}
// 
var searchMatrix = function(matrix, target) {
    
    // Method 1:
    if(matrix.length === 0){
        return false;
    }
    
    let m = matrix.length;
    let n = matrix[0].length;
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === target){
                return true;
            }
        }
    }
    return false;

    // Method 2:
    if(matrix.length === 0){
        return false;
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let nStart = 0;
    let nEnd = n - 1;

    while()

};