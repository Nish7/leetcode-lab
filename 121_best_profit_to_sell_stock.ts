//prices = [1,3,2,8,4,9], fee = 2

function maxProfit_one(prices: number[]): number {
  let h = -prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; i++) {
    h = Math.min(h, profit - prices[i])
    profit = Math.max(profit, h + prices[i])
  }

  // time complexity: o(n)
  // space complexity: o(1)
  return profit
}

maxProfit([1, 3, 4, 8, 4, 9], 2)

// buy - 1
// selling = 8
// profit = 7 -2 = 5

// buy - 4
// seeling - 9
// profit = 5 -2  = 3

// 5+3 = 8

// max = -1, 0 - 3 = -3 == -1
// max = 0 , -1 + 3 - 2 == 0

// max = -1, 0 - 2 == -1
// max = 0, -1 + 2 -2 == 0

// max = -1, 0 - 8 = -1
// max = 0, -1 + 8 - 2 == 5

// max = -1, 5 - 4 = 1
// max = 5, 1 + 9 - 2 = 8
