from typing import List

# class Solution:
#     # permuation is where the order matters
#     def permute(self, nums: List[int]) -> List[List[int]]:
#         res = []
#         used = set()
#         def backtrack(perm):
#             if len(perm) == len(nums): 
#                 res.append(perm)
#                 return 
#
#             for i in nums:
#                 if i not in perm:
#                     used.add(i)
#                     backtrack(perm + [i])
#                     used.remove(i)
#
#         backtrack([])
#         return res


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []  # Store all permutations
        
        def backtrack(start):
            print(start)
            # Base case: If the entire list is fixed, add to result
            if start == len(nums):
                res.append(nums[:])  # Add a copy of nums
                return
            
            # Explore all possible elements for the current position
            for i in range(start, len(nums)):
                # Swap to place nums[i] in the current position
                nums[start], nums[i] = nums[i], nums[start]
                print(i, nums)
                # Recurse to fix the next position
                backtrack(start + 1)
                # Backtrack: Undo the swap to restore original state
                nums[start], nums[i] = nums[i], nums[start]
        
        backtrack(0)  # Start fixing positions from index 0
        return res

if __name__ == "__main__":
    Solution().permute([1,2,3]) 
