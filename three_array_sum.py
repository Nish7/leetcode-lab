class Solution:
    # We have three arrays AA, BB, and CC (each of length nn), and we want to determine if there exists a triple (a,b,c)(a,b,c) with a∈Aa∈A, b∈Bb∈B, c∈Cc∈C such thatA
    # a + b + c = 0
    # It is a variation of the three sum problem
    # Approach: Transform the arr into the  * 10 with certain offeset
    # Multiply by 10: to blow up the range of the value
    # Give some certain offeset so same elements are not paired up
    # Then during the decoding -> we basically make sure always to use the original range
    # Note: Pre sorting indices are important to use to decode; thus alway
    def ThreeSum(self, arr):
        arr_with_indices = [(num, i) for i, num in enumerate(arr)]
        arr_with_indices.sort(key=lambda x: x[0])

        n = len(arr_with_indices)
        for i in range(n - 2):
            a, orig_i = arr_with_indices[i]
            j = i + 1
            k = n - 1
            while j < k:
                b, orig_j = arr_with_indices[j]
                c, orig_k = arr_with_indices[k]
                s = a + b + c
                if s < 0:
                    j += 1
                elif s > 0:
                    k -= 1
                else:
                    return (orig_i, orig_j, orig_k)
        return None

    def ThreeSumArray(self, arr1, arr2, arr3):
        d = [0] * len(arr1)
        e = [0] * len(arr2)
        f = [0] * len(arr3)
        n = len(arr1)

        for i in range(len(arr1)):
            d[i] = (arr1[i] * 10) + 1
            e[i] = (arr2[i] * 10) + 2
            f[i] = (arr3[i] * 10) - 3

        s = self.ThreeSum(d + e + f)

        if s is None:
            return None

        i_raw, j_raw, k_raw = s

        idx_D = idx_E = idx_F = None
        for idx in (i_raw, j_raw, k_raw):
            if idx < n:
                idx_D = idx
            elif idx < 2 * n:
                idx_E = idx - n
            else:
                idx_F = idx - 2 * n

        if idx_D is not None and idx_E is not None and idx_F is not None:
            return (arr1[idx_D], arr2[idx_E], arr3[idx_F])
        else:
            return None


A = [1, -2, 3]
B = [4, -1, 2]
C = [-3, -5, 6]
s = Solution().ThreeSumArray(A, B, C)
# s = Solution().ThreeSum([1, 2, 3, 4, -2, 0, 4, -3, -1])
print(s)
