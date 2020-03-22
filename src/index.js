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
    let arrWords = expr.split('**********');
    let result = '';
    let buffer = '';
    arrWords.forEach(element => {
        let arrPart = element.split('');
        for(let j = 0; j < arrPart.length; j += 10){
            for (let i = j; i < j + 10; i += 2) {
                switch(arrPart[i] + arrPart[i+1]){
                    case '10': buffer += '.';
                    break;
                    case '11': buffer += '-';
                    break;
                }                
            }  
            result += MORSE_TABLE[buffer];
            buffer = ''; 
        }        
        result += " ";      
    });

    return result.trim();
}

module.exports = {
    decode
}