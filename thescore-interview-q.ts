const input =
	'[{"home_team":"Cav","away_team":"Wash","winning_team":"Cav"},{"home_team":"Wash","away_team":"Cav","winning_team":"Wash"},{"home_team":"Golden","away_team":"Wash","winning_team":"Golden"},{"home_team":"Cav","away_team":"Golden","winning_team":"Cav"},{"home_team":"Cav","away_team":"Wash","winning_team":"Cav"}]';

function NBAStanding(input: string) {
	const inp: { home_team: string; away_team: string; winning_team: string }[] =
		JSON.parse(input);
	const map = new Map<string, { wins: number; losses: number }>();

	for (const e of inp) {
		const { home_team, away_team, winning_team } = e;

		if (!map.has(home_team)) {
			map.set(home_team, { wins: 0, losses: 0 });
		}

		if (!map.has(away_team)) {
			map.set(away_team, { wins: 0, losses: 0 });
		}

		const ht_record = map.get(home_team);
		const at_record = map.get(away_team);

		if (!ht_record || !at_record) throw Error('Illegal State');

		if (winning_team == home_team) {
			ht_record.wins++;
			at_record.losses++;
		} else {
			at_record.wins++;
			ht_record.losses++;
		}
	}

	// loop through each key and val
	const res: { team: string; wins: number; losses: number }[] = [];

	for (const team of map.keys()) {
		const record = map.get(team);
		if (!record) throw Error('Invalid State');
		res.push({ team, wins: record.wins, losses: record.losses });
	}

	return res;
}

NBAStanding(input);
