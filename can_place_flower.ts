function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let flowersLeft = n;
	let adjacentLeft = false;

	for (let i = 0; i < flowerbed.length; i++) {
		if (flowersLeft == 0) break;

		if (flowerbed[i] == 1) {
			adjacentLeft = true;
			continue;
		}

		const adjacentRight =
			flowerbed.length == i - 1 ? false : flowerbed[i + 1] === 1 ? true : false;

		if (!adjacentLeft && !adjacentRight) {
			flowersLeft -= 1;
			adjacentLeft = true;
		} else {
			adjacentLeft = false;
		}
	}

	return flowersLeft == 0;
}

// time complexity: O(n)
// space complexity: O(1)

// [1,0,0,0,1] , n =1
