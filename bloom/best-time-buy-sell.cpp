#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  int maxProfit(vector<int> prices) {
    int minbuy = prices[0];
    int maxprofit = 0;

    // Approach: go thorugh each element
    // [7,1,5,3,6,4]
    // minbuy = 7 and maxp = 0;
    // -> keep calculating the maxp based on the minbuy
    // 1, maxp = 0
    // 5, maxp = 4
    // 3, maxp = 4
    // 6, maxp = 5
    // 4, maxp = 5
    // 2. [7,6,4,3,1]
    for (auto p : prices) {
      minbuy = min(minbuy, p);
      maxprofit = max(maxprofit, p - minbuy);
    }

    return maxprofit;
  }
};

int main() {
    Solution sol;
    cout << sol.maxProfit({7, 1, 5, 3, 6, 4 }) << endl;
    cout << sol.maxProfit({7, 6, 5, 4, 3, 1}) << endl;
}
