#include <vector> 
#include <set> 

using namespace std;

class Solution {
public:
    string minRemoveToMakeValid(string s) {
        set<int> discard_idx;
        vector<int> openbrackets;

        for (auto i = 0; i < s.size(); i++) {
            char c = s[i];
            if (c == '(') {
                openbrackets.push_back(i);
            } else if (c == ')') {
                if (openbrackets.size() == 0) {
                    discard_idx.insert(i);
                    continue;
                }

                openbrackets.pop_back();
            }
        }

        if (openbrackets.size() > 0) {
            for (auto i : openbrackets) {
                discard_idx.insert(i);
            }
        }

        string res = "";
        for (int i = 0; i < s.size(); i++){
            if (discard_idx.contains(i)) continue;
            res += s[i];
        }

        return res;
    }
};
