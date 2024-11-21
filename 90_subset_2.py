from typing import List

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = set()
        path = []
        nums.sort()

        def dfs(index):
            print(index, path)
            if len(nums) == index:
                res.add(tuple(path))
                return 

            path.append(nums[index])
            dfs(index + 1)

            path.pop()
            dfs(index + 1)

        dfs(0)
        return [list(tup) for tup in res]

    # solution from chat: fits more into the generic backtracking pattern 
    def subsets_with_duplicates(self, nums):
        def backtrack(start, path):
            print(start, path)
            # Add the current subset (path) to the result
            result.append(path[:])
            # Iterate through the remaining elements
            for i in range(start, len(nums)):
                # Skip duplicates at the same recursion depth
                if i > start and nums[i] == nums[i - 1]:
                    continue
                # Include nums[i] in the subset
                path.append(nums[i])
                backtrack(i + 1, path)
                # Backtrack: Remove the last element
                path.pop()

        # Sort the input to handle duplicates
        nums.sort()
        result = []
        backtrack(0, [])
        return result 

if __name__ == "__main__":
    print(Solution().subsets_with_duplicates([1,3,2]))
