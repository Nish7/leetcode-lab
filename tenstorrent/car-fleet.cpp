// There are n cars at given miles away from the starting mile 0, traveling to
// reach the mile target. You are given two integer arrays position and speed,
// both of length n, where position[i] is the starting mile of the ith car and
// speed[i] is the speed of the ith car in miles per hour. A car cannot pass
// another car, but it can catch up and then travel next to it at the speed of
// the slower car. A car fleet is a single car or a group of cars driving next
// to each other. The speed of the car fleet is the minimum speed of any car in
// the fleet. If a car catches up to a car fleet at the mile target, it will
// still be considered as part of the car fleet. Return the number of car fleets
// that will arrive at the destination.

// Example 1:
// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// 1
//
// t = [12, 12, 1, 6, 6]
//
// [1, 12, 12]
//
// [1, 6, 6]
//
// [2/2, 4/4, 12/1, 8/1, 9/3] =
// [1, 1, 12, 8, 3] = [1, 1, 12]
//
// 1, 1, 12, 14, 3= 4
//
// keep pushing elements till they are in monotoinic stack;
//
// position = [0,2,4], speed = [4,2,1]
// target = 12
//
// [12/4, 10/2, 8/1] = [3, 5, 8] = out =
//
//[]
//
// Approach:
// pop all the if they are monotonic and keep counting; if there are items in
// the count as one

#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  int carFleet(int target, vector<int> &position, vector<int> &speed) {
    vector<pair<int, int>> values;
    for (int i = 0; i < position.size(); i++)
      values.push_back({position[i], speed[i]});

    sort(
        values.begin(), values.end(),
        [](pair<int, int> &a, pair<int, int> &b) { return a.first > b.first; });
    
    vector<int> stack;
    for (int i = 0; i < values.size(); i++) {
      auto disp = target - values[i].first;
      auto s = values[i].second;
      auto t = disp / s;
      if (stack.size() == 0 || stack.back() < t) { 
      stack.push_back(t);
    }
  }

  return stack.size();
}
}
;

int main() {
  Solution sol;
  vector<int> p1{0, 2, 4};
  vector<int> s1{4, 2, 1};

  cout << sol.carFleet(100, p1, s1) << endl;
}
