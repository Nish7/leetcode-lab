#include <queue>
using namespace std;
#include <vector>

class Solution {
public:
  int orangesRotting(std::vector<std::vector<int>> &grid) {
    const int rows = grid.size();
    const int cols = grid[0].size();
    int fresh_oranges = 0;
    queue<std::pair<int, int>> q;

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (grid[i][j] == 2)
          q.push({i, j});
        if (grid[i][j] == 1)
          fresh_oranges++;
      }
    }

    if (!fresh_oranges)
      return 0;

    int time = -1;
    while (!q.empty()) {
      int n = q.size();
      for (int x = 0; x < n; x++) {
        auto [i, j] = q.front();
        q.pop();

        traverse(i - 1, j, grid, fresh_oranges, q);
        traverse(i + 1, j, grid, fresh_oranges, q);
        traverse(i, j - 1, grid, fresh_oranges, q);
        traverse(i, j + 1, grid, fresh_oranges, q);
      }

      time++;
    }

    if (fresh_oranges > 0)
      return -1;
    return time;
  }

  void traverse(int i, int j, std::vector<std::vector<int>> &grid, int &fresh,
                std::queue<std::pair<int, int>> &queue) {
    if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size())
      return;
    if (grid[i][j] != 1)
      return; // if not fresh

    grid[i][j] = 2;
    fresh--;
    queue.push({i, j});
  }
};
