import { TreeNode } from 'tree_node'

function isValidBST(root: TreeNode | null): boolean {
    // Approach: DFS approach, keep traversing the node and checking if it falls into the raneg
    // We determine the range based on the travering right or left/
    // if we are on left node: upper bound change to parent node;
    // on the right node: lower bound change to parent node

    function isValid(
        node: TreeNode | null,
        left: number,
        right: number
    ): boolean {
        console.log(left, right)
        if (node == null) return true
        if (!(node.val > left && node.val < right)) return false

        return (
            isValid(node.left, left, node.val) &&
            isValid(node.right, node.val, right)
        )
    }

    return isValid(root, -Infinity, Infinity)
}
