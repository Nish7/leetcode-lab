#include <vector>
#include <iostream>

// a b   1 2
// c d   3 4
// 
// a1+b3 a2+b4
// c1+d3 c2+d4
// 
// a(0,0) * b(0,0) + a(0,1) * b(1,0)


class Solution {
    public:
    std::vector<std::vector<int>> solve(std::vector<std::vector<int>> matA, std::vector<std::vector<int>> matB) {
        const int rowsA = matA.size();
        const int colsA = matA[0].size();
        const int rowsB = matB.size();
        const int colsB = matB[0].size();
        
        std::vector<std::vector<int>> res(rowsA, std::vector<int>(colsB, 0));
        
        for (int i = 0; i < rowsA; i++){
            for(int j = 0; j < colsA; j++) {
                int a = matA[i][j];
                for (int k = 0; k < colsB; k++){
                    res[i][k] += a * matB[j][k];
                }
            }
        }
        
        return res;
    };
};

int main(){
   Solution sol;
   auto ans = sol.solve({{1, 2}, {3, 4}}, {{1, 2}, {3, 4}});
   
   for (int i = 0; i < ans.size(); i++) {
       for (int j = 0; j < ans[0].size(); j++){
           std::cout << ans[i][j] << " ";
       }
       
       std::cout << "\n";
   }
   
   std::cout << std::endl;
   return 0;
}
