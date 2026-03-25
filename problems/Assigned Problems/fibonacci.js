// Fibonacci Sequence:
// Write a function that generates the nth number in the Fibonacci sequence. The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

let fib = [0, 0, 1, 1];

function fibonacci(n) {
	if (fib[n])
		return fib[n];
	return fib[n] = fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(6));
