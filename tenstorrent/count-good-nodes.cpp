struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};

class Solution {
public:
  int goodNodes(TreeNode *root) {
    int count = 0;
    dfs(root, root->val, count);
    return count;
  }

  void dfs(TreeNode *node, int maxV, int &count) {
      if (node == nullptr) return;
      
      int nextVal;
      if (node->val >= maxV) {
         nextVal = node->val;
         count++;
      } else {
         nextVal = maxV;
      }
      
      dfs(node->left, nextVal, count);
      dfs(node->right, nextVal, count);
  }
};
