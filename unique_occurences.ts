function uniqueOccurrences(arr: number[]): boolean {
	// create an occurence map
	let map: Map<number, number> = new Map();

	for (let n of arr) {
		const mapVal = map.get(n);
		if (mapVal !== undefined) {
			map.set(n, mapVal + 1);
			continue;
		}

		map.set(n, 1);
	}

	return map.size == new Set(map.values()).size;
}

// function uniqueOccurrences(arr: number[]): boolean {
// 	let map: Map<number, number> = new Map();

// 	for (let n of arr) map.set(n, map.get(n) + 1 || 1);

// 	return map.size == new Set(map.values()).size;
// }
