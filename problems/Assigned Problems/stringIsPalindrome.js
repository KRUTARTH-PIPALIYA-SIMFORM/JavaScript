// Palindrome Check:
// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward.


String.prototype.isPalindrome = function () {
    let n = Math.floor(this.length / 2),
        length = this.length;
    
    for (let i = 0; i < n; i++)
        if (this[i] !== this[length - 1 - i])
            return false;
    
    return true;
}

console.log('12321'.isPalindrome());
