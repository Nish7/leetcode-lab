// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// 
// 

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
// 
// 
// Approach: keep a track of min buy when you are traversing the array
// keep track of max profit, 
// 
// 
#include "vector"
#include <algorithm>
#include <iostream>


class Solution {
    public:
    int solve(std::vector<int> nums){
       int min_b = INT_MAX;
       int max_profit = 0;
       
       for (int x: nums){
           min_b = std::min(min_b, x);
           max_profit = std::max(max_profit, x - min_b);
       }
       
       
       return max_profit;
    };
};

int main(){
    Solution s;
    int a = s.solve({7,6,4,3,1});
    std::cout << "" << a << std::endl;
    return 0;
}
