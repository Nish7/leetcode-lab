#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

// Approach:
//  Given an array of intervals where intervals[i] = [starti, endi], merge all
//  overlapping intervals, and return an array of the non-overlapping intervals
//  that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Approach:
// - have res vector
// - have two pointers
// - for each internval i:
//      - if the next interval j: j.start <= i.end:
//      - merge them. (i.start, max(j.end, i.end))
//      - keep looping j until end of arr. or j.start > i.end
// - second loop is going to start with the j

class Solution {
public:
  vector<vector<int>> mergeInterval(vector<vector<int>> intervals) {
    vector<vector<int>> res;

    sort(intervals.begin(), intervals.end(),
         [](vector<int> &a, vector<int> &b) { return a[0] < b[0]; });

    for (int i = 0; i < intervals.size(); i++) {
      auto a = intervals[i];
      auto start = a[0];
      auto end = a[1];
      for (int j = i + 1; j < intervals.size(); j++) {
        auto b = intervals[j];
        if (b[0] <= end) {
          end = max(b[1], end);
          i = j;
        } else {
          break;
        }
      }

      res.push_back({start, end});
    }

    return res;
  }
};

int main() {
  vector<vector<int>> intervala = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
  vector<vector<int>> intervalb = {{1, 4}, {4, 5}};
  vector<vector<int>> intervalc = {{4, 7}, {1, 4}};
  Solution sol;
  auto a = sol.mergeInterval(intervalc);
  for (auto v : a) {
    cout << "[ ";
    for (auto b : v) {
      cout << b << " ";
    }
    cout << "]";
  }
}
