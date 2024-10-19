import { TreeNode } from 'tree_node'

// Approach: is quite simple enough suprisngly, if the curr value is greater than both p and q. then move right
// if not move to the left; the only way we return if its either equal or a split; if its splitting at tht
// point, that means its the ancestor; as there can be no other split
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    let curr = root

    while (curr !== null) {
        if (p!.val > curr.val && q!.val > curr.val) {
            curr = curr.right
        } else if (q!.val < curr.val && p!.val < curr.val) {
            curr = curr.left
        } else {
            return curr
        }
    }

    return null
}
