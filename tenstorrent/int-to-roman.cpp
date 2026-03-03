#include <string>
#include <iostream>
using namespace std;

// int to roman
// M -> 1000
// D -> 500
// C -> 100
// L -> 50
// X -> 10
// V -> 5
// I -> 1
// Approach: to convert a 25 to the roman
// 25 -> try M -> try D -> try C -> try L (50) -> X wokrs! -> 25/10 --> 2.5 -> 2 -> XX
// 5 -> try V (5) 5/5 = 1 => 1
// 
// Fix: We need subtractive forms as well
class Solution{
    public:
    std::string intToRoman(int value){
        // thing about where we wanna use the map
        // we can ue the static pair of array 
        const pair<string, int> romans[]  = {
            {"M", 1000},
            {"CM", 900},
            {"D", 500},
            {"CD", 400},
            {"C", 100},
            {"XC", 90},
            {"L", 50 },
            {"X", 10},
            {"IX", 9},
            {"V", 5},
            {"IV", 4},
            {"I", 1},
        };
        
        // question: how do we iterate over the keys on the map
        std::string res;
        for (const auto& pair: romans) {
            const auto [k, v] = pair;
            while(value >= v) {
                res += k;
                value -= v;
            }
        }
        
        return res;
    };
};

int main() {
    Solution sol;
    
    // Test cases
    cout << "3: " << sol.intToRoman(3) << endl;    // Expected: III
    cout << "4: " << sol.intToRoman(4) << endl;    // Expected: IV
    cout << "9: " << sol.intToRoman(9) << endl;    // Expected: IX
    cout << "58: " << sol.intToRoman(58) << endl;  // Expected: LVIII
    cout << "1994: " << sol.intToRoman(1994) << endl; // Expected: MCMXCIV
    
    return 0;
}
