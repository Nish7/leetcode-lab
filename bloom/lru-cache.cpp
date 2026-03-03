#include <unordered_map>

using namespace std;

// Mistakes:
// - `pushnode`: missing dll implementation detail; wrong order with dangerous
// links managements
// - node init: got confused with dealing with the init of each head and tail

struct Node {
  Node *next;
  Node *prev;
  int value;
  int key;

  Node(Node *next, Node *prev, int value, int key)
      : next(next), prev(prev), value(value), key(key) {}
};

class LRUCache {
public:
  int capacity;
  Node *left;
  Node *right;
  unordered_map<int, Node *> mp;

  // [left -> tail_node, ... head node,-> rigth]

  // (1) init the values
  // confusion with the init values
  LRUCache(int capacity) {
    this->capacity = capacity;
    this->left = new Node(nullptr, nullptr, -1, -1);
    this->right = new Node(nullptr, nullptr, -1, -1);
    this->right->prev = this->left;
    this->left->next = this->right;
  }

  // (1) return the value (if exist)
  // (2) return the -1 (if does not exist)
  // - everytime we access it we want to put it in the front
  //       - two node operation, remove the node and pushback
  // - we dont the access. so we need to use linked list
  int get(int key) {
    if (!mp.count(key)) {
      return -1;
    }

    removenode(mp[key]);
    pushnode(mp[key]);
    return mp[key]->value;
  }

  void removenode(Node *node) {
    if (node->prev)
      node->prev->next = node->next;
    if (node->next)
      node->next->prev = node->prev;
  }

  // push to the tail of the ll
  // uses the dummy head and tail as pointer
  // head->prev is the actual nodes
  // tail->next is the actual nodes
  void pushnode(Node *node) {
    // [... -> prev -> right]
    // [... -> prev -> [node] ->  right]
    node->prev = this->right->prev;
    this->right->prev = node;
    node->next = this->right;
    this->right->prev->next = node;
  }

  // (1) Stack to evict the lru value
  // (2) update the value of the key if exist
  // (3) Add the key-value if does not exist
  // - add the key in the map with the value
  // - if the cache is full. remove the key from the front of the stack
  // - remove the value from the map
  // - push the new value
  // - struggles: forget about the deleting the new one
  void put(int key, int value) {

    Node *newnode = new Node(nullptr, nullptr, value, key);
    pushnode(newnode);

    if (mp.count(key)) {
      removenode(mp[key]);
      delete mp[key]; // remove the heap value
      mp[key] = newnode;
      return;
    }

    mp[key] = newnode;

    if (this->capacity < this->mp.size()) {
      Node *oldnode = this->left->next;
      removenode(oldnode);
      mp.erase(oldnode->key);
      delete oldnode;
    }
  }
};

int main() {
  auto lRUCache = *new LRUCache(2);
  lRUCache.put(1, 1); // cache is {1=1}
  lRUCache.put(2, 2); // cache is {1=1, 2=2}
  lRUCache.get(1);    // return 1
  lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  lRUCache.get(2);    // returns -1 (not found)
  lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  lRUCache.get(1);    // return -1 (not found)
  lRUCache.get(3);    // return 3
  lRUCache.get(4);    // return 4
}
