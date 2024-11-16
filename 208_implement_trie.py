class TrieNode:
    def __init__(self) -> None:
        self.children = {}  # key: char and value: trieNode
        self.end = False


class Trie:
    def __init__(self):
        self.trie = TrieNode()

    def insert(self, word: str) -> None:
        curr = self.trie

        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()  # we create a children for that node
            curr = curr.children[c]  # assign the new curr

        # make sure it ends here
        curr.end = True

    def search(self, word: str) -> bool:
        curr = self.trie

        for c in word:
            if c not in curr.children:
                return False
            curr = curr.children[c]

        # make sure its ends
        return curr.end

    def startsWith(self, prefix: str) -> bool:
        curr = self.trie

        for c in prefix:
            if c not in curr.children:
                return False
            curr = curr.children[c]

        return True
