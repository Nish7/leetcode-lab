#include <iostream>
#include <queue>
#include <vector>
using namespace std;

struct Qitem {
  int x;
  int y;
  int dist;
};

class Solution {
public:
  int shortestPathBinaryMatrix(vector<vector<int>> &grid) {
    queue<Qitem> q;
    const vector<pair<int, int>> dirs = {{1, 0}, {0, 1},   {-1, 0}, {0, -1},
                                         {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};

    if (grid[0][0] == 1 || grid[grid.size() - 1][grid[0].size() - 1])
      return -1;

    q.push({0, 0, 1});
    grid[0][0] = -1;

    while (!q.empty()) {
      const auto qv = q.front();
      const int i = qv.x;
      const int j = qv.y;
      const int dist = qv.dist;
      q.pop();

      if (i == grid.size() - 1 && j == grid[0].size() - 1)
        return dist;

      for (auto d : dirs) {
        const auto [di, dy] = d;
        int nx = i + di;
        int ny = j + dy;
        if (nx < 0 || nx >= grid.size() || ny < 0 || ny >= grid[0].size() ||
            grid[nx][ny] != 0)
          continue;

        grid[nx][ny] = -1;
        q.push({nx, ny, dist + 1});
      }
    }

    return -1;
  }
};

int main() {
  vector<vector<int>> grid = {{0, 0, 0}, {1, 1, 0}, {1, 1, 0}};
  vector<vector<int>> gridB = {{0, 1}, {1, 0}};
  Solution sol;
  cout << sol.shortestPathBinaryMatrix(gridB);
}
