// Check whether a given string is a palindrome or not.

function palindrome(str){
    let reversed = str.split('').reverse().join('');
    return str == reversed;
}
console.log(palindrome("madam"));
console.log(palindrome("mann"));