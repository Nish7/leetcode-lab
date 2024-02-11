// My Approach: to create a occurences map, and then sort the map according to the values and then grab the keys

function topKFrequent(nums: number[], k: number): number[] {
	const map = new Map<number, number>();

	// Occurence Map creation
	for (const num of nums) {
		const numInMap = map.get(num);

		if (numInMap !== undefined) {
			map.set(num, numInMap + 1);
			continue;
		}

		map.set(num, 1);
	}

	const res: number[] = [];

	// sorting the occurence hash map
	const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]); // n log n

	for (let i = 0; i < k; i++) {
		res.push(sortedMap[i][0]);
	}

	return res;

	// time complexity: O(n log k)
	// extra space complexity: O(n)
}

topKFrequent([1, 1, 1, 2, 2, 3], 2);
