import { TreeNode } from 'tree_node'

// Approach: mix of the same tree and depth first search. do a same Tree on all
// nodes if they do not match; do not return, rather continue on the left and right nodes
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (root == null && subRoot == null) return true
    if (root == null || subRoot == null) return false
    if (sameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function sameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null && q == null) return true
    if ((p == null && q) || (q == null && p)) return false
    if (p!.val != q!.val) return false
    return sameTree(p!.left, q!.left) && sameTree(p!.right, q!.right)
}
