function mergeAlternately(word1: string, word2: string): string {
	const charsToIterate = Math.max(word1.length, word2.length);

	let res: string = '';

	// word1 = 'abc'
	// word2 = 'abcd'

	for (let i = 0; i < charsToIterate; i++) {
		if (i < word1.length) res += word1[i];
		if (i < word2.length) res += word2[i];
	}

	return res;
}
