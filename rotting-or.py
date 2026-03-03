from collections import deque
from typing import List

# use everythong in one line to import vein the if conditions
# remember dequee, priorrity queue, hepapq, 
# remeber the consts
# 
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        cols = len(grid[0])
        rows = len(grid)
        rotten = 2
        empty = 0
        fresh = 1
        
        dq = deque()
        visited_node = set()
        oranges = 0
       
        #  find all the rotten 
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == rotten:
                    dq.append((i, j))
                    visited_node.add((i, j))
                
                if grid[i][j] == rotten or grid[i][j] == fresh:
                    oranges += 1
        
        if not oranges:
            return 0
                    
        # find if rotten if so add it the queue
        def traverse(i, j):
            if i < 0 or i >= rows or j < 0  or j >= cols:
                return
            
            if (i, j) in visited_node:
                return 
                
            if grid[i][j] == empty: 
                return 
            
            dq.append((i, j)) 
            visited_node.add((i, j))
             
   
        time = -1
        while dq:
            for i in range(len(dq)):
                r, c = dq.popleft()
                traverse(r + 1, c)
                traverse(r - 1, c)
                traverse(r, c + 1)
                traverse(r, c - 1)
                
            time += 1
            
        if len(visited_node) != oranges:
            return -1
                
        return time
