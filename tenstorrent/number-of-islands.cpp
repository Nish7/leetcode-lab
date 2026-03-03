#include <vector>
#include <set>

class Solution {
public:
    int numIslands(std::vector<std::vector<char>>& grid){
        const int rows = grid.size();
        const int cols = grid[0].size();
        int count = 0;
        std::set<std::pair<int, int>> visited;
        
        for (int i = 0; i < rows; i++){
            for (int j = 0; j < cols; j++){
                if (grid[i][j] == '1' && !visited.count({i, j})) {
                    dfs(i, j, grid, visited);
                    count++;
                }
            }
        }
        
        return count; 
    }
    
    void dfs(int i, int j, std::vector<std::vector<char>>& grid, std::set<std::pair<int, int>>& visisted) {
        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size()) return;
        if (visisted.count({i, j})) return;
        if (grid[i][j] == '0') return;
        
        visisted.insert({i, j });
        
        dfs(i - 1, j, grid, visisted);
        dfs(i + 1, j, grid, visisted);
        dfs(i, j - 1, grid, visisted);
        dfs(i, j + 1, grid, visisted);
    }
};
