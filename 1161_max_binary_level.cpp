#include <climits>
#include <deque>
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
  int maxLevelSum(TreeNode *root) {
    int maxsum = INT_MIN;
    int maxlevel = 0;
    int counter = 0;

    deque<TreeNode *> q;
    q.push_back(root);
    while (!q.empty()) {
      int sum = 0;
      int size = q.size();
      counter++;
      // heap use after free??
      //  modifying the deque (pop_front) while the range-based loop is
      //  iterating over its (copied) elements.
      //             When you aggressively pop_front() many times in a row
      //             (especially enough to empty multiple internal blocks),
      //             the deque may:
      // Deallocate entire internal chunks.
      // Reorganize its pointer map.
      for (int i = 0; i < size; i++) {
        auto v = q.front();
        sum += v->val;
        if (v->left)
          q.push_back(v->left);
        if (v->right)
          q.push_back(v->right);
        q.pop_front();
      }

      if (sum > maxsum) {
        maxsum = sum;
        maxlevel = counter;
      }
    }

    return maxlevel;
  }
};
