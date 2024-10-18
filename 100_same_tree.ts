import { TreeNode } from 'tree_node'

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // check the base case
    if (p == null && q == null) return true

    // check if either of them are null if not both
    if (p == null || q == null) return false

    // if val of the p and q are isSameTree
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
