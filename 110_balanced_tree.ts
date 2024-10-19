import { TreeNode } from 'tree_node'

function isBalanced(root: TreeNode | null): boolean {
    let balanced = true
    function dfs(node: TreeNode | null): number {
        if (node == null) return 0

        let left = dfs(node.left)
        let right = dfs(node.right)

        if (Math.abs(left - right) > 1) {
            balanced = false
            return 0
        }

        return 1 + Math.max(left, right)
    }

    dfs(root)
    return balanced
}
