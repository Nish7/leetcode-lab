// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
//
//
// [1, 3] = 4
// [2, 1] = 3
// [3] = 3
//
// max = 4
//
//               [0]
//            [1]  [0]
//          [3][1]
//          [4][2]

// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5
// (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
//
//              []
//        [2]       [7]
//     [9][3][1]   [3][1]
//     [1]
//     [12[5]][3]  [10][8]
//
//
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  int rob(vector<int> &nums) {
    vector<int> dp(nums.size(),-1);
    return backtrack(0, nums, dp);
  }

  int backtrack(int i, std::vector<int> &nums, vector<int> &dp) {
    if (i >= nums.size())
      return 0;
    if (dp[i] != -1)
      return dp[i];

    auto y = nums[i] + backtrack(i + 2, nums, dp); // given we have stole it
    auto n = backtrack(i + 1, nums, dp); // given we have NOT stole it
    return dp[i] = max(y, n);
  }
};

int main() {
  Solution sol;
  // cout << sol.solve({1, 2, 3, 1});
  // cout << sol.rob({2, 7, 9, 3, 1});
}
