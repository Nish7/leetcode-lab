import { TreeNode } from 'tree_node'

function goodNodes(root: TreeNode | null): number {
    // Approach: dfs approach go throuhgh teh each element from left to right. keep track of the good nodes
    if (root == null) return 0

    let goodNodes = 0

    function dfs(node: TreeNode | null, max: number): void {
        if (node == null) return
        if (node.val >= max) goodNodes++

        const maxVal = Math.max(node.val, max)

        dfs(node.left, maxVal)
        dfs(node.right, maxVal)
    }

    dfs(root, root.val)
    return goodNodes
}
