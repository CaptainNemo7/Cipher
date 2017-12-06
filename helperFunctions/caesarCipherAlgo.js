
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//shift certain number of letters over 
let alphabetShift = (number) => {
	// new shifted alphabet 
	let shiftedAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	let removed = shiftedAlphabet.splice(0, number)
	for ( let i = 0; i < removed.length; i++ ) {
		shiftedAlphabet.push(removed[i])
	}
	return shiftedAlphabet
}

let encrypt = (string, number) => {
	if ( number > 26 || number <= 0 ) {
		alert('please enter a number 1-26');
		console.log('error: incorrect number to shift');
		return;
	}
	let encryptedString = '';
	let shiftedAlphabet = alphabetShift(number)
	let arrayOfLetters = string.toLowerCase().split('')
	for ( let i = 0; i < arrayOfLetters.length; i++ ) {
		if ( arrayOfLetters[i] === ' ' ) {
			encryptedString += ' ';
		}
		for ( let j = 0; j < alphabet.length; j++ ) {
		  if ( arrayOfLetters[i] === alphabet[j] ) {
				encryptedString += shiftedAlphabet[j]
			}
		}
	}
	return encryptedString;
}

let decrypt = (string, number) => {
	let decryptedString = '';
	let shiftedAlphabet = alphabetShift(number);
	let arrayOfLetters = string.toLowerCase().split('');
	for ( let i = 0; i < arrayOfLetters.length; i++ ) {
		if ( arrayOfLetters[i] === ' ' ) {
			decryptedString += ' ';
		}
		for ( let j = 0; j < shiftedAlphabet.length; j++ ) {
		  if ( arrayOfLetters[i] === shiftedAlphabet[j] ) {
				decryptedString += alphabet[j]
			}
		}
	}	
	return decryptedString;		
}

let bruteForce = (string) => {
	let possibleAnswers =[];
	for( let i = 1; i <= 26; i++ ) {
		possibleAnswers.push("With the cipher key number " + i + ", we get: " + decrypt(string, i));
	}
	return possibleAnswers;
}


module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;





