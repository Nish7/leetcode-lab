from typing import List


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # Approach: create a decision tree based on the recurisevly building all possible combinations of the numbers
        # and then if the current_sum > target; stop or current_sum == target
        # sort the function for early returning

        # sample building: [2,3] and target 6
        # Start : []
        #   Add 2: [2] = 2
        #       Add 2: [2, 2] = 4
        #           Add 2: [2,2,2] = 6
        #           Add 3: [2,2,3] = 7 !!! greater
        #       Add 3: [2,3] = 5
        #   Add 3: [3] = 3
        #       Add 3: [3,3] = 6

        res = []
        candidates.sort()

        def backtrack(current_combination, current_sum, index):
            if current_sum > target:
                return True

            if current_sum == target:
                res.append(current_combination)
                return True

            # building the possible combination if current_sum < target; basically recurse if the target is not reached
            for c in range(index, len(candidates)):  # range(0, 2)
                ch = candidates[c]
                if backtrack(current_combination + [ch], current_sum + ch, c):
                    break

            return False

        backtrack([], 0, 0)
        print(res)
        return res


if __name__ == "__main__":
    Solution().combinationSum([2, 3, 4], 6)
