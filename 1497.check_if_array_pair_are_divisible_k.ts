function canArrange(arr: number[], k: number): boolean {
  let hashMap = new Map<number, number>()

  for (let i = 0; i < arr.length; i++) {
    let remainder = arr[i] % k
    if (remainder < 0) remainder += k // this is the case, where arr can be negative integers; adding the k to negaitve remainder will make sure remainder is always positive int
    hashMap.set(remainder, (hashMap.get(remainder) ?? 0) + 1)
  }

  // check the special case of first
  if (hashMap.has(0) && hashMap.get(0)! % 2 !== 0) return false
  for (let i = 1; i < k; i++) {
    if (hashMap.get(i) != hashMap.get(k - i)) return false
  }

  return true
}

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5))
// approach: keep a frequ counter of the all modulo and the modulo shoudl be match the frequenecy
// freq of the 1 != 5
// why?? is that the case
// wait why ithas to be the equal the
// [0: 2,1:1,2,3,4:1]
// what it means, there is one frequency of the number with one module
// and it can only pair with the 4 which means i wasnt wrong
// 1 + 4 = 5
// and 0 + 0 = 1
// thus 0 is a special case

// for x of all list of number, for all elements,
// calcualte the mod k
// check if element with the (x mod k) - k exists in the hashmap
// if not, store in the hashmap
// in the end, check if hashmap is empty to verify if all array pairs are divisble

// [1,2,3,4,5,10,6,7,8,9], k = 5
//
//
// 1 mod 5 = 1
// 9 mod 5 = 4
//
// 2 mod 5 = 2
// 8 mod 5 = 3
//
// 3 mod 5 = 3
// 7 mod 5 = 2
//
// 5 mod 5 = 0
// 10 mod 5 = 0
//
// any number, i and x.  (i mod k) + (x mod k) = k || 0
//
// // test case 2:
// 1 mod 7 = 1
// 6 mod 7 = 6
//
// 1 mod 10 = 1
// 6 mod 10 = 6kjb
