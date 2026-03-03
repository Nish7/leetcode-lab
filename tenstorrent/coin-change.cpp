#include <climits>
#include <vector>

class Solution {
public:
  int coinChange(std::vector<int> &coins, int amount) {
    std::vector<int> dp(amount + 1, -2);
    for (auto c : coins) {
      if (c > amount)
        continue;
      dp[c] = 1;
    }
    dp[0] = 0;

    return backtrack(amount, coins, dp);
  }

  int backtrack(int target, std::vector<int> &coins, std::vector<int> &dp) {
    if (target < 0)
      return -1;
    if (dp[target])
      return dp[target];

    int min_v = INT_MAX;
    for (auto c : coins) {
      auto v = backtrack(target - c, coins, dp);
      if (v > -1) {
        min_v = std::min(v + 1, min_v);
      }
    }

    dp[target] = min_v == INT_MAX ? -1 : min_v;
    return dp[target];
  }
};
