// Approach: use two pointer, one in left and one in right, and move the pointer in either direction which has the smaller, why idk!! ,
// and keep running the max of the area
function maxArea(height: number[]): number {
	let leftPointer = 0;
	let rightPointer = height.length - 1;
	let area = 0;

	while (leftPointer < rightPointer) {
		const width = rightPointer - leftPointer;

		let h: number;
		if (height[leftPointer] > height[rightPointer]) {
			h = height[rightPointer];
			rightPointer--;
		} else if (height[rightPointer] > height[leftPointer]) {
			h = height[leftPointer];
			leftPointer++;
		} else {
			h = height[rightPointer];
			rightPointer--;
		}

		area = Math.max(area, h * width);
	}

	return area;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
