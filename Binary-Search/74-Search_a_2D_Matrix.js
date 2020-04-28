// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// - Integers in each row are sorted from left to right.
// - The first integer of each row is greater than the last integer of the previous row.

// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true

// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

/*
    @param {number[][]} matrix
    @param {number} target
    @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    // Method 1
    // if(matrix.length === 0){
    //     return false;
    // }
    // let start = 0;
    // let end = matrix.length - 1;
    // let innerLen = matrix[0].length;
    // let innerLast = innerLen - 1;

    // while(start + 1 < end){
    //     let mid = parseInt(start + (end - start)/2);
    //     if(matrix[mid][innerLast] === target){
    //         return true;
    //     }
    //     else if(matrix[mid][innerLast] < target){
    //         start = mid;
    //     }
    //     else if(matrix[mid][innerLast] > target){
    //         end = mid;
    //     }
    // }

    // Method 2
    if(matrix.length === 0){
        return false;
    }

    let res = [];

    for(let i = 0; i < matrix.length; i++){
        res = res.concat(matrix[i]);
    }

    let start = 0;
    let end = res.length;

    while(start + 1 < end){
        let mid = parseInt(start + (end - start)/2);
        if(res[mid] === target){
            return true;
        }
        else if(res[mid] < target){
            start = mid;
        }
        else{
            end = mid;
        }
    }


    if(res[start] === target){
        return true;
    }
    if(res[end] === target){
        return true;
    }

    return false;

    


};