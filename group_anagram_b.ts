// meta:  str : ["ate", "tae", "eat"]
// [["ate", "tae", "eat"]]
//
// a: ate
// b: a exists once, t exists once, e exists once
// {
//      ate: ["tae", "eat"]
// }
//
// q: can you do set using the string or list of char
//
// Approach: loop through all the words and loop the each char of each word. for each char x, if x exists and if all the char in the word exists then append the word in the
// Sort the char in the javascript.
//
// Hint : use the fkn sort
function groupAnagrams(strs: string[]): string[][] {
  let m = new Map<string, string[]>();

  for (let word of strs) {
    let sorted_word = word.split("").sort().join("");

    if (m.has(sorted_word)) {
      m.get(sorted_word)?.push(word);
      continue;
    }

    m.set(sorted_word, [word]);
  }

  return Array.from(m.values());
}

//main
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
