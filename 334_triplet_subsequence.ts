function increasingTriplet(nums: number[]): boolean {
	for (let i = 0; i < nums.length - 2; i++) {
		console.log(i);
		if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) return true;
	}

	return false;
}

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));

// [20,100,10,12,5,13]

// solution:

// Approach:
// Basically approach is to keep track of two minimum numbers
// if the ith num is lower than both, thus basically it we found the triplet
// we init the min by the infinity
function solution_increasingTriplet(nums: number[]): boolean {
	if (nums.length < 3) return false;

	let firstMin: number = Infinity;
	let secondMin: number = Infinity;

	for (let num of nums) {
		if (num <= firstMin) {
			firstMin = num;
		} else if (num <= secondMin) {
			secondMin = num;
		} else {
			return true;
		}
	}

	return false;
}

solution_increasingTriplet([20, 100, 10, 12, 5, 13]);
