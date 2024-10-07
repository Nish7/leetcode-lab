// Problem:  You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.
function generateParenthesis(n: number) {
    const res: string[] = [];
    backtrack(n, 0, 0, '', res);
    return res;
}

function backtrack(
    n: number,
    nOpen: number,
    nClose: number,
    current: string,
    res: string[]
) {
    if (nOpen == nClose && n == nOpen) {
        res.push(current);
        return;
    }

    if (nOpen < n) backtrack(n, nOpen + 1, nClose, current + '(', res);
    if (nClose < nOpen) backtrack(n, nOpen, nClose + 1, current + ')', res);
}

console.log(generateParenthesis(3));
