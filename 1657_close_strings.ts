function closeStrings(word1: string, word2: string): boolean {
  let map1 = new Map<string, number>();
  let map2 = new Map<string, number>();
  let s1 = new Set([...word1]);

  if (word1 == word2) return true;

  // validates the chars match
  let s2 = new Set([...word2]);
  if (s1.size !== s2.size) return false;
  if (![...s1].every((i) => s2.has(i))) return false;

  for (let word of word1) {
    map1.set(word, (map1.get(word) ?? 0) + 1);
  }

  for (let word of word2) {
    map2.set(word, (map2.get(word) ?? 0) + 1);
  }

  const map2Vals = [...map2.values()];
  const map1Vals = [...map1.values()];

  if (map2Vals.length !== map1Vals.length) return false;

  map1Vals.sort();
  map2Vals.sort();

  // validates the frequency of chars are close enoguh
  if (!map1Vals.every((val, i) => map2Vals[i] == val)) return false;

  return true;
}

console.log(closeStrings("aa", "a"));
