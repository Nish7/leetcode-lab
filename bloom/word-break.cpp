#include <iostream>
#include <string>
#include <vector>
using namespace std;

// leetcode
// [leet, code]
// for each starting point, is there any matching prefix
// if yes, where does it end, and continue recursively from there.
// i = 0
// look into "leet", "code" and then we found leet as matching prefix
// i = 4
// look into the another and i == strign size then return true.
// 
// 
// struggled with the dp approach:
// - mainly with `if` condition since it essentially backtracking
// - note: all backtracking with repeated same tree are essentially "dp" problem
// - note: struggling with converting from top-down to bottom-up
// 
// - case like "aaaaaaaab" with {a, aa, aaa} was clever "false" check
// - it will backtrack from the last a position. let say i = 19 and then everypossible combination until it i = 0, then for all consective root checks it will default to the dp check .
// - thus performance optimimal

class Solution {
public:
  bool wordBreak(string s, vector<string> &wordDict) {
    vector<int> dp(s.size(), -1); // -1, 1, 0
    wordPrefix(0, s, wordDict, dp);
    for (int i = 0; i < dp.size(); i++) cout << i << ": " << dp[i] << endl;
    return dp[0];
  }

  bool wordPrefix(int index, const string &s, const vector<string> &wordict,
                  vector<int> &dp) {
                      
    if (index == s.size()) return true;
    if (dp[index] != -1) return dp[index] == 1;

    for (const auto &w : wordict) {
      if (s.substr(index, w.size()) == w)
        if (wordPrefix(index + w.size(), s, wordict, dp)) {
          dp[index] = 1;
          return true;
        };
    }

    dp[index] = 0;
    return false;
  }
};

int main() {
  Solution sol;
  // vector<string> dict = {"apple", "pen"};
  // vector<string> dict = {"leet"};
  vector<string> dict = {"a", "aa", "aaa", "aaaa"};
  /*cout << sol.wordBreak("leetcode", dict);*/
  cout << sol.wordBreak("aaaaaaaaaaaaaaaaaaab", dict);
}
