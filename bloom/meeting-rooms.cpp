#include <algorithm>
#include <functional>
#include <queue>
#include <vector>
using namespace std;

class Interval {
public:
  int start, end;
  Interval(int start, int end) {
    this->start = start;
    this->end = end;
  }
};

// [[9,10],[4,9],[4,17]] Output:   3 Expected: 2
// issues we can put [4,9] and [9,10] in a room.
//
// min-heap solution:
//   i
// [1, 7] [2, 4] [3, 5] [7, 8]
// heap: [] = 2  + 1
//
// [[4,9],[4,17],[9,10]]
// heap: [17,10] = 1 + 1 = 2
// we always need to add since, that might carryon another chain
// [[3,4]]
// heap: [4] = 1
class Solution {
public:
  int minMeetingRooms(vector<Interval> &intervals) {
    sort(intervals.begin(), intervals.end(),
         [](Interval &a, Interval &b) { return a.start < b.start; });

    priority_queue<int, vector<int>, greater<int>> q;
    for (auto i : intervals) {
      if (!q.empty() && q.top() <= i.start) {
        q.pop();
      }
      q.push(i.end);
    }

    return q.size();
  };
};
