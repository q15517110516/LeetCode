// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// 
// @param {character[]} s
// @return {void} Do not return anything, modify s in-place instead.
// 

var reverseString = function(s) {
    reverse(s, 0, s.length - 1);
};

var reverse = function(array, start, end){
    for(let i = start, j = end; i < j; i++, j--){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }  
};

