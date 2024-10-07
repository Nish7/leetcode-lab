function minSubarray(nums: number[], p: number): number {
  const totalSum: number = nums.reduce((e, acc) => e + acc, 0)
  const targetRemainder: number = totalSum % p

  if (targetRemainder == 0) return 0
  let minLen = nums.length
  let map = new Map<number, number>()

  for(let i = 0; i < nums.length; i++){
    prefixSum = 
  }
}


