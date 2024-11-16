class TrieNode {
    children: Map<string, TrieNode>
    end: boolean
    constructor() {
        this.children = new Map<string, TrieNode>()
        this.end = false
    }
}

class WordDictionary {
    trie: TrieNode
    constructor() {
        this.trie = new TrieNode()
    }

    addWord(word: string): void {
        let curr = this.trie

        for (let c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }

            curr = curr.children.get(c)!
        }

        curr.end = true
    }

    search(word: string): boolean {
        function dfs(i: number, t: TrieNode) {
            let curr = t
            // loop through each char as you did before however at this time use the i
            for (let j = i; j < word.length; j++) {
                let c = word[j]

                if (c == '.') {
                    // perform dfs on all the children from the t children
                    for (let child of curr.children) {
                        if (dfs(j + 1, child[1])) return true
                    }
                }

                if (!curr.children.has(c)) return false
                curr = curr.children.get(c)!
            }

            // in the case, index is greater than word lenght; it falls to curr.end to decide if the curr.end to decide if the path is ended
            return curr.end
        }

        return dfs(0, this.trie)
    }
}
