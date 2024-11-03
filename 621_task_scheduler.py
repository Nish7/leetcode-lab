from collections import deque
import heapq
from typing import Counter, List


# approach: keep a track of max heap and queue. the max heap is used to get the max eligible letter from the  and queue is to keep state of the upcoming any upcoming letter that may be pushed in the maxHeap to be eligible
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        # create a max heap out of tasks
        count = Counter(tasks)
        tasks = [-cnt for cnt in count[0]]  # -cnt for max heap

        time = 0
        heap = heapq.heapify(tasks)
        queue = deque()  # (-cnt, time)

        while heap or queue:
            if queue and queue[0][1] == time:
                heapq.heappush(heap, queue.popleft()[0])

            if heap:
                max_count = heapq.heappop(heap) + 1
                if max_count:
                    queue.append((max_count, time + n + 1))

            time += 1

        return time
