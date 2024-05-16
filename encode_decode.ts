// string encode and decode

// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

// approach: each ele in the arr would be prefixed by its length and # as delimter
// encoded:  3#abc10#1234567891

// learning: always break down the question into the smaller parts to solve and then iterate over it
// ad-hoc programming; basically what i do; on-demand login creation; without design the process
// then yes, always optimise it later

// approach: keep looping until # is found, then loop until

function encode(strs: string[]): string {
  let res = "";
  for (let ele of strs) {
    res += ele.length + "#" + ele;
  }

  return res;
}

// this is not the solution
// because the number can be more one digit, you dimwit
// 2#ab1#a
// 13#abcde....x
function decode(str: string): string[] {
  let x = 0;
  let j = x;
  const res: string[] = [];

  while (x < str.length) {
    while (str[j] != "#") {
      j++;
    }

    const len: number = parseInt(str.substring(x, j));
    res.push(str.substring(j + 1, j + len + 1));

    x = j + len + 1;
    j = x;
  }

  return res;
}

const en = encode([]);
console.log(en);
console.log(decode(en));
