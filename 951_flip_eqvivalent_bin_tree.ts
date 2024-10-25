import { TreeNode } from 'tree_node'

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // Approach: DFS approach and check the condition if the either both left and right chilren val are same
    // or either the values are flipped
    if (root1 == null && root2 == null) return true
    if (root1 == null || root2 == null) return false
    if (root1.val != root2.val) return false

    return (
        (flipEquiv(root1.left, root2.left) &&
            flipEquiv(root1.right, root2.right)) ||
        (flipEquiv(root1.left, root2.right) &&
            flipEquiv(root1.right, root2.left))
    )
}
