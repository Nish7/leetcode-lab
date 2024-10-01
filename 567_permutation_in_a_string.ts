function checkInclusion(s1: string, s2: string): boolean {
  // approach: calculate the frequecy map of the s1; it migth be etter to char counts
  // keep calcualting the freqMap of the s2, if it matches with s1, its a match
  // do this over a fixed sliding window length (s1)
  let s1Freq = calculateFreqCounter(s1)
  let left = 0

  for (let right = s1.length - 1; right < s2.length; right++) {
    let substr = s2.substring(left, right + 1)
    let compareCounter = calculateFreqCounter(substr)
    if (compareCounter == s1Freq) return true
    left++
  }

  return false
}

function calculateFreqCounter(str: string): string {
  const re = new Array(26).fill(0)
  const aCharCode = 'a'.charCodeAt(0)

  for (let s of str) {
    const idx = s.charCodeAt(0) - aCharCode
    re[idx]++
  }

  return JSON.stringify(re)
}

console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))
