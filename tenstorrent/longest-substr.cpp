// Given a string s, find the length of the longest without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// 
// 
// 
#include <string> 
#include <iostream>
#include <set> 
class Solution {
    public: 
    int solve(std::string s){
        int i = 0;
        int j = 1;
        
        while (j <= s.size()) {
             int len = j - i;
             std::set<char> set;
             for (int x = i; x < j; x++) set.insert(s[x]);
             if (set.size() != len) {
                i++;
                j++;
                continue;
             }
             
             j++;
        };
        
        return j - i - 1;
    }
};


int main(){
   Solution sol;
   int a = sol.solve("abcabcbb");
   int b = sol.solve("bbbbb");
   int c = sol.solve("pwwkew");
   std::cout << a << " " << b << " " << c << std::endl;
   return 0;
}
