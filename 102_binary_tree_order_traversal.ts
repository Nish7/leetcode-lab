import { TreeNode } from 'tree_node'

function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return []

    let res = []
    let queue = [root]

    //while we have queue length greater than 1
    while (queue.length > 0) {
        let level = []
        let qLen = queue.length
        // remove eevery noe from teh queue
        for (let i = 0; i < qLen; i++) {
            // unshift/deque the elemten
            const node = queue.shift()! // as it always will return some
            // append the removed node to the level arr
            level.push(node.val)
            // for every remvoed node, push its children as well
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        res.push(level)
    }

    return res
}
