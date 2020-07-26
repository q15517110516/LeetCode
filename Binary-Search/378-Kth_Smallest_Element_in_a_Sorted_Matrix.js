// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Example:

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// return 13.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ n2.

// 
// @param {number[][]} matrix
// @param {number} k
// @return {number}
// 
var kthSmallest = function(matrix, k) {
    
    // Method 1:
    // Combine to one array and sort
    let result = [];

    for(let i = 0; i < matrix.length; i++){
        result = result.concat(matrix[i]);
    }

    result.sort((a, b) => a - b);

    return result[k - 1];

    // Method 2:
    // Binary Search

    let m = matrix.length;

    let start = matrix[0][0];
    let end = matrix[m - 1][m - 1];

    while(start <= end){
        let mid = parseInt(start + (end - start)/2);
        let count= countInMatrix(matrix, mid);
        if(count < k){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return start;

    
};
var countInMatrix = (matrix, mid) => {
    let m = matrix.length;           
    let count = 0;
    let row = 0;                        
    let col = m - 1;                  
    while (row < m && col >= 0) {
    if (mid >= matrix[row][col]) { 
        count += col + 1;
        row++;
    } else {
        col--;
    }
    }
    return count;

};