from typing import List
from collections import deque


class Solution:
    def oneChDiff(self, word_a, word_b):
        one = False
        for i in range(len(word_a)):
            if word_a[i] != word_b[i]:
                if one:
                    return False
                one = True

        return True

    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        # Approach: build a adj list based on wordslist
        # try to find the shortest path from beginWord to endWordj
        # use bfs
        adj = []
        wordList.append(beginWord)
        # find the edges
        for i in range(len(wordList) - 1):
            for j in range(i + 1, len(wordList)):
                if self.oneChDiff(wordList[i], wordList[j]):
                    adj.append((wordList[i], wordList[j]))

        # create the adj list
        adjm = {}
        for edge in adj:
            if not edge[0] in adjm:
                adjm[edge[0]] = []
            if not edge[1] in adjm:
                adjm[edge[1]] = []

            adjm[edge[0]].append(edge[1])
            adjm[edge[1]].append(edge[0])

        q = deque()
        q.append(beginWord)

        # bfs
        val = 1
        visited = set()
        visited.add(beginWord)
        while q:
            for _ in range(len(q)):
                v = q.popleft()
                if v == endWord:
                    return val

                for n in adjm[v]:
                    if n in visited:
                        continue

                    q.append(n)
                    visited.add(n)

            val += 1

        return 0


beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
# wordList = ["hot", "dot", "dog", "lot", "log"]
al = Solution().ladderLength(beginWord, endWord, wordList)
print(al)
