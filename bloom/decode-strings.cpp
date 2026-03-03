// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// > Idea: is to use "[" and "]".
// > nstack = [2]
// > sstack = [bc]
// > 3 * a
// > 3 * a + 2 * bc

// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// > nested structure: we need to use "stack"
// > nstack = [3]
// > sstack = [acc]
// > accaccacc
//
//
// Input: s = "3[a2[3[g]c]]"
// nstack = [3]
// sstack = ["agggcgggc"]
// s = []

// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
// > nstack = []
// > sstack = [ef]
// > s = abcabc + cdcdcd + e + f

#include <cctype>
#include <string>
using namespace std;

class Solution {
public:
  string decodeString(string s) { return decode(s, 0); };

  string repeat(string s, int num) {
    string res = "";
    for (int i = 0; i < num; i++)
      res += s;
    return res;
  };

  string decode(string &s, int i) {
    string st = "";
    string n = "";
    while (i < s.size()) {
      auto ch = s[i];
      i++;
      if (ch == '[') {
        st += decode(s, i);
      } else if (ch == ']') {
        return repeat(st, stoi(n));
      } else if (isdigit(ch)) {
        n += ch;
      } else {
        st += ch;
      }
    }
    return st;
  }
};
