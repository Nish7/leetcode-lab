#include <vector>

class Solution{
    public:
    std::vector<std::vector<int>> solve(std::vector<int> values, int exp){
        // [-1, -1, 1, 2]
        //  i   j      k
        // 
        // 
        std::sort(values.begin(), values.end()); // sort the array
        std::vector<std::vector<int>> res;
        for  (int i = 0; i < values.size(); i++){
            int j = i + 1;
            int k = values.size() - 1;
            
            while (j < k){
                int total = values[i] + values[j] + values[k];
                if (total > exp){
                    k--;
                } else if(total < exp){
                    j++;
                } else {
                    res.push_back({i, j, k}) ;
                    j++;
                    k--;
                    
                    while (values[j] == values[j - 1]) {
                        j++; 
                    };
                    
                    while (values[k] == values[k - 1]) {
                        j++; 
                    };
                };
            };
        };
        
        return res;
    };
};

int main(){
    
   return 0;
}
