#include <algorithm>
#include <climits>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  string longestCommonPrefix(vector<string> str) {
    string commonPrefix = "";

    // ["fl", "flower", "flight"]
    // keep adding the character till they are same by index
    int m = INT_MAX;
    for (string s : str) {
      int sz = s.size();
      m = min(m, sz);
    }

    for (int i = 0; i < m; i++) {
      bool allsame = true;
      char ch = str[0][i];
      // for each string s -> the index chr is same for each string;
      for (auto s : str) {
        if (ch != s[i]) {
          allsame = false;
          break;
        }
      }

      if (allsame) {
        commonPrefix += str[0][i];
      } else {
        break;
      }
    }

    return commonPrefix;
  }
};

int main() {
  Solution sol;
  cout << sol.longestCommonPrefix({"flower", "flow", "flight"}) << endl;
}
