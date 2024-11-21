from typing import List


class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        candidates.sort()
        print(candidates)

        def backtrack(combination, current_sum, start) -> bool:
            # return bool: indicates whether to continue iteration
            print(combination, current_sum, start)
            if current_sum > target:
                return False

            if current_sum == target:
                res.append(combination)
                return False

            # iterate over the range of each
            for i in range(start, len(candidates)):
                ch = candidates[i]
                if i > start and candidates[i] == candidates[i - 1]:
                    # to avoid recomputation from we skip the all the same occurences after the first one
                    # the same computation will be done in the nested recursive call
                    continue

                if not backtrack(combination + [ch], current_sum + ch, i + 1):
                    break

            return True

        backtrack([], 0, 0)
        print(res)
        return res


Solution().combinationSum2([10, 1, 1, 1, 2, 7, 6, 1, 5], 8)()
