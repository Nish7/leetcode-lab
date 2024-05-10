// meta:
// s and t and if the s and t can have different words with different occurences of the letter

// approach:
// will use a **map** to create/record a key-val pair of the occurennces of each char in the the word s and t and then
// compare each key if exist in the comparing (t) word occurence_map then check if occurence_val is the same
// if same continue else return false
// keep doing for all the keys in the s word occurence_map
// after that it would true

function isAnagram(s: string, t: string): boolean {
  const occ_a = new Map<string, number>();
  const occ_b = new Map<string, number>();

  // s occurence
  for (let i of s) {
    occ_a.set(i, (occ_a.get(i) ?? 0) + 1);
  }

  for (let i of t) {
    occ_b.set(i, (occ_b.get(i) ?? 0) + 1);
  }

  if (occ_a.size != occ_b.size) return false;

  // loop each keys in the a occurence map
  for (let k of occ_a.keys()) {
    if (!occ_b.has(k) || occ_b.get(k) != occ_a.get(k)) return false;
  }

  return true;
}

// time complexity: O(n)
// space complexity: O(n)

console.log(isAnagram("anagram", "nagaram")); // should return true
console.log(isAnagram("rat", "car")); // should return false
