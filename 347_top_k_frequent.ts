// approach: make a frequence map, then sort the values from the frequence map and then get the top k

function topKFrequent(nums: number[], k: number): number[] {
  let m = new Map<number, number>();

  for (let i of nums) {
    const m_val = m.get(i);

    if (m.has(i) && m_val != undefined) {
      m.set(i, m_val + 1);
      continue;
    }

    m.set(i, 1);
  }

  //convert this 2d array
  // [[1,2], [2,2], [3,1]]
  const m_arr = [...m.entries()];

  // sort the array based on the 1st index
  m_arr.sort((a, b) => b[1] - a[1]); // n log n

  let r: number[] = [];

  for (let i = 0; i < k; i++) {
    r.push(m_arr[i][0]);
  }

  return r;
}

topKFrequent([1, 1, 2, 2, 3], 2);

// time complexity: O(n log n)
// space complexity: O(n)
