from typing import List


class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        # approach: recurse through each path and terminate at the cyclical nature. 
        # keep a track of path in each recurisve call
        # ignroe the value of last parent recursivecall 

        # create a adjancency list 
        m = {i: [] for i in range(n)}

        for i, j in edges:
            m[i].append(j)
            m[j].append(i)
          
        # recurse into each path
        visited_nodes = set()
        def dfs(node, path):
            if node in path:
                return False

            if node in visited_nodes:
                return True
            
            prev_el = path[-1] if len(path) > 0 else ""
            for n in m[node]:
                if n == prev_el:
                    continue

                if not dfs(n,path + [node]):
                    return False

            visited_nodes.add(node)
            return True
      
        # start from any node, it should not be disconnected and shuold visit each node 
        if not m: return False
        dfs(0, [])
        return len(visited_nodes) == n


# edges = [[0, 1], [0, 2], [0, 3], [1, 4]] # true
edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Solution().validTree(5, edges)
