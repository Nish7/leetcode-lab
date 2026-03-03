#include <iostream>
#include <vector>
#include <string>

// structures
struct Point {
    int x;
    int y;
};

// functions
int add(int a, int b){
    return a + b;
}

class Rectangle {
    public: 
    Rectangle(double w, double h)
        : width(w), height(h) {}
        
    double area() const {
        return width * height;
    }
    
    private:
        double width;
        double height;
};

// Printing 
int main(){
    int age;
    std::cout << "Enter Age";
    
    // Control flow
    if (1 > 0) {
        std::cout << "Positive\n";
    }
    
    int arr[] = {1, 2, 3}; // static array
    for (int v: arr){
        std::cout << v << "\n";
    }
    
    // dynamic array
    std::vector<int> v = {1, 2, 3};
    v.push_back(4);
    for (int x : v){
        std::cout << x << "";
    }
    
    Point p{10, 20};
    
    // string
    std::string name = "nishu";
    name.size();
    
    // pointers
    int x = 10;
    int& ref = x;
    ref = 20;
    
    int* as = &x;
    *as = 19;
    
    // arrays
    
    return add(1, 2);
}
