function characterReplacement(s: string, k: number): number {
  let chr = new Array(26).fill(0)

  let left: number = 0
  const aChrCode = 'A'.charCodeAt(0)
  let maxFreq = 0
  let res = 0

  for (let right = 0; right < s.length; right++) {
    let idx = s[right].charCodeAt(0) - aChrCode
    chr[idx]++
    maxFreq = Math.max(maxFreq, chr[idx])

    while (right - left + 1 - maxFreq > k) {
      chr[s[left].charCodeAt(0) - aChrCode]--
      left++
    }

    res = Math.max(res, right - left + 1)
  }

  return res
}
