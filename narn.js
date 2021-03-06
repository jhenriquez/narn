var simple = ['','one','two','three','four','five','six','seven','eight','nine','ten',
	'eleven','twelve','thirdteen','fourteen','fiveteen','sixteen','seventeen','eighteen','nineteen'];
var niners = ['','','twenty','thirty','fourty','fivety','sixty','seventy','eighty','ninety'];
var biggies = ['','','','hundred','thousand'];

var number = process.argv[2];

function narrate(digit, acc) {
	if(digit < 20) return (acc + simple[digit]).trim();
	if(digit < 100) return narrate(digit % 10,acc + niners[Math.floor(digit/10)] + ' ');

	if(digit < 10000) {
		var length = (digit + '').length;
		var number = Number((digit + '')[0]);
		var remaining = Number((digit + '').slice(1, (digit + '').length));
		return narrate(remaining, acc + simple[number] + ' ' + biggies[length] + ' ');
	}

	if(digit < 1000000) {
		return acc + narrate(digit % 1000, narrate(Math.floor(digit / 1000), '') + ' thousand ');
	}

	if(digit < 1000000000) {
		return narrate(digit % 1000000, narrate(Math.floor(digit / 1000000), '') + ' million ');
	}

	return "Uff! Can't handle it!";
}

console.log(narrate(number,''));