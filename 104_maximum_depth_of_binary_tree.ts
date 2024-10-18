import { TreeNode } from 'tree_node'

function maxDepth(root: TreeNode | null): number {
    function dfs(root: TreeNode | null, depth: number): number {
        if (root == null) return depth
        return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))
    }

    return dfs(root, 0)
}
