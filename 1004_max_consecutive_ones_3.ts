// Approach: Best problem: kinda hard to explain the approach , but in a sense, start with two pointer, left and right and keeps increase the window, until you are out of 0s. then, then keep sliding the window, in a fixed size. until you reach the end and remaining
function longestOnes(nums: number[], k: number): number {
	let leftPointer = 0;
	let rightPointer = 0;
	let kLeft = k;

	while (rightPointer < nums.length) {
		if (nums[rightPointer] == 0) {
			kLeft--;
		}

		if (kLeft < 0) {
			if (nums[leftPointer] == 0) {
				kLeft++;
			}

			leftPointer++;
			rightPointer++;
			continue;
		}

		rightPointer++;
	}

	return rightPointer - leftPointer;
}

//                          l              r
//longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
