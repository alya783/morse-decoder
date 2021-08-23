const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let words = [];
    let wordSize = 10;
    while(expr.length > 0){
         let oneWord = expr.slice(0, wordSize);
         words.push(oneWord);
         expr = expr.slice(wordSize);
    }

     let morse = [];
     for(let i = 0; i < words.length; i++){ 
        let numb = [];
        let numbSize = 2;
        while(words[i].length> 0){
            let number = words[i].slice(0, numbSize);
            if (number !== '00'){
				numb.push(number);
			}
            words[i] = words[i].slice(numbSize);
		}
        let decode = [];
		 for(let j = 0; j < numb.length; j++){
            if(numb[j] === '11'){ 
               decode.push("-");
            } else if(numb[j] === '10'){
               decode.push('.');
            }
        }
		 
		morse.push(decode.join(''));  	
    }  
    console.log(morse);

    let arr = [];
    for(let p = 0; p < morse.length; p++){
       arr.push(MORSE_TABLE[morse[p]]);
    }

    return arr.join('');
}

module.exports = {
    decode
}
