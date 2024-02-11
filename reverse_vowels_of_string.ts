function reverseVowels(s: string): string {
	const map = new Map<number, string>();

	for (let i = 0; i < s.length; i++) {
		const ch = s[i];

		if ('aeiou'.includes(ch.toLowerCase())) {
			map.set(i, ch);
		}
	}

	const keys = [...map.keys()];
	const vals = [...map.values()].reverse();
	let res = [...s];

	for (let i = 0; i < vals.length; i++) {
		res[keys[i]] = vals[i];
	}

	return res.join('');
}

console.log(reverseVowels('hello'));

// time complextity: O(n)
// space complextity: O(n)
