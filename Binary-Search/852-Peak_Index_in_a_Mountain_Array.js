// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:

// Input: [0,1,0]
// Output: 1
// Example 2:

// Input: [0,2,1,0]
// Output: 1
// Note:

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A is a mountain, as defined above.

//NOTE
// The comparison A[i] < A[i+1] in a mountain array looks like [True, True, True, ..., True, False, False, ..., False]: 1 or more boolean Trues, followed by 1 or more boolean False. For example, in the mountain array [1, 2, 3, 4, 1], the comparisons A[i] < A[i+1] would be True, True, True, False.


// 
// @param {number[]} A
// @return {number}
// 
var peakIndexInMountainArray = function(A) {

    let start = 0;
    let end = A.length - 1;

    while (start + 1 < end){
        let mid = parseInt(start + (end - start)/2);

        if(A[mid - 1] < A[mid] && A[mid] > A[mid + 1]){
            return mid;
        }
        else if(A[mid] > A[mid - 1] && A[mid + 1] > A[mid]){
            start = mid;
        }
        else if(A[mid] < A[mid - 1] && A[mid + 1] < A[mid]){
            end = mid;
        }
    }
    if(A[start] > A[end]){
        return start;
    }
    if(A[end] > A[start]){
        return end;
    }
};