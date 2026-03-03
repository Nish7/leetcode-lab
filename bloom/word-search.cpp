#include <string>
#include <vector>
using namespace std;

// (1) made mistakes in the index-ing apporoach; instead took more of a backtracking approach of 
// looking into all the possible options instead of going thourhg index wise
// (2) cyclical nature can be avoided in dfs manner by manipulaitng in-place cell items
class Solution {
public:
  bool checkCell(int i, int j, int index, string &target,
                 vector<vector<char>> &board) {
    if (i < 0 || j < 0 || i >= board.size() || j >= board[0].size() ||
        board[i][j] != target[index])
      return false;

    if (index == target.size() - 1)
      return true;

    char ch = board[i][j];
    board[i][j] = '#';
    bool res = checkCell(i + 1, j, index + 1, target, board) ||
               checkCell(i, j + 1, index + 1, target, board) ||
               checkCell(i - 1, j, index + 1, target, board) ||
               checkCell(i, j - 1, index + 1, target, board);
    board[i][j] = ch;
    return res;
  }

  bool exist(vector<vector<char>> &board, string word) {
    for (int i = 0; i < board.size(); i++) {
      for (int j = 0; j < board[0].size(); j++) {
        if (checkCell(i, j, 0, word, board))
          return true;
      }
    }

    return false;
  }
};
