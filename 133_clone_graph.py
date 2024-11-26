# Definition for a Node.
class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


from collections import deque
from typing import Deque, Dict, Optional


class Solution:
    def cloneGraph(self, node: Optional["Node"]) -> Optional["Node"]:
        # Approach: two pass system. Create a nodes then add the properties
        # go through each node and create a clone node
        # keep a track of visited nodes and end when u encounter one
        # keep a track of visite_nodes in a hasmap and assing key and old for
        # old and new nodes

        m: Dict[Node, Node] = {}

        def dfs(node: Node):
            if not node or node in m:
                return

            new_node = Node(node.val)
            m[node] = new_node

            for n in node.neighbors:
                dfs(n)

        dfs(node)

        # bfs approach
        # loop through each original node neighbors and assign the clone node's neighbors
        # [node1, node2, node3]
        q: Deque[Node] = deque()
        q.append(node)
        visited_nodes = set()
        while q:
            curr = q[0]
            new_node = m[curr]
            visited_nodes.add(curr)
            for n in curr.neighbors:
                new_node.neighbors.append(m[n])
                if n not in visited_nodes and n not in q:
                    q.append(n)

            q.popleft()

        return m[node]
