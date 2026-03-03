#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  bool isValid(string s) {
    vector<char> stack;

    for (int i = 0; i < s.size(); i++) {
      switch (s[i]) {
      case '(': {
        stack.push_back(')');
        continue;
      }
      case '{': {
        stack.push_back('}');
        continue;
      }
      case '[': {
        stack.push_back(']');
        continue;
      }
      }

      if (stack.empty())
        return false;

      if (stack.back() != s[i])
        return false;

      stack.pop_back();
    }

    if (!stack.empty())
      return false;

    return true;
  }
};

int main() {
  Solution sol;
  cout << sol.isValid("()") << endl;
  cout << sol.isValid("({{)") << endl;
}
