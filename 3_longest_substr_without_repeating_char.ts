function lengthOfLongestSubstring(s: string): number {
  if (s.length == 0) return 0

  let l = 0
  let r = 1
  let max = 0

  while (r <= s.length) {
    let substring = s.substring(l, r)
    if (containsDuplicate(substring)) l++
    max = Math.max(max, r - l)
    r++
  }

  return max
}

function containsDuplicate(s: string): boolean {
  let set = new Set<string>()
  for (let c of s) {
    set.add(c)
  }
  return set.size != s.length
}
