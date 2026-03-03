#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
  string removeDuplicates(string s, int k) {
    // this is not wrong but awefully slow.
    // i am assumign n^2 since , in the worst case: traversing the atleast more
    // than once.
    string last;
    string curr = s;

    do {
      last = curr;
      curr = removeDuplicatesB(last, k);
    } while (curr != last);

    return last;
  }

  string removeDuplicatesB(string &s, int &k) {
    string res = "";
    vector<char> stack;
    int i = 1;
    stack.push_back(s[0]);

    while (i < s.size()) {
      if (!stack.empty() && s[i] != stack.back()) {
        while (!stack.empty()) {
          res += stack.back();
          stack.pop_back();
        }
      }

      stack.push_back(s[i]);
      if (stack.size() == k) {
        stack.clear();
      }
      i++;
    }

    while (!stack.empty()) {
      res += stack.back();
      stack.pop_back();
    }

    return res;
  }

  string removeDuplicatesCorrect(string s, int k) {
    vector<pair<char, int>> st; // (char, count)

    for (char c : s) {
      if (!st.empty() && st.back().first == c) {
        st.back().second++;
        if (st.back().second == k)
          st.pop_back();
      } else {
        st.push_back({c, 1});
      }
    }

    string res = "";
    for (auto p : st) {
      for (int i = 0; i < p.second; i++) {
        res += p.first;
      }
    }
    
    return res;
  }
};

int main() {
  Solution sol;
  cout << sol.removeDuplicatesCorrect("deeedbbcccbdaa", 3) << endl;
}
