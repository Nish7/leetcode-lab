// there was so approach rather just following the alogirthm, which basically kept a pointer to the lastChar and its counter
// and consdier adding conditional for edge cases

function compress(chars: string[]): number {
	let lastChar = chars[0];
	let counter = 1;

	let s = '';

	if (chars.length == 1) return 1;

	for (let i = 1; i < chars.length; i++) {
		// same char
		if (lastChar == chars[i]) {
			counter++;
			if (i !== chars.length - 1) continue;
		}

		// different char
		s += `${lastChar}${counter == 1 ? '' : counter}`;

		if (i == chars.length - 1 && lastChar !== chars[i]) {
			s += chars[i];
			break;
		}

		lastChar = chars[i];
		counter = 1;
	}

	// change the char
	for (let i = 0; i < s.length; i++) {
		chars[i] = s[i];
	}

	// answer to the question why we cant simply do this:
	// chars = s // which is basically re-assining the local variable in the "function" scope
	// in the javascript the variable is passed by value unless it is an `object`, which is passed by reference, but there is a caveat
	// you can replace the contents of the object but you can overwrite the refrence of the object itself
	// ref:https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference/13104500#13104500

	console.log(s);
	return s.length;
}

compress(['a', 'b', 'c']);
compress(['a']);
compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']);
