// 36. https://leetcode.com/problems/valid-sudoku/description/

// meta: sample input
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// Approach:
// brute force approach: check each row, check each col and check each grid

function isValidSudoku(board: string[][]): boolean {
  // validRow?
  for (let i = 0; i < board.length; i++) {
    if (!isArrUnique(board[i])) return false;
  }

  // validCol?
  for (let i = 0; i < board.length; i++) {
    let colVal = [];

    for (let j = 0; j < board[i].length; j++) {
      colVal.push(board[j][i]);
    }

    if (!isArrUnique(colVal)) return false;
  }

  // validGrid?
  const startingPoints = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];

  for (let p of startingPoints) {
    const [x, y] = p;
    const block = [];
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        block.push(board[i][j]);
      }
    }

    if (!isArrUnique(block)) return false;
  }

  return true;
}

function isArrUnique(arr: string[]): boolean {
  const filterArr = arr.filter((n) => n !== ".");
  const s = new Set(filterArr);
  if (filterArr.length !== s.size) return false;
  return true;
}

// testcases
const a = isValidSudoku([
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
]); // false

console.log(a);
