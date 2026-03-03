class ListNode {
    public:
    int value;
    ListNode* next;
    ListNode(int value, ListNode* next): value(value), next(next) {}
};

class Solution{ 
    public:
    ListNode* reverseList(ListNode* head){
       ListNode* curr = head;
       ListNode* prev = nullptr;
       
       while (curr) {
           ListNode* next = curr->next;
           curr->next = prev;
           prev = curr;
           curr = next;
       }
       
       return prev;
    }
};
