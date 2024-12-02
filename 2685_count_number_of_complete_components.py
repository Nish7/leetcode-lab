from typing import List  

class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        # create the adjanccy List
        al = {i: [] for i in range(n)}
        for i, j in edges:
            al[i].append(j)
            al[j].append(i)

        # recurse into the each path and terminate if cyclical path is encountered
        visited = set()
        def dfs(node, parent):
            if node in visited:
                return

            visited.add(node)
            for neighbor in al[node]:
                if neighbor == parent:
                    continue

                dfs(neighbor, node)

        count = 0
        for i in range(n):
            if not i in visited:
                dfs(i, -1)
                count += 1
        
        return count


# edges = [[0,1], [0,2]] # 1 
edges = [[0,1], [1,2], [2,3], [4,5]] # 2
a = Solution().countComponents(6, edges)
print(a)
