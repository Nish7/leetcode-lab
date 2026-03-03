# You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

#     Connect: A cell is connected to adjacent cells horizontally or vertically.
#     Region: To form a region connect every 'O' cell.
#     Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.

# To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything
# 
# Approach: some kind of dfs approach, 
# X and O 
# we can detect a given region
# how do we know it is surrounded?
# ---> ans: either we know there are edges are so it has some sort of edge to 'X'
# 
# go throuhgh each edge "0" node and mark them safe and then 
# do simple n^2 loop to convert all the remaning ones to the surroudned

class Solution():
    def __init__(self):
       pass
    
    def solve(self, board):
        ROWS, COLS =  len(board), len(board[0])
        visited = set()
        
        def dfs(i, j):
            if i < 0 or i >= ROWS or j < 0 or j >= COLS:
                return
            
            if (i, j) in visited:
                return
                
            if board[i][j] != "O":
                return 
                
            visited.add((i, j))
            board[i][j] = "S"
            
            
        # go through top and bottom row
        for i in range(COLS):
            dfs(0, i)
            dfs(ROWS - 1, i)
        
        # go through left and right edges
        for j in range(ROWS):
            dfs(j, 0)
            dfs(j, COLS - 1)
            
        
        for i in range(ROWS):
            for j in range(COLS):
                v = board[i][j]
                if v == 'O':
                   board[i][j] = 'X'
                if v == 'S':
                   board[i][j] = 'O'
