function maxVowels(s: string, k: number): number {
	// first iteration
	let vowelCount = 0;
	const vowels = 'aeiou';

	for (let i = 0; i < k; i++) {
		if (vowels.includes(s[i])) vowelCount++;
	}

	let max = vowelCount;
	let leftPointer = 1;

	for (let rightPointer = k; rightPointer < s.length; rightPointer++) {
		if (vowels.includes(s[leftPointer - 1])) vowelCount--;
		if (vowels.includes(s[rightPointer])) vowelCount++;

		max = Math.max(vowelCount, max);

		leftPointer++;
	}

	return max;
}
