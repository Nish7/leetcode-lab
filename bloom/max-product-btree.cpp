/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};

// go through each edge
// calculate between keeping the edge and not keeping it
//  1
//    
//     2
// 2 * 1 = 2

//   1
//  /   
// 3    2
// left: 3 * 3 = 9
// right: 3 * 2 = 6

// sum of the tree:
// sum of node + total sum of the kept tree
// one calcualte the sum and another checks for the edge removal
//
#include <algorithm>
#include <iostream>
using namespace std;
class Solution {
public:
    long long maxp; 
    long long total;

    long long sum(TreeNode* node) {
        if (node == nullptr) return 0;
        return sum(node->left) + sum(node->right) + node->val;
    }

    long long dfs(TreeNode* root) {
        if (root == nullptr) return 0;
        auto ssum = root->val + dfs(root->left) + dfs(root->right);
        maxp = max(maxp, ssum * (total - ssum));
        return ssum;
    }

    int maxProduct(TreeNode* root) {
        maxp = 0;
        total = sum(root);
        dfs(root);
        long long MOD = 1000000007LL;
        return int(maxp % MOD);
    }
};

int main(){
    auto btree = TreeNode(3);
    auto ctree = TreeNode(2);
    auto atree = TreeNode(1, &btree, &ctree);
    
    Solution sol;
    cout << sol.maxProduct(&atree) << endl;
}
