// 6. Anagram Detection:
// Write a function that checks if two words are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another.


function checkAnagram(str1 = '', str2 = '') {

	if (str1.length != str2.length)
		return false;

	str1 = str1.toLocaleUpperCase();
	str2 = str2.toLocaleUpperCase();

	const frquencyArray = new Array(26);
	for (let char of str1) {
		const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
		if (!frquencyArray[index])
			frquencyArray[index] = 0;
		frquencyArray[index]++;
	}

	for (let char of str2) {
		const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
		if (!frquencyArray[index] || frquencyArray[index] < 1)
			return false;
		frquencyArray[index] --;
	}

	return true;

}

console.log(checkAnagram('again', 'GAINAa'))
