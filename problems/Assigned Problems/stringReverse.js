// Reverse a String:
// Write a function that reverses a given string. For example, if the input is "hello," the output should be "olleh."

String.prototype.reverse = function () {
    let arr = this.split(''),
        n = Math.floor(arr.length / 2),
        length = arr.length;
    
    for (let i = 0; i < n; i++) [arr[i], arr[length - 1 - i]] = [arr[length - 1 - i], arr[i]];
    return arr.join('');
}

console.log('12345'.reverse());
