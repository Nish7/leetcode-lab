import { TreeNode } from 'tree_node'

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0

    function dfs(node: TreeNode | null): number {
        console.log(node?.val ?? undefined)

        if (node == null) return 0
        const left = dfs(node.right)
        const right = dfs(node.left)
        diameter = Math.max(diameter, left + right)
        return 1 + diameter
    }

    dfs(root)
    return diameter
}
