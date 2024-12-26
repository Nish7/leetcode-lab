from typing import List


# [10,9,2,5,3,7,101,18]
# [10,9,2,5,3,7,101,18] find the next number greater htan 10
# we find 101, [18] -> find the next number greater than 101
# 10 -> 101 -> 0
# 9 -> 101 or 9 -> 18
# 2 -> 5 -> 7 -> 101/18


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        nums = nums[::-1]
        tab = [0] * len(nums)
        for i in range(len(nums)):
            for j in range(0, i):
                if nums[i] < nums[j]:
                    tab[i] = max(tab[i], tab[j] + 1)

        return max(tab)

    def lengthOfLISBU(self, nums: List[int]) -> int:
        cache = [0] * len(nums)

        def findGreater(index):
            if cache[index]:
                return cache[index]

            max_length = 1
            for i in range(index + 1, len(nums)):
                if nums[i] > nums[index]:
                    max_length = max(max_length, 1 + findGreater(i))

            cache[index] = max_length
            return max_length

        if not nums:
            return 0

        maxl = 0
        for n in range(len(nums)):
            maxl = max(maxl, findGreater(n))

        return maxl

    def lengthOfLISNW(self, nums: List[int]) -> int:
        # this sol, ovio doesnt work, we need the order of the arr to know
        lis = 1
        nums.sort()
        print(nums)

        r = 1
        for l in range(len(nums)):
            if r == len(nums):
                break

            if nums[l] < nums[r]:
                lis += 1

            r += 1

        return lis


a = Solution().lengthOfLIS([0, 1, 0, 3, 2, 3])
# a = Solution().lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
print(a)
