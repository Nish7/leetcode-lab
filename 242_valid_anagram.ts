// The Approach: WE are going to make a hash table for occurences of each s and t.
//  and then compare for each key that it exists and has the same occurence frequency.
function isAnagram(s: string, t: string): boolean {
  let map = new Map<string, number>();
  let map2 = new Map<string, number>();

  for (let ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (let ch of t) {
    map2.set(ch, (map2.get(ch) ?? 0) + 1);
  }

  if (map.size != map2.size) return false;

  for (let k of map.keys()) {
    if (!map2.has(k) || map2.get(k) != map.get(k)) return false;
  }

  return true;
}

// time complexity: O(n)
// space complexity: O(n)
