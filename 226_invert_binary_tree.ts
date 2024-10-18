import { TreeNode } from 'tree_node'

// Approach: keep inverting from top to bottom
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null) {
        return null
    }
    ;[root.left, root.right] = [root.right, root.left]
    invertTree(root.left)
    invertTree(root.right)
    return root
}
