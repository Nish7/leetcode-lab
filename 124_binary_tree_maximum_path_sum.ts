import { TreeNode } from 'tree_node'

function maxPathSum(root: TreeNode | null): number {
    // Approach: DFS Approach. Keep traversing left and right nodes.
    // Use the property of the ability to split and not split. as node can only appear once in the sequence
    // So goign through each node, we can only split once or never
    // We basically calculate maximum path sum considering both split and non split
    // for each of the right and left subtree
    if (!root) return 0
    let res = root.val

    // return a value without the split
    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        let leftMax = dfs(node.left)
        let rightMax = dfs(node.right)
        leftMax = Math.max(0, leftMax)
        rightMax = Math.max(0, rightMax)

        // calculate the max with the split
        res = Math.max(res, node.val + leftMax + rightMax)

        return node.val + Math.max(leftMax, rightMax)
    }

    dfs(root)
    return res
}
