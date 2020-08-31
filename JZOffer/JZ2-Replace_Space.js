// Please implement a function to replace each interval in a string with "%20". 
// For example, when the string is 'We Are Happy'. Then the string after the replacement is 'We%20Are%20Happy'.

function replaceSpace(str){
    let arr = str.split('');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ' '){
            newArr.push(arr[i]);
        }
        if(arr[i] === ' '){
            newArr.push('%20');
        }
    }

    return newArr.join('');
}