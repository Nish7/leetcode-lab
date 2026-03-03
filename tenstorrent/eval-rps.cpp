#include <vector>
#include <iostream>
#include <string>
using namespace std;

// Approach:
// everytime we pop a operation we pop corresponding two operands
// use the operands using the operation and push it back back to the stack
// [2, 1] -> [3, 3 *] -> 9
class Solution {
public:
  int evalRPN(vector<string> &tokens) {
    vector<int> st;
    for (auto t : tokens) {
      if (t == "+") {
        auto a = st.back();
        st.pop_back();
        auto b = st.back();
        st.pop_back();
        auto r = a + b;
        st.push_back(r);
      } else if (t == "-") {
        auto a = st.back();
        st.pop_back();
        auto b = st.back();
        st.pop_back();
        auto r = b - a;
        st.push_back(r);
      } else if (t == "*") {
        auto a = st.back();
        st.pop_back();
        auto b = st.back();
        st.pop_back();
        auto r = a * b;
        st.push_back(r);
      } else if (t == "/") {
        auto a = st.back();
        st.pop_back();
        auto b = st.back();
        st.pop_back();
        auto r = b / a;
        st.push_back(r);
      } else {
        st.push_back(stoi(t));
      }
      
      for ( auto e : st) cout << e << "->";
      cout << "\n";
    }
    

    return st.back();
  }
};


int main(){
    Solution sol;
    // vector<string> a{"2", "1", "+", "3", "*"};
    // vector<string> b{"4","13","5","/","+"};
    vector<string> b{"3","11","5","+","-"};
    std::cout << sol.evalRPN(b) << "\n";
}
