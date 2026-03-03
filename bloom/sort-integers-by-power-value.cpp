#include <algorithm>
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  int getKth(int lo, int hi, int k) {
    vector<pair<int, int>> powers;
    for (int i = lo; i <= hi; i++) {
      powers.push_back({getPowerValue(i), i});
    }

    sort(powers.begin(), powers.end(),
         [](pair<int, int> &a, pair<int, int> &b) {
           if (a.first != b.first) { // primary sorting
             return a.first < b.first;
           }
           return a.second < b.second; // secondary sorting
         });

    return powers[k - 1].second;
  }

  unordered_map<int, int> memo;

  int getPowerValue(int x) {
    if (x == 1)
      return 0;
    if (memo.count(x))
      return memo[x];
    if (x % 2 == 0)
      return memo[x] = getPowerValue(x / 2) +
                       1; // assignment resolve to the valeu assigned.
                          // pro tip: .. compiler understanding.
    else {
      return memo[x] = getPowerValue(3 * x + 1) + 1;
    }
  }
};

int main() {
  Solution sol;
  cout << sol.getKth(7, 11, 4) << endl;
}
