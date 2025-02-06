class Solution:
    def MergeSort(self, arr):
        # Approach: Break down the arr into 2 sublist recurievly until they are 0 or 1 elemt
        # once they are in the base case
        # merge: we compare the small sub list element by element and return the new merged list
        # handle the leftover
        if len(arr) <= 1:
            return arr

        mid = len(arr) // 2
        l_arr = arr[:mid]
        r_arr = arr[mid:]

        # splitting
        l = self.MergeSort(l_arr)
        r = self.MergeSort(r_arr)

        # merge
        merge = []
        i = 0
        while i < mid:
            if l[i] < r[i]:
                merge.append(l[i])
                merge.append(r[i])
            else:
                merge.append(r[i])
                merge.append(l[i])

            i += 1

        # add any leftovers
        while i < len(l):
            merge.append(l[i])
            i += 1

        while i < len(r):
            merge.append(r[i])
            i += 1

        return merge


a = Solution().MergeSort([3, 2, 5, 4, 1, 2])
print(a)
