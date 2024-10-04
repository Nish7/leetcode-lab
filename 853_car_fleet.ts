function carFleet(target: number, position: number[], speed: number[]): number {
  const sortedTime: number[][] = position
    .map((e, i) => [e, (target - e) / speed[i]])
    .sort((a, b) => b[0] - a[0])
  let maxTime = 0
  let counter = 0
  for (let x of sortedTime) {
    if (x[1] > maxTime) {
      maxTime = x[1]
      counter++
    }
  }

  return counter
}

