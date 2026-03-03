// LRU Cache
#include <cstddef>
#include <optional>
#include <unordered_map>

class Node {
public:
  std::optional<int> key;
  std::optional<int> value;
  Node *next;
  Node *prev;
  Node(std::optional<int> key, std::optional<int> value, Node *next, Node *prev)
      : key(key), value(value), next(next), prev(prev) {}
};

class LRUCache {
private:
  int capacity;
  Node *head;
  Node *tail;
  std::unordered_map<int, Node *> map;

public:
  LRUCache(int capacity) : capacity(capacity) {
    head = new Node(std::nullopt, std::nullopt, nullptr, nullptr);
    tail = new Node(std::nullopt, std::nullopt, nullptr, nullptr);
    head->prev = tail;
    tail->next = head;
  };

  // everytime we push a new value in to LL
  // we append that to the head (denoting recently accessed)
  // if we out of capcacity we pop it from the back
  void put(int key, int value) {
    // if already exist, remove teh exisiting node, delete the exis entry, put
    // the new one
    if (map.count(key)) {
        removeNode(map[key]);
        delete map[key];
    }
    
    Node *newNode = new Node(key, value, nullptr, nullptr);
    pushNode(newNode);
    map[key] = newNode;
    
    if (map.size() > capacity) {
        Node * toRemove = tail->next;
        removeNode(toRemove);
        map.erase(toRemove->key.value());
        delete toRemove;
    }
  };

  // we get the key based on the hash map
  int get(int key) {
      if (map.count(key)) {
          removeNode(map[key]);
          pushNode(map[key]);
          return map[key]->value.value_or(-1);
      }
      
      return -1;
  };

  // take node as param, remove the node and replaces the next and prev
  // accordingly
  void removeNode(Node *node) {
      if (node->prev) node->prev->next = node->next;
      if (node->next) node->next->prev = node->prev;
  };

  // pushes to teh head of the ll
  void pushNode(Node *node) {
    node->prev = head->prev;
    node->next = head;
    node->prev->next = node;
    head->prev = node;
  }
};

int main() { return 0; }
