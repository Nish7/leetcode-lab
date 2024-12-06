import json
import pprint


class Solution:
    # return { wins: int, loses: int, team }
    def parseStanding(self, input):
        matches = json.loads(input)
        pprint.pprint(matches)
        res = {}

        for m in matches:
            home_team, away_team, winning_team = (
                m["home_team"],
                m["away_team"],
                m["winning_team"],
            )
            if not home_team in res:
                res[home_team] = {"wins": 0, "loses": 0}
            if not away_team in res:
                res[away_team] = {"wins": 0, "loses": 0}

            res[winning_team]["wins"] += 1
            if winning_team == away_team:
                res[home_team]["loses"] += 1
            else:
                res[away_team]["loses"] += 1

        print(res)
        return [
            {"team": k, "wins": res[k]["wins"], "loses": res[k]["loses"]} for k in res
        ]


input = '[{"home_team":"Cav","away_team":"Wash","winning_team":"Cav"},{"home_team":"Wash","away_team":"Cav","winning_team":"Wash"},{"home_team":"Golden","away_team":"Wash","winning_team":"Golden"},{"home_team":"Cav","away_team":"Golden","winning_team":"Cav"},{"home_team":"Cav","away_team":"Wash","winning_team":"Cav"}]'
Solution().parseStanding(input)
