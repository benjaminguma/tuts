function AddPlenty(a, b, c, ...numbers) {
	let total = 0;
	for (let el of numbers) {
		total += el;
	}

	return total;
}

let ans = AddPlenty(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(ans);
