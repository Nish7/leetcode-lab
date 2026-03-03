#include <unordered_map>
#include <vector>
#include <iostream>
#include <queue>

// Problem : Given a list of prequistes [0, 1] we need to output a final order or courses take to determine compatbility and chronology
// Example 1: [[0,1], [1,0]]
// 0 -> 1 and 1 -> 0
// Output: -1
// 
// Example 2 : [[1,0], [2, 1], [3, 2]]
// 0 -> 1 -> 2 -> 3
// Output: [0,1,2,3]
// 
// Example 3: [[1,0], [2,1], [3,1], [4, 3]]
// 0 -> 1, 1 -> 2, 1 -> 3, 3 -> 4
// Output: [0, 1, 2, 3, 4]

class Solution {
    public:
    std::vector<int> solve(std::vector<std::pair<int, int>> prereq, int numCourses){
        // Approach: create a adjency list of all node and their outgoing neihbor
        // create a indegree vector that will hold the indegree of each course. 
        std::unordered_map<int, std::vector<int>> mp(numCourses);
        std::vector<int> indeg(numCourses, 0);
        
        for (auto p : prereq){
            // first -> course , second -> dependency
            mp[p.second].push_back(p.first);
            indeg[p.first]++;
        }
        
        // Example: (2) it is going to be 1 for most and 0 for the ones we are going to start processing with
        std::queue<int> q;
        for (int i = 0; i < numCourses; i++){
            int v = indeg[i];
            if (v == 0)  q.push(i);
        }
        
        // we can 0 indegrees to the queue, process their each nbr, decrease the indegree 
        // and push them back in the queue if their indegree becomes 0
        std::vector<int> res;
        while(!q.empty()){
            auto v = q.front();
            q.pop();
            res.push_back(v);
            
            for(int nbr : mp[v]){
               indeg[nbr]--; 
               if (indeg[nbr] == 0){
                   q.push(nbr);
               }
            }
        }
        
        return res;
    };
};

int main(){
    Solution sol;
    auto a = sol.solve({{1,0}, {2, 1}, {3, 2}}, 4);
    
    for (int i : a){
        std::cout << i << " -> ";
    }
    
    std::cout << std::endl;
    return 0;
};
