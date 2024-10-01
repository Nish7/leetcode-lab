// approach: find the indexes of the all char in the string t,
function minWindow(s: string, t: string): string {
  let targetMap = new Map<string, number>()
  // calculate the counter for the t
  for (let ch of t) {
    targetMap.set(ch, targetMap.get(ch) || 0 + 1)
  }

  console.log(targetMap)

  let left = 0
  let required = targetMap.size
  let minWindow = [0, 0]
  // move the right until the all freq of each char is reached
  for (let right = 0; right < s.length; right++) {
    const ch = s[right]
    if (targetMap.get(ch) != undefined && targetMap.get(ch)! > 0) {
      required--
    }

    targetMap.set(ch, targetMap.get(ch) || 0 - 1)

    console.log(right, ch, targetMap, required)

    // try to contract the minWindow from the left
    if (required == 0) {
      console.log('before the while', left, s[left], targetMap)
      while (true) {
        if (targetMap.get(s[left]) == 0) break
        targetMap.set(s[left], targetMap.get(s[left]) || 0 + 1)
        left++
      }

      console.log('after the while', left, s[left], targetMap)

      //calcalate minWinDow
      if (minWindow[0] - minWindow[1] < left - right) {
        minWindow = [left, right]
      }

      targetMap.set(s[left], targetMap.get(s[left]) || 0 + 1)
      required++
      left++
    }
  }

  return minWindow[1] >= s.length ? '' : s.slice(minWindow[0], minWindow[1])
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
