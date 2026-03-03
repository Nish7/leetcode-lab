#include <unordered_map>
using namespace std;

class Node {
public:
  int val;
  Node *next;
  Node *random;

  Node(int _val) {
    val = _val;
    next = nullptr;
    random = nullptr;
  }
};

class Solution {
public:
  // main task is to build a deep copy of the list
  // next and random pointer
  // next is easy since we can simply traverse the path and create those "links"
  // however following random seems a bit trickier.
  // we can do a 2 pass approach:
  // 1 pass: we follow the next pointer and build a hashmap with key and value
  // key = val and value = new node pointer!!
  // 2 pass: go through the old node head. and use the mp to assign the value
  // complexity: nodes can have same value
  Node *copyRandomList(Node *head) {
    Node *curr = head;
    unordered_map<Node *, Node *> mp; // old pointer to new pointer
    while (curr != nullptr) {
      Node *newnode = new Node(curr->val);
      mp[curr] = newnode;
      curr = curr->next;
    }

    curr = head;
    while (curr != nullptr) {
      if (curr->next)
        mp[curr]->next = mp[curr->next];
      if (curr->random)
        mp[curr]->random = mp[curr->random];
      curr = curr->next;
    }

    return mp[head];
  }
};
