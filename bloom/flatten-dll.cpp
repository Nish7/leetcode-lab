class Node {
public:
  int val;
  Node *prev;
  Node *next;
  Node *child;
};

class Solution {
public:
  Node *flatten(Node *head) {
    dfs(head);
    return head;
  }

  Node *dfs(Node *node) {
    Node *curr = node;
    Node *last = nullptr;
    while (curr) {
      Node *childtail = nullptr;
      if (curr->child) { childtail = dfs(curr->child); }

      if (childtail) {
        curr->child->prev = curr;
        childtail->next = curr->next;

        if (curr->next) curr->next->prev = childtail;

        curr->next = curr->child;
        curr->child = nullptr;
        last = childtail;
      } else {
        last = curr;
      }

      curr = curr->next;
    }

    return last;
  }
};
