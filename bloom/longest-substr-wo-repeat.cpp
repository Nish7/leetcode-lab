// i = 1 j = 3
// s = "pwwkew"
// [a,b,c]
#include <iostream>
#include <set>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  int lengthOfLongestSubstring(string s) {
    int i = 0;
    int j = 1;

    while (j <= s.size()) {
      set<char> chr;
      for (int x = i; x < j; x++) {
        chr.insert(s[x]);
      }

      if (j - i != chr.size()) {
        i++;
        j++;
        continue;
      }

      j++;
    }

    return j - i - 1;
  }

  // pwwkew
  // [w]
  // i = 1 j = 2 maxlen = 1
  int lengthOfLongestSubstringB(string s) {
    int i = 0;
    int j = 0;
    int maxlen = 0;
    set<char> chr;

    while (j < s.size()) {
      while (chr.contains(s[j])) { 
        chr.erase(s[i]);
        i++;
      }
      chr.insert(s[j]);
      maxlen = max(maxlen, j - i + 1);
      j++;
    }

    return maxlen;
  }
};

class SolutionB {
public:
  int lengthOfLongestSubstring(string s) {
    int n = s.length();
    vector<bool> vis(128, false);
    if (n == 0)
      return 0;
    int i = 0, j = 0;
    int ans = 0;
    while (j < n) {
      while (vis[s[j]]) {
        vis[s[i]] = false;
        i++;
      }
      vis[s[j]] = true;
      ans = max(ans, j - i + 1);
      j++;
    }
    return ans;
  }
};

int main() {
  Solution sol;
  cout << sol.lengthOfLongestSubstringB("abcabcbb") << endl;
  cout << sol.lengthOfLongestSubstringB("bbbbb") << endl;
  cout << sol.lengthOfLongestSubstringB("pwwkew") << endl;
}
