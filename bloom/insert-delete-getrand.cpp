#include <unordered_map>
#include <vector>

using namespace std;
// Approach :
// -- leverage map and vector
// map[val] -> index
// vector -> allowes us to index in O(1) for rand
// map allows insertion/deletion in O(1)
// for deletion: swapping from the last element

class RandomizedSet {
public:
  std::unordered_map<int, int> idxmap;
  vector<int> keys;

  bool insert(int val) {
    if (idxmap.count(val))
      return false;
    keys.push_back(val);
    idxmap[val] = keys.size() - 1;
    return true;
  }

  bool remove(int val) {
    if (!idxmap.count(val))
      return false;

    int backv = keys.back();
    int idxtoremove = idxmap[val];

    keys[idxtoremove] = backv;
    idxmap[backv] = idxtoremove;

    idxmap.erase(val);
    keys.pop_back();
    return true;
  }

  int getRandom() { return keys[rand() % keys.size()]; }
};

int main() {
  RandomizedSet set;
  return 1;
}
