#include <vector>
#include <iostream>
#include <map>

class Solution{
    public:
    std::pair<int, int> twoSum(std::vector<int>& nums, int target){
        std::map<int, int> map;

        for (int i = 0; i < nums.size(); i++) {
            int x = nums[i];
            int d = target - x;
            
            if (map.count(d)) return {map[d], i};
            map[x] = i;
        }
        
        return {};
    }
};

int main(){
    Solution sol;
    std::vector<int> list = {1,2,3,5};
    auto a = sol.twoSum(list, 6);
    std::cout << "a: " << a.first << "b: " << a.second <<  "" << std::endl;
}
