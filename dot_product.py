# Define two sparse vectors. Each vector is represented as a list of index–value pairs sorted by index. Implement a data structure SparseVector with:

# a constructor taking the list of pairs
# a method dotProduct(SparseVector other) that returns the numeric dot product
# 

# dot product:
#  1 2    a b   
#  4 5    d e 
# 
# 1a + 2d 1b + 2e 
# 4a + 4d 4b + 5e
# 
# 1
# v1[0][0] * v2[0][0]  +
# v1[0][1] * v2[1][0]
# 2
# v1[0][0] * v2[0][1] +
# v1[0][1] * v2[1][1]
# 3
# v1[1][0] * v2[0][0] +
# v1[1][1] * v2[1][0]
# 4
# v1[1][0] * v2[0][1] +
# v1[1][1] * v2[1][1]
# 
    
def matmul(v1, v2):
    RowA, ColA, _, ColB = len(v1), len(v1[0]), len(v2), len(v2[0])
    C = [[0] * ColB for _ in range(RowA)]
    if ColA != ColB:
        return 
        
    for i in range(RowA):
        for j in range(ColA):
            a = v1[i][j]
            for k in range(ColB):
                C[i][k] += a * v2[j][k]
    
    return C
    
print(matmul([[1, 2], [4, 5]], [[1, 2], [3, 4]]))
