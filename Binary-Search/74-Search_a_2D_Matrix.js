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


    
    // // Inner array start & end
    // let arrayStart = 0;
    // let array1End = matrix[start].length;
    // let array2End = matrix[end].length;
    
    // if(matrix[start][innerLast] === target){
    //     return true;
    // }
    // else if(matrix[start][innerLast] > target){
    //     while(arrayStart + 1 < array1End){
    //         mid = parseInt(arrayStart + (array1End - arrayStart)/2);
    //         if(matrix[start][mid] === target){
    //             return true;
    //         }
    //         else if(matrix[start][mid] < target){
    //             arrayStart = mid;
    //         }
    //         else if(matrix[end][mid] > target){
    //             array1End = mid;
    //         }
    //     }

    //     if(matrix[start][arrayStart] === target){
    //         return true;
    //     }
    //     if(matrix[start][array1End] === target){
    //         return true;
    //     }

    // }
    // else{
    //     while(arrayStart + 1 < array2End){
    //         mid = parseInt(arrayStart + (array2End - arrayStart)/2);
    //         if(matrix[end][mid] === target){
    //             return true;
    //         }
    //         else if(matrix[end][mid] < target){
    //             arrayStart = mid;
    //         }
    //         else if(matrix[end][mid] > target){
    //             array2End = mid;
    //         }
    //     }

    //     if(matrix[end][arrayStart] === target){
    //         return true;
    //     }
    //     if(matrix[end][array2End] === target){
    //         return true;
    //     }
    // }

    // return false;

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

    // Method 3: One level Binary Search
    if(matrix.length === 0){
        return false;
    }

    let array = [];

    for(let i = 0; i < matrix.length; i++){
        let innerLast = matrix[0].length - 1;
        if(matrix[i][innerLast] > target){
            array = matrix[i];
            break;
        }
        else if(matrix[i][innerLast] < target){
            array = matrix[i + 1];
            break;
        }
        else{
            return true;
        }
    }

    let start = 0;
    let end = array.length - 1;

    while(start + 1 < end){
        let mid = parseInt(start + (end - start)/2);
        if(array[mid] === target){
            return true;
        }
        else if(array[mid] < target){
            start = mid;
        }
        else{
            end = mid;
        }
    }
    if(array[start] === target){
        return true;
    }
    if(array[end] === target){
        return true;
    }

    return false;

};