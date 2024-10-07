// requirement: given a string, s. u can remove either ab or cd as substr, any number of time,
// u need to return the min or left of string
// Approach: on every loop, check if the substr exits; if it does remove; keep removing and return the length
// Better Appraoch: Keep a track of the stack and if the substr mathces with target substr, pop the vlaue; else push the char to the stack
// Return the len
function minLength(s: string): number {
    let res = s
    let substr = ['AB', 'CD']

    while (containsAllSub(res, substr)) {
        for (let s of substr) {
            if (res.includes(s)) {
                let idx = res.indexOf(s)
                let a = res.split('')
                a.splice(idx, s.length)
                res = a.join('')
            }
        }
    }

    return res.length
}

function containsAllSub(s: string, subs: string[]) {
    for (let st of subs) {
        if (s.includes(st)) return true
    }

    return false
}

console.log(minLength('ABFCACDB'))
