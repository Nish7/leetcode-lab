function gcdOfStrings(str1: string, str2: string): string {
	let res: string = '';

	if (str1 + str2 !== str2 + str1) return '';

	for (let i = 0; i < gcdOfNumber(str1.length, str2.length); i++) {
		res += str1[i];
	}

	return res;
}

function gcdOfNumber(n1: number, n2: number): number {
	let gcd = 1;

	for (let i = 2; i <= Math.min(n1, n2); i++) {
		if (n1 % i == 0 && n2 % i == 0) gcd = i;
	}

	return gcd;
}

// time complexity: O(2n) => O(n)
// space complexity: O(1)

console.log(gcdOfNumber(6, 4));
