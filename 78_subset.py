from typing import List 

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # perform a dfs Solution
        # calculate the all possible combination of the subset that can be done using a binary decision tree
        # which can be build: either add or not add a single element
        # sample tree
        #                      .
        #            [1]                 []
        #      [1,2]      [1]        [2]    []
        # [1,2,3][1,2] [1,3][1]  [2,3][2] [3][]
       
       res = [] 
       subset = []
       def dfs(i: int):
           if i == len(nums):
               res.append(subset.copy())
               return

           subset.append(nums[i])
           dfs(i + 1)

           subset.pop()
           dfs(i + 1)

       dfs(0) 
       return res
