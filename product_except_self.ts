// Approach:
// calculate the the product before the ith num
// calculate the the product after the ith num
// mulitple the products before and after to get the the solutio
function productExceptSelf(nums: number[]): number[] {
	const preProduct: number[] = [1];
	const postProduct: number[] = [];
	const res: number[] = [];

	// this is for preProduct
	for (let i = 1; i < nums.length; i++) {
		preProduct[i] = preProduct[i - 1] * nums[i - 1];
	}

	//this is for postProduct
	for (let i = nums.length - 1; i >= 0; i--) {
		if (i == nums.length - 1) {
			postProduct[i] = 1;
			continue;
		}

		postProduct[i] = postProduct[i + 1] * nums[i + 1];
	}

	// multiple pre and postProduct
	for (let i = 0; i < preProduct.length; i++) {
		res[i] = preProduct[i] * postProduct[i];
	}

	return res;
	// time complexity: O(3n) --> O(n
	//space compexity: O(n)
}

// the solution must (n)

// preprodcut: [1, 1, 2, 6]
// postProduct: [24,12,4,1]
console.log(productExceptSelf([1, 2, 3, 4]));

// someone elses anser:

// function NOTMINE_productExceptSelf(nums: number[]): number[] {
// 	const answer: number[] = [1];
// 	const len = nums.length;

// 	// Each element of the answer is set to the product of everything to its left (by keeping a running count)
// 	for (let i = 1; i < len; i++) {
// 		answer.push(answer[i - 1] * nums[i - 1]);
// 	}

// 	let current = 1;

// 	// For each element, we multiply it by everything to its right (by keeping a running count)
// 	for (let i = len - 1; i >= 0; i--) {
// 		answer[i] = answer[i] * current;
// 		current = current * nums[i];
// 	}

// 	// The answer now contains, in answer[i], the product of everything left of i and everything right of i
// 	return answer;
// }
