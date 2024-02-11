function isPalindrome(s: string): boolean {
	s = s.replaceAll(/[^A-Za-z0-9]/g, ''); // santization
	s = s.toLocaleLowerCase();

	let leftPointer = 0;
	let rightPointer = s.length - 1;

	while (leftPointer < rightPointer) {
		if (s[leftPointer] !== s[rightPointer]) return false;

		leftPointer++;
		rightPointer--;
	}

	console.log('true');
	return true;
}

isPalindrome('A man, a plan, a canal: Panama');
