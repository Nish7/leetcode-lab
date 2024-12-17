class Solution:
    def numDecodings(self, s: str) -> int:
        # dp table: basically stores number way of to store a substring from s[0:i]
        # Given dp[3] = 3. which means from s[0:3] we have 3 ways to decode
        # single digit check: Go dp[4], we can re-use dp[3] if s[4-1=3] not the 0. 
        # double digit check: also we can add dp[2] if s[2:4] if more than 10 and less than 26
        dp = [0] * (len(s) + 1)
        
        dp[0] = 1 
        dp[1] = 1 
        for i in range(2, len(s) + 1):
            if s[i-1] != "0":
                dp[i] = dp[i-1]
                
            if 10 <= int(s[i-2:i]) <= 26 :
                dp[i] += dp[i-2]
                
        return dp[len(s)]
            