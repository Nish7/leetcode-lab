function romanToInt(s: string): number {
	// roman to int
	// so the input is the roman numeral and the output is going to be the number representing that roman

	// I             1
	// V             5
	// X             10
	// L             50
	// C             100
	// D             500
	// M             1000

	// I will be using a map of convertion between the roman and int
	// then i will be using reverse count to subtract and if it equals the value from the roman_int_map then
	// i will append the value

	const roman_int_map: Record<string, number> = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	};

	let int_s = 0;

	for (let i = 0; i < s.length; i++) {
		const val = roman_int_map[s[i]];
		const next_val = roman_int_map[s[i + 1]];

		if (val < next_val) {
			int_s -= val;
		} else {
			int_s += val;
		}
	}

	return int_s;
}

console.log(romanToInt('VIII')); // This is subtraction cases
console.log(romanToInt('VII')); // This is addition cases
