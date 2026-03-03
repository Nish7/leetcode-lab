#include <queue>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> topKFrequent(vector<int> &nums, int k) {
    // create counter
    // {1: 3, 2:2, 3:1 }
    // sort the counter based on the valeu
    // iterate k times and get the result
    //
    // complexity: n log n
    //
    // max-heap approach:
    // binary tree with order nodes
    //      [1, 2]
    /// [2, 1]  [3, 1]
    /// create a counter and then push the value to the pq
    /// pop them k times and n log
    ///
    unordered_map<int, int> freq;
    for (auto k : nums)
      freq[k]++;

    priority_queue<pair<int, int>> pq;
    // quick note: max-heap by default
    // which means, A < B. is true. B has higher priority
    // A < B i.e less<pair<int, int>>
    // so A which lesser value goes after B
    // in opposite: A > B is true. which means A is greater value, so it follows
    // after B. thus A is higher priortity from heap perspective.
    for (auto k : freq) {
      pq.push({k.second, k.first});
    }

    vector<int> res;
    for (int i = 0; i < k; i++) {
      auto value = pq.top();
      pq.pop();
      res.push_back(value.second);
    }

    return res;
  }
};
