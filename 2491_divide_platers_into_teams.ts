function dividePlayers(skill: number[]): number {
  skill = skill.sort((a, b) => a - b)
  let sum = 0
  let r = 0
  let l = skill.length - 1
  let target = skill[r] + skill[l]
  console.log(target)

  while (r < l) {
    console.log(skill[r], skill[l])
    if (skill[r] + skill[l] != target) return -1
    sum += skill[r] * skill[l]
    r++
    l--
  }

  return sum
}

console.log(dividePlayers([3, 2, 5, 1, 3, 4]))
