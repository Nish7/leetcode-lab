from typing import Deque, List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = {i:[]  for i in range(numCourses)}
        indeg = [0] * numCourses  
        
        for c, d in prerequisites:
           adj[d].append(c)
           indeg[c] += 1 
         
        deque = Deque([i for i in adj if indeg[i] == 0]) 
        seen = 0
        while deque:
            v = deque.popleft()
            seen += 1
            for nbr in adj[v]:
                indeg[nbr] -= 1
                if indeg[nbr] == 0:
                    deque.append(nbr)
        
        return seen == numCourses


# Test things
if __name__ == "__main__":
    solution = Solution()

    # Test case 1: Simple valid course schedule
    assert solution.canFinish(2, [[1, 0]])

    # Test case 2: Circular dependency
    assert solution.canFinish(2, [[1, 0], [0, 1]])

    # Test case 3: No prerequisites
    assert solution.canFinish(3, [])

    print("All tests passed!")
