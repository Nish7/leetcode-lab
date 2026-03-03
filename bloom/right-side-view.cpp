#include <queue>
#include <vector>

using namespace std;

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
  vector<int> rightSideView(TreeNode *root) {
    queue<TreeNode *> q;
    q.push(root);
    vector<int> res;

    if (root == nullptr) return res;

    while (!q.empty()) {
      int size = q.size(); 
      for (int i = 0; i < size; i++) {
        TreeNode* v = q.front();
        if (i == size - 1) res.push_back(v->val);
        q.pop();
        if (v->left) q.push(v->left);
        if (v->right) q.push(v->right);
      }
    }

    return res;
  }
};
