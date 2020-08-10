// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

// 
// @param {string} s
// @return {string}
// 

var reverseWords = function(s) {
    let array = s.split(' ');
    return array.map(word => 
        word.split('').reverse(word, 0, word.length - 1).join('')).join(' ')
    
};

var reverse = function(array, start, end){
    for(let i = start, j = end; i < j; i++, j--){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};