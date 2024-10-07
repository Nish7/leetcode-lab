type RemainderHash = {
  [key: number]: number
}

// function twoSums(nums: number[], target: number): number[] {
// 	// naive solution
// 	// [0,1,2,3,4] , target=4
// 	// for (let i = 0; i < nums.length - 1; i++) {
// 	// 	for (let j = i + 1; j < nums.length; j++) {
// 	// 		if (nums[i] + nums[j] == target) {
// 	// 			return [i, j];
// 	// 		}
// 	// 	}
// 	// }

// 	// otimised solution is using a hash
// 	const map: RemainderHash = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const n = nums[i];

// 		if (map.hasOwnProperty(n)) {
// 			return [i, n];
// 		}

// 		map[target - n] = i;
// 	}

// 	return [];
// }

// Example: [2,3,4,3,2]  , target = 6

function twoSums(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const remainderNeeded = target - nums[i]

    if (remainderNeeded in map) {
      // can also use hasOwnProperty() which is lil bit faster
      return [map[remainderNeeded], i]
    }

    map[nums[i]] = i
  }

  throw Error('not found')
}
