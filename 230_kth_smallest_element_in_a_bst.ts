import { TreeNode } from 'tree_node'

function kthSmallest(root: TreeNode | null, k: number): number {
    // Use In order Traversal to solve the problem :
    // Traverse and go deep until left most element.
    // Traverse the left subtree
    // Visit the node
    // Then Traverse the right subtree
    let arr: number[] = []

    function inorder(node: TreeNode | null, arr: number[]) {
        if (!node) return

        inorder(node.left, arr)
        arr.push(node.val)
        inorder(node.right, arr)
    }

    inorder(root, arr)

    // arr is in the sorted order
    // just get the k - 1 element
    return arr[k - 1]
}
