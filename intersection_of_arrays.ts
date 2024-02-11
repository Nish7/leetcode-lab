function intersection(nums1: number[], nums2: number[]): number[] {
	const n1 = new Set(nums1);
	const n2 = new Set(nums2);

	const res = [];

	for (const k of n1) {
		if (n2.has(k)) {
			res.push(k);
		}
	}

	console.log(res);
	return res;
}
