from typing import List  

class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        # Union-Find Algorithm:
        # you try to connect the edges and build up a graph itertelivly
        # keep a track of the parents nodes of each and also teh graph height
        # merge the graph using the 
        parent = [i for i in range(n)] 
        rank = [1] * n
    
        def find(x): # returns parent of the x; if the x != x so its not a single graph
            # recurse and try to assign the parent; this is path compression 
            # why do we do that? mainly because the edges could be not gradually building up
            # [1,2][2,3][3,4] bt coudld be [1,2][3,4][2,3] which connects two graphs with rank 2.
            # so one child node references the parent node's so have to recurse 
            if parent[x] != x: # parent[4] = 3 != 4
                parent[x] = find(parent[x]) # parent[4] = find(3) = 4 = 3
            return parent[x]
        
        def union(x, y):
            p1, p2 = find(x), find(y)
            if p1 == p2:
                return 0
            if rank[p1] > rank[p2]:
                parent[p2] = p1
                rank[p1] += rank[p1]
            else:
                parent[p1] = p2
                rank[p2] += rank[p1]
            return 1
           
        res = n
        for x,y in edges: # go through each edges and build up progressivly
            res -= union(x, y)
        
        return res

    def countComponentsDFS(self, n: int, edges: List[List[int]]) -> int:
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
