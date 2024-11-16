from typing import List


class TrieNode:
    def __init__(self) -> None:
        self.children = {} # key: char -> TrieNode
        self.isWord = False

    def addWord(self, word: str):
        curr = self
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]

        curr.isWord = True


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = TrieNode()
        for w in words:
           root.addWord(w) 

        rows, cols = len(board), len(board[0])
        res = set()
        visit = set()

        def dfs(i, j, node, word):
            if (i < 0 or 
                j < 0 or 
                i >= rows or
                r >= cols or
                (i, j) in visit or
                board[i][j] not in node.children):
                return
          
            visit.add((i, j)) 
            ch = board[i][j]
            child = node.children[ch] 
            word += ch

            if child.isWord: res.add(word)

            dfs(i + 1 , j, child, word)
            dfs(i - 1, j, child, word)
            dfs(i, j + 1, child, word)
            dfs(i, j - 1, child, word)

            visit.remove((i, j))
            
        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root, "")

        return list(res) 
        
