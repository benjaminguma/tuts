function phi(table) {
	return (
		(table[3] * table[0] - table[2] * table[1]) /
		Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
	);
}
// function phi2(table) {
// 	return (
// 		(table[3] * table[0] - table[2] * table[1]) /
// 		Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]))
// 	);
// }
let place = {
	address: 'mando',
	isFine: false,
};

let thePlace = place.address;

let { address, isFine } = place;

// let address = place.address
// let isFine = place.isFine

console.log(address);

let names = ['ben', 'dami', 'abel', 'dahiru', 'ismail'];

// let someName = names[1];

let [rat, sopo, psos, ...remainingPeople] = names;

// let rat = names[0]
// let sopo = names[1]
// let psos = names[2]

console.log(sopo);

console.log(remainingPeople);

let names1 = ['a', 'b', 'c'];
let names2 = ['f', 'y', 'b'];

let combined = names1.concat(name2);
// ['a', 'b', 'c','f', 'y', 'b']

let elegantCombined = [...names1, ...names2, 90, 900];
// ['a', 'b', 'c','f', 'y', 'b',90,900]

let ob1 = {
	a: '7',
	b: '90',
};

let ob2 = {
	c: 'oeoe',
	d: false,
};

let combObj = {
	...ob1,
	...ob2,
	pig: '900',
};
// {
//     a: '7',
// 	b: '90',
//     c: 'oeoe',
// 	d: false,
// pig: 900
// }
