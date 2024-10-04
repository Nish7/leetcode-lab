// Approach:
//

function isSubsequence(s: string, t: string): boolean {
	let minPointer = -1;

	for (let s_pointer = 0; s_pointer < s.length; s_pointer++) {
		const idx = t.indexOf(s[s_pointer], minPointer + 1);

		if (idx == -1) return false;
		if (idx < minPointer) return false;

		minPointer = idx;
	}

	return true;
}

isSubsequence('aaaaaa', 'bbaaaa');

// abc , aasadsbasc
