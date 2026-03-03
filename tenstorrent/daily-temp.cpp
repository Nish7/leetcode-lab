#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  // Input: temperatures = [73,74,75,71,69,72,76,73]
  // Output: [1,1,4,2,1,1,0,0]

  // Approach:  read each ele in the temp; maintain a stack (monotonic);
  // [73] > ; for each element in the stack check with the curr index (74) ;
  // if 74 > 73 we pop the value till either of end of list
  // if [75] !> 74;  we stop.
  // we always push the value at the back
  // how do we represent the value in stack. vector<pair<int, int>> // value,
  // idx. also maintain a len(temperature) static list. so everytime we pop a
  // value we check the difference between the indx and put that vluae in the
  // pop-iing value note: start with 1th index of the temp
  vector<int> dailyTemperatures(vector<int> &temperatures) {
    vector<int> res(
        temperatures.size(),
        0); // 1st parameters is the length and 2nd is the intiializer value
    vector<pair<int, int>> stack;

    for (auto i = 0; i < temperatures.size(); i++) {
      auto t = temperatures[i];
      for (int j = stack.size() - 1; j >= 0; j--) {
        auto [v, idx] = stack[j];
        if (t > v) {
          res[idx] = i - idx;
          stack.pop_back();
        } else {
          break;
        }
      }

      stack.push_back({t, i});
    }

    return res;
  }
};

// Leanring: make sure to use auto responsible with size it mgiht coerece with usize. we want signed 

int main() {
  Solution sol;
  vector<int> a{73, 74, 75, 71, 69, 72, 76, 73};
  for (auto e : sol.dailyTemperatures(a))
    cout << e << " ";
}
