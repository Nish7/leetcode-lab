// Approach: go through each element and add a parathesis in the stack, if we do not incl
function isValid(s: string): boolean {
  // valid opening and closing parenthesis
  const map: Map<string, string> = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  const opn = [...map.keys()];
  const clo = [...map.values()];

  const stack = [];
  for (let e of s) {
    if (opn.includes(e)) {
      stack.push(e);
      continue;
    }

    if (clo.includes(e)) {
      const popV = stack.pop();
      if (popV == undefined) return false;
      const clsV = map.get(popV);
      if (clsV != undefined && clsV != e) return false;
    }
  }

  return stack.length == 0;
}

console.log(isValid("(){}[]"));
