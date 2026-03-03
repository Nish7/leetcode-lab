#include <iostream>
#include <string>
using namespace std;

/*Input: s = "babad"*/
/*Output: "bab"*/
/*Explanation: "aba" is also a valid answer.*/

// i j
// babad
// use the pointer i and j
// keep moving the pointer j to the left until the it matches with the first
// problem: how do we check each substring then
// abbd
// for each index i and we place j pointer in the end
//    if i and j are equal, check for palindrom
//    if another internal loop that x and y. sim loop to check for palindrom it
//    from i..j if it is max and return

// naive approach
// - look at the all the substring and verify if longest palindromic
// - for i in range(len(s)):
//      for j in range(i + 1, len(s)):
//
//  hint 1: How can we reuse a previously computed palindrome to compute a
//  larger palindrome?

/*If we use brute-force and check whether for every start and end position a
 * substring is a palindrome we have O(n^2) start - end pairs and O(n)
 * palindromic checks. Can we reduce the time for palindromic checks to O(1) by
 * reusing some previous computation.*/
// O(1) ??? "reusing some previous computation"??
//
// sliding window apporoach works here??
//
// keep i and j
//  i j
// abbd
//

class Solution {
public:
  string longestPalindrome(string s) {
    int maxp = 0;
    string res = "";
    for (int i = 0; i < s.size(); i++) {
      int left = i;
      int right = i;

      // odd length
      while (left >= 0 && right < s.size() && s[left] == s[right]) {
        if (right - left + 1 > maxp) {
          maxp = right - left + 1;
          res = s.substr(left, right - left + 1);
        }

        left -= 1;
        right += 1;
      }

      // even length; look at the "cbbd" example
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.size() && s[left] == s[right]) {
        if (right - left + 1 > maxp) {
          maxp = right - left + 1;
          res = s.substr(left, right - left + 1);
        }

        left -= 1;
        right += 1;
      }
    }

    return res;
  }
};

int main() {
  Solution sol;
  /*cout << sol.longestPalindrome("babad") << endl;*/
  cout << sol.longestPalindrome("cbbd") << endl;
  /*cout << sol.longestPalindrome("a") << endl;*/

  /*cout << sol.longestPalindrome("ccc") << endl;*/
  /*cout << sol.longestPalindrome("abcdbbfcba") << endl;*/
}
