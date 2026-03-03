#include <climits>
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};

// [5,4,6,null,null,3,7]
//      5 = min, max
//    4 (min, 5)   6 (5, max)
//               3 !! (5, 6)   7 (6, max)
//
class Solution {
public:
  bool isValidBST(TreeNode *root) { return isValid(root, LONG_MIN, LONG_MAX); }

  bool isValid(TreeNode *node, long min, long max) {
    if (node == nullptr)
      return true;
    if (node->val <= min || node->val >= max)
      return false;

    return isValid(node->left, min, node->val) &&
           isValid(node->right, node->val, max);
  }
};
