import { TreeNode } from 'tree_node'

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    let arr: (number | string)[] = []
    function dfs(node: TreeNode | null) {
        if (node == null) {
            arr.push('N')
            return
        }

        arr.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return arr.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let arr = data.split(',')
    let i = 0

    function dfs(): TreeNode | null {
        if (arr[i] == 'N') {
            i++
            return null
        }

        let node = new TreeNode(parseInt(arr[i]))
        i++
        node.left = dfs()
        node.right = dfs()
        return node
    }

    return dfs()
}
