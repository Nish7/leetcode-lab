// Strategy: for each ith point, find the max left and max right. then take the min of them both. and subtract the height at that point.
// Approach: keep a track of the both max left and max right
// keep subtractinbg for each moving ith value
function trap(height: number[]): number {
  let maxLeft = 0;
  let maxLeftA = [];
  let maxRight = 0;
  let maxRightA = [];

  // max left
  for (let i = 0; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    maxLeftA.push(maxLeft);
  }

  // max right
  for (let i = height.length - 1; i >= 0; i--) {
    maxRight = Math.max(maxRight, height[i]);
    maxRightA[i] = maxRight;
  }

  // final value
  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const v = height[i];
    water += Math.min(maxLeftA[i], maxRightA[i]) - v;
  }

  return water;
}

trap([2, 1, 0, 1, 3, 2]); // expected: 4
