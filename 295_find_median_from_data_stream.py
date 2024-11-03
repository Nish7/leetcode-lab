# Approach: to find the median we need to maintain a two heaps structure
import heapq


class MedianFinder:
    # one with the max heap with lower half
    # second one with the min heap with maintaining upper half
    def __init__(self):
        self.lower = []  # max-heap
        self.upper = []  # min-heap

    # if the the new number to insert, n is lower than max-heap. we push it in min-heap
    # rebalance: length of the max heap always should be either greater than one or same
    # if the min-heap length is greater or imbalanced from max-heap -> rebalance
    # intution: behind the rebalance-ing is to maintain the lenght of the upper and lower
    # values are always equal
    def addNum(self, num: int) -> None:
        if not self.lower or num < -1 * (self.lower[0]):
            heapq.heappush(self.lower, -1 * num)
        else:
            heapq.heappush(self.upper, num)

        # rebalance
        if len(self.upper) > len(self.lower):
            valueToPushLower = heapq.heappop(self.upper)
            heapq.heappush(self.lower, -1 * valueToPushLower)

        if len(self.lower) - len(self.upper) > 1:
            valueToPushUpper = heapq.heappop(self.lower)
            heapq.heappush(self.upper, -1 * (valueToPushUpper))

    def findMedian(self) -> float:
        # if its balanced; we get the max heap and min-heap and return the average of the both
        leftVal = -1 * self.lower[0]
        if len(self.upper) == len(self.lower):
            rightVal = self.upper[0]
            return float((leftVal + rightVal) / 2)

        # if its imbalanced; we get the max-heap
        return leftVal
