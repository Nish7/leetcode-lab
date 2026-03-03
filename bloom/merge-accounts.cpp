// Input: accounts =
// [["John","johnsmith@mail.com","john_newyork@mail.com"],
// ["John","johnsmith@mail.com","john00@mail.com"],
// ["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
//
// emails = {
//     johnsmith@mail.com: [0,1]
//     john00@mail.com: [0,1]
//     mary@mail.com: [2]
//     johnnybravo@mail.com: [3]
// }
//
// accounts = {
//     John: set[johnsmit@mail.com]
// }
//
// - go each email, create a key with the index to the account
// - for each email,
//      - union all the accounts into one.
//      - get all the email for a account by index.
//      - add it in a account entry for a single name
//      - problem: we cannot have map since there is a key for a single
// - we can iterate over the each email and its mapping
//
// how can we apply union-find??
// -

#include <iostream>
#include <map>
#include <string>
#include <vector>
using namespace std;

// implement union-find
// find(int x)
// - given x, we recursively assign the parent value until we find the root
// union(int a, int b)
// - we find the root parent for a and b
// - if they are the same, return false.
// - if they are not the same, we check the size and and assign the parent of
// larger one to the smaller one
// - else do the opposite and change the size
//
class UnionFind {
public:
  vector<int> parent;
  vector<int> rank;
  UnionFind(int n) {
    parent = {};
    rank = {};
    for (int i = 0; i < n; i++) {
      parent.push_back(i);
      rank.push_back(1);
    }
  }

  int find(int n) {
    int x = n;
    while (parent[x] != x)
      x = parent[x];
    parent[n] = x;
    return x;
  }

  int unionint(int a, int b) {
    int aparent = find(a);
    int bparent = find(b);

    if (aparent == bparent)
      return aparent;
    else if (rank[aparent] > rank[bparent]) {
      parent[bparent] = aparent;
      rank[aparent] += rank[bparent];
      return aparent;
    } else {
      parent[aparent] = bparent;
      rank[bparent] += rank[aparent];
      return bparent;
    }
  }
};

class Solution {
public:
  vector<vector<string>> accountsMerge(vector<vector<string>> &accounts) {
    map<string, int> emailmp;
    auto uf = UnionFind(accounts.size());

    for (int i = 0; i < accounts.size(); i++) {
      vector<string> emails(accounts[i].begin() + 1, accounts[i].end());

      for (auto e : emails) {
        if (!emailmp.count(e)) {
          emailmp[e] = i;
        } else {
          uf.unionint(i, emailmp[e]);
        }
      }
    }

    map<int, vector<string>> emailgroup;
    for (auto k : emailmp) {
      int leader = uf.find(k.second);
      emailgroup[leader].push_back(k.first);
    }

    vector<vector<string>> res;
    for (auto k : emailgroup) {
      vector<string> r;
      r.push_back(accounts[k.first][0]);
      for (auto e : k.second) {
        r.push_back(e);
      }
      res.push_back(r);
    }

    for (auto k : res) {
      for (auto e : k) {
        cout << e << " ";
      }
      cout << endl;
    }

    // cout << endl;

    return res;
  }
};

int main() {
  Solution sol;
  vector<vector<string>> accounts = {
      {"John", "johnsmith@mail.com", "john_newyork@mail.com"},
      {"John", "johnsmith@mail.com", "john00@mail.com"},
      {"Mary", "mary@mail.com"},
      {"John", "johnnybravo@mail.com"}};
  sol.accountsMerge(accounts);
}
