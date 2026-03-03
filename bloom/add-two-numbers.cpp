struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 9 + 9 + 0 = 18
//   -> 18 / 10 = 1 and 18 mod 10 = 8. 
// 9 + 9 + 1 = 19
//   -> 19 / 10 = 1 and 19 mod 10 = 9
// 9 + 9  = 9
// 9 + 9 = 9. overflow = 1 and 9
// ...
// 9 + 0 + 1  = 10. overflow = 1 and v = 0
// 9 + 0 + 1 = 10. v = 0
// 9 + 0 + 1 = 10. v = 0
// 0 + 0 + 1. overflow - 1 / 10 = 0 and v = 1
// 8 -> 9
class Solution {
public:
  ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
    ListNode *curr = new ListNode();
    ListNode *head = curr;
    int overflow = 0;

    while (l1 != nullptr || l2 != nullptr || overflow) {
      int l1v = l1 ? l1->val : 0;
      int l2v = l2 ? l2->val : 0;
      int sum = l1v + l2v + overflow;
      overflow = sum / 10;
      curr->next = new ListNode(sum % 10);
      curr = curr->next;
      l1 = l1 ? l1->next : nullptr;
      l2 = l2 ? l2->next : nullptr;
    }
    
    curr->next = nullptr;
    return head->next;
  }
};
