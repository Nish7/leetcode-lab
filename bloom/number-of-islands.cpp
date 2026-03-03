#include <iostream>
#include <set>
#include <vector>
using namespace std;

class Solution {
public:
// 1. visited is unecessary; can use value of 0 in the grid to mark it as 'visisted' implicitly to avoid checking it again
// 2. need to pass grid as pointer/reference to improve speed
  vector<vector<char>> grid;
  set<pair<int, int>> visited;
  int rows;
  int cols;

  int dfs(int i, int j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || visited.count({i, j}) ||
        this->grid[i][j] == '0') {
      return 0;
    }

    visited.insert({i, j});
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i, j + 1);

    return 1;
  }

  int numIslands(vector<vector<char>> &grid) {
    this->grid = grid;
    this->rows = grid.size();
    this->cols = grid[0].size();
    int count = 0;

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (grid[i][j] == '1' && !this->visited.count({i, j})) {
          count += dfs(i, j);
        }
      }
    }

    return count;
  }
};

int main() {
  Solution sol;
  vector<vector<char>> arr = {{'1', '1', '1', '1', '0'},
                              {'1', '1', '0', '1', '0'},
                              {'1', '1', '0', '0', '0'},
                              {'0', '0', '0', '0', '0'}};
  cout << sol.numIslands(arr);
}
