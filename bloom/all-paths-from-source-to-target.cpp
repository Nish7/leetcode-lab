#include <vector>
using namespace std;

/*Input: graph = [[1,2],[3],[3],[]]*/
/*Output: [[0,1,3],[0,2,3]]*/
/*Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.*/

// adj list:
// 0: 1,2
// 1: 3
// 2: 3
// 3: []
//
// there are two ways to process this: dfs or bfs
// 1. dfs:
//  - for each nbr: process with the path. if we reach the end.
//  - no more nbr to explore finish or we reach the index of n-1
//  trace:
// - 0, []
//   - 1, [0]
//     - 3 [0,1]
//       -- return [0,1,3]
//   - 2, [0]
//      - 3 [0,2]
//        -- return [0,2,3]
class Solution {
public:
  void dfs(int index, vector<int> &path, vector<vector<int>> &allpaths,
           vector<vector<int>> &graph) {
    if (index == graph.size() - 1) {
      path.push_back(index);
      allpaths.push_back(path);
      path.pop_back();
      return;
    }

    path.push_back(index);
    for (auto nbr : graph[index]) {
      dfs(nbr, path, allpaths, graph);
    }
    path.pop_back();
  };

  vector<vector<int>> allPathsSourceTarget(vector<vector<int>> &graph) {
    vector<int> path;
    vector<vector<int>> allpaths;
    dfs(0, path, allpaths, graph);
    return allpaths;
  }
};
