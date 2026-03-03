# There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
# 
# bi -> ai

# For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

# Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

# Approach: Create a adj_list for each course: 
# which courses a single course depend on the 
# which course has no dependency has indegree of 0
# we also have to track the indegree number -> 
# we maintain a queue and push all the node wd indegree == 0
# and then check all their neighbors decrease their adjancey and if their indegree 
# then thay are safe to add
# 
from typing import Deque, List


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {i: [] for i in range(numCourses) }
        indeg = [0] * numCourses
        
        for c, d in prerequisites:
            adj[d].append(c) 
            indeg[c] += 1
            
        queue = Deque(i for i in range(numCourses) if indeg[i] == 0)
        res = []
        
        while queue:
           v = queue.popleft()
           res.append(v)
           for nbr in adj[v]:
               indeg[nbr] -= 1
               if indeg[nbr] == 0:
                   queue.append(nbr)
               
        return res

if __name__ == "__main__":
    print("Test 1:", Solution().findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))
