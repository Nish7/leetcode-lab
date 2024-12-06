from typing import List

class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        # why use a union-find? we build the edges iteratevlu and once we encounter a redudant edge
        # we return that edge
        parent = [i for i in range(len(edges) + 1)] # len(edges) == n
        rank = [1] * (len(edges) + 1)

        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            p1, p2 = find(x), find(y)

            if p1 == p2: # cycle found
                return [x, y]
            elif rank[p1] > rank[p2]:
                parent[p2] = p1
                rank[p1] += rank[p2]
            else:
                parent[p1] = p2
                rank[p2] += rank[p1]

            return []
        
        for u, v in edges:
            v = union(u, v)
            if v:
                return v

        return []
         
    
    def findRedundantConnectionDFS(self, edges: List[List[int]]) -> List[int]:
        # Approach: is gonna be a dfs solution which goes through each cell or node recurisvely
        # explores each path and if a repeated or cyclical edge is found return that edge
        # it needs to build the graph one edge at a time
        # iteratvily check each graph this due to the requiment of returning the last input edge 

        adj = {i: [] for i in range(len(edges) + 1)}
        
        def dfs(node, parent):  # bool -> containsCycle?
            if node in visited:
                return True
            
            visited.add(node)
            for n in adj[node]:
                 if n == parent:
                     continue 
                 if dfs(n, node):
                     return True

            return False
        
        # incremently build the graph one edge at a time
        for i, j in edges:
            adj[i].append(j)
            adj[j].append(i)
            visited = set()
            if dfs(i, -1):
                return [i, j]

        return []


# edges = [[1,2],[1,3],[2,3]] 
# edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
edges = [[1,2],[2,3],[5,4],[1,4],[1,5]]
o = Solution().findRedundantConnection(edges)
print(o)
