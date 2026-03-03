#include <algorithm>
#include <iostream>
#include <vector>

class Solution {
public:
  std::vector<std::vector<int>> solve(std::vector<std::vector<int>> vec,
                                      std::vector<int> newInterval) {
    // Approach: insert the new interval based on the sorting order
    // then merge the intervals based on the prev_end and start_i

    // how do we splice it between the element?
    // --> go through each element and keep pushing if we find a start i
    //     which is greater newInterval start
    //     we push the newInterval one first nd then remaining one nd keep
    //     continue
    //
    const auto ns = newInterval[0];
    const auto ne = newInterval[1];

    std::vector<std::vector<int>> r;
    for (const auto e : vec) {
      const auto s = e[0];
      const auto end = e[1];
      if (s >= ns)
        r.push_back(newInterval);
      r.push_back(e);
    } // O(n)

    // merge the intervals;
    // 
    std::vector<std::vector<int>> res;
    res.push_back(r[0]);
    for(int i = 1; i < r.size(); i++){
        if (r[i][0] <= res.back()[1]){
            res.back()[1] = std::max(r[i][1], res.back()[1]);
        } else {
            res.push_back(r[i]);
        }
    }

    return res;
  }

  void print(std::vector<std::vector<int>> aoutp) {
    for (auto e : aoutp) {
      for (auto b : e) {
        std::cout << b << " ";
      }
      std::cout << "\n";
    }
  };
};

  int main() {
    Solution sol;
    // std::vector<std::vector<int>> a_i = {{1, 3}, {6, 9}};
    // auto newIn = {2, 5};
    // {{1, 5}, {6, 9}}
     
    
    std::vector<std::vector<int>> a_i = {{1,2}, {3,5},{6,7},{8,10},{12,16}};
    auto newIn = {4, 8};

    auto aoutp = sol.solve(a_i, newIn);
    sol.print(aoutp);

    return 0;
  }
