// program to finde the base of numbers
	function base_converter(num, init_base, new_base) {
		if ((init_base && new_base) < 2 || (init_base && new_base) > 36) {
			return 'Base must be between 2 and 36';
		} else {
			var result parseInt(num + '', init_base).toString(new_base);
			return result;
		}

	}

	console.log(base_convert('E164', 34, 8));
	console.log(base_convert(1000,2,8));

	//write a javascript function to convert a binary number to a decimal number
	function binToDec(str) {
		rep = str + '';
		res = parseInt((rep).replace(/[^01]/gi, ''), 2);
		return res;
	}

	console.log('New');
	console.log(binToDec('110011'));
	console.log(binToDec('100'));

	//Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

	//solution
	function decToBHO(n, base) {
		if (n < 0) {
			n = 0xFFFFFFFF + n + 1;
		}
		switch (base){
			case 'B':
			return parseInt(n, 10).toString(2);
			break;
			case 'H':
			return parseInt(n, 10).toString(16);
			break;
			case 'O':
			return parseInt(n, 10).toString(8);
			break;
			default:
			return 'wrong input ........';

		}
	} 

	console.log(decToBHO(120, 'B'));
	console.log(decToBHO(120, 'O'));
	console.log(decToBHO(120, 'H'));

	//Write a JavaScript function to generate a random integer.

	//solution
	function randomInt(min, max) {
		if (min==null && max==null)
			return 0;

		if(max == null) {
			max = min;
			min = 0;
		}

		return min + Math.floor(Math.random() * (max - min + 1));
	}

	console.log('NEW');
	console.log(randomInt(20,1));
	console.log(Math.floor(25));
	console.log(Math.random());
	console.log(randomInt(1,10));

	//Write a JavaScript function to format a number up to specified decimal places.

	//Solution
	function decimals(n, d) {
		if((typeof n !== 'number') || (typeof d !== 'number'))
			return false;
				n = parseFloat(n) || 0;
				return n.toFixed(d);
	}

	console.log('New');
	console.log(decimals(2.100212, 2));
	console.log(decimals(2.1456156, 3));

	// /Write a JavaScript function to find the highest value in an array.

	function maxValue(input) {
		if (toString.call(input) !== '[object Array]')
			return false;
		return Math.max.apply(null, input);
	} 

	console.log(maxValue([12,34,56,1]));
	console.log(maxValue([-12,03,0,-230]));

	//write a function to find the lowest value in an array

	function minValue(input) {
		if (toString.call(input) !== '[object Array]')
			return false;
		return Math.min.apply(null, input);
	}

	console.log('New');
	console.log(minValue([-2,2,0,54]));

	//Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
	// Note: 
	// According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

	function gcdFinder(num1, num2) {
		if((typeof num1) === 'string' && (typeof num2 === 'string')){
			return 'Enter a valid number';
		} else {
			num1 = Math.abs(num1);
			num2 = Math.abs(num2);

			while(num2){
				var x = num2;
				num2 = num1 % num2;
				num1 = x;
			}
			return num1;
		}
	}

	console.log('new');
	console.log(gcdFinder(3,6));

	//Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers.

	function gcdFinderMax2(a,b,c){
		var arr = [a,b,c];
		len = arr.lenght;
		a = arr[0];
		for (var i = 1;i=len;i++){
			b = arr[i]
			a = gcdFinder(a, b);
		}
		return a;
	}

	console.log('new');
	console.log(gcdFinderMax2(3,15,27));
	console.log(gcdFinderMax2(5,10,15,25));

	//Write a JavaScript function to get the least common multiple (LCM) of two numbers.

	function lcmFinder(n1, n2){
		if((typeof n1) !== 'string' && (typeof n2) !== 'string'){
			return (!n1 || !n2) ? 0: Math.abs((n1 * n2) / gcdFinder(n1, n2));
		}
		return 'must be integer';
	}

	console.log('New');
	console.log(lcmFinder(3,15));