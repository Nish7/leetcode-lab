function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
	const res: boolean[] = [];

	for (const candy of candies) {
		const happyKid = candy + extraCandies;
		const maxed = Math.max(happyKid, ...candies);

		if (happyKid == maxed) {
			res.push(true);
		} else {
			res.push(false);
		}
	}

	return res;
}

//time complexity: o(n)
// space complexity: O(n)
