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

    // Method 1: Using Binary Search to filter the last 2 arrays
    if(matrix.length === 0){
        return false;
    }
    let start = 0;
    let end = matrix.length - 1;
    let innerLen = matrix[0].length;
    let innerLast = innerLen - 1;

    while(start + 1 < end){
        let mid = parseInt(start + (end - start)/2);
        if(matrix[mid][innerLast] === target){
            return true;
        }
        else if(matrix[mid][innerLast] < target){
            start = mid;
        }
        else if(matrix[mid][innerLast] > target){
            end = mid;
        }
    }

    // Inner array start & end
    let start1 = 0;
    let end1 = matrix[start].length;
    let end2 = matrix[end].length;

    if(matrix[start][innerLast] < target){
        while(start1 + 1 < end1){
            mid = parseInt(start1 + (end1 - start1)/2);
            if(matrix[mid] === target){
                return true;
            }
            else if(matrix[mid] < target){
                start1 = mid;
            }
            else{
                end1 = mid;
            }
        }

        if(matrix[start1] = target){
            return true;
        }
        if(matrix[end1] = target){
            return true;
        }
        return false;

    }

    start1 = 0;
    if(matrix[start][innerLast] > target){
        while(start1 + 1 < end2){
            mid = parseInt(start1 + (end2 - start1)/2);
            if(matrix[mid] === target){
                return true;
            }
            else if(matrix[mid] < target){
                start1 = mid;
            }
            else{
                end2 = mid;
            }
        }

        if(matrix[start1] = target){
            return true;
        }
        if(matrix[end1] = target){
            return true;
        }
        return false;
    }

    return false;

    // Method 2: Using 'concat' to combine all the arrays into one array, then use Binary Search
    // if(matrix.length === 0){
    //     return false;
    // }

    // let res = [];

    // for(let i = 0; i < matrix.length; i++){
    //     res = res.concat(matrix[i]);
    // }

    // let start = 0;
    // let end = res.length;

    // while(start + 1 < end){
    //     let mid = parseInt(start + (end - start)/2);
    //     if(res[mid] === target){
    //         return true;
    //     }
    //     else if(res[mid] < target){
    //         start = mid;
    //     }
    //     else{
    //         end = mid;
    //     }
    // }


    // if(res[start] === target){
    //     return true;
    // }
    // if(res[end] === target){
    //     return true;
    // }

    // return false;

    


};