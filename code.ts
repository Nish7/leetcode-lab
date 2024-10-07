function standing() {
    const input =
        '[{"home_team":"Cav","away_team":"Wash","winning_team":"Cav"},{"home_team":"Wash","away_team":"Cav","winning_team":"Wash"},{"home_team":"Golden","away_team":"Wash","winning_team":"Golden"},{"home_team":"Cav","away_team":"Golden","winning_team":"Cav"},{"home_team":"Cav","away_team":"Wash","winning_team":"Cav"}]'

    const val = JSON.parse(input)
    const teams = []

    // Get all the teams
    for (let e of val) {
        const { home_team, away_team } = e
        teams.push(home_team)
        teams.push(away_team)
    }

    const sTeams = new Set(teams)

    // the wins and losses
    return [...sTeams].map((team: any) => {
        const all_matches = val.filter(
            (v: any) => v.home_team == team || v.away_team == team
        )

        const wins = all_matches.filter(
            (v: any) => v.winning_team == team
        ).length

        const loses = all_matches.length - wins

        return {
            team,
            wins,
            loses,
        }
    })
}

console.log(standing())
