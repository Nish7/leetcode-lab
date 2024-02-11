const sampleInput = `
bb - 217  
poopeyes - 96 
shop - 55
shop - 14
shop - 38
annalakxmi - 151
general assembly - 45
shop - 41
shop - 21
shop - 49
shop - 29
shop - 23
shop - 20
assembly  - 100
shop - 132
etihad - 145 
shop - 7
shop - 25
shop - 5
shop - 16
king - 8
rogers - 56
rogers - 56
king - 9
rogers - 56
`;

function split_wise(s: string): Map<string, number> {
	const lines = s
		.split('\n')
		.filter((e) => e !== '')
		.map((e) => e.trim());

	const map = new Map<string, number>();

	for (const l of lines) {
		const records = l.split('-');
		const name = records[0]
		const price = +records[1]

		if (!name || !price) continue;

		const mapVal = map.get(name);

		map.set(name, mapVal == undefined ? price : mapVal + price);
	}

	return map;
}

console.log(split_wise(sampleInput));
