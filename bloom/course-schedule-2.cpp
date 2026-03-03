#include <vector> 
using namespace std;

class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        // [kahn's algorithm]
        // (1) build the adj list and innode count
        // (2) push the all inodes == 0
        // (3) for each nbr decrement the inodes and push which are 0
        // (4) maintain a res list , this is your DAG.
        
    }
};
