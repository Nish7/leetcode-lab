function groupAnagrams(strs: string[]): string[][] {
	let map = new Map<string, string[]>();

	for (let word of strs) {
		const wordToCheck = word.split('').sort().join('');

		if (map.has(wordToCheck) && map.get(wordToCheck)) {
			map.get(wordToCheck)?.push(word);
		} else {
			map.set(wordToCheck, [word]);
		}
	}

	return [...map.values()];
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
