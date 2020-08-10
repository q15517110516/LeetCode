// Given an input string, reverse the string word by word.


// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// 
// @param {string} s
// @return {string}
// 

// push word into a new array, this array contains no space;
// use 'split()' transfer string into array, reverse every word in the array

var reverseWords = function(s) {
    let array = s.split(' ');
    
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].length > 0){
            newArray.push(array[i]);
        }
    }
    reverse(newArray, 0, newArray.length - 1)
    return newArray.join(' ')
    
};

var reverse = function(array, start, end){
    for(let i = start, j = end; i < j; i++, j--){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};