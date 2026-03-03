#include "iostream"
#include "vector"
#include <unordered_map>

// Given an integer array nums and an integer k, return the k most frequent
// elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Example 3:
// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]
// 
// 


class Solution {
public:
  std::vector<int> solve(std::vector<int> nums, int k) {
    // create freq map
    //
    std::unordered_map<int, int> freq_map;
    for (int x : nums)
      freq_map[x]++;
    //
    // sort the freq map by the occurences
    std::vector<std::pair<int, int>> v(freq_map.begin(), freq_map.end());
    sort(v.begin(), v.end(),
         [](auto &a, auto &b) { return a.second > b.second; });
    //
    // get the top k
    std::vector<int> res;
    for (int i = 0; i < k && i < v.size(); i++) {
      res.push_back(v[i].first);
    }

    return res;
  }
  
};

int main() {
  Solution s;
  auto a = s.solve({1, 2, 3, 3, 4, 1}, 3);
  for (int x : a) {
    std::cout << x << " ";
  }
  std::cout << std::endl;
  return 0;
};
