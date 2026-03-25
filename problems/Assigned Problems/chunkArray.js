// 5. Array Chunking:
// Write a function that takes an array and a chunk size as arguments and splits the array into chunks of the specified size.

function chunkArray(arr, size){
	let ans = [],
		cur = [];
	for (let i = 0; i < arr.length; i++){
		cur.push(arr[i]);
		if ((i + 1) % size == 0) {
			console.log(i);
			let copyArray = [...cur];
			ans.push(copyArray);
			cur.length = 0;
		}
	}
	if (cur.length)
		ans.push(cur);
	return ans;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
