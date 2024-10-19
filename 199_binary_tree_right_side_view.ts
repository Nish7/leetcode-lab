import { TreeNode } from 'tree_node'

function rightSideView(root: TreeNode | null): number[] {
    // approach: dfs doesnt work as it a left-most element could exist in the other picked side
    // have to use the bfs
    // get a level order traversal and get the right most element
    if (!root) return []

    let res: number[] = []
    let queue: TreeNode[] = [root]

    while (queue.length > 1) {
        let qLen = queue.length
        let level = []

        for (let i = 0; i < qLen; i++) {
            const e = queue.shift()!
            level.push(e)

            if (e.left) queue.push(e.left)
            if (e.right) queue.push(e.right)
        }

        res.push(level.at(-1)!.val)
    }

    return res
}
