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
    // write your solution here
    const arr = expr.split("**********");
    const splittedStringsArray = arr.map(word => splitString(word, 10));
      const morseToBinTable = Object.fromEntries(Object.entries(MORSE_TABLE).map(([key, value]) => [`${convertMorseKeys(key)}`, value]));
    
    const decodedWords = splittedStringsArray.map(word => {
      let decodedWord = word.map(function(letter){     
          return morseToBinTable[letter];
      }).join("");
      return decodedWord;
    });
     const resultPhrase = decodedWords.join(" ");
    console.log(resultPhrase);
    return resultPhrase;
    
   // convert morse Table to bin
    
   function convertMorseKeys(key) {
    // console.log(key);
     let symbols= key.split("");
     //console.log(symbols);
     
       let decodedSymbols = symbols.map(symbol => {
         
        if (symbol === ".") {
          symbol = symbol.replace(".", "10");
        } else if (symbol === '-') {
          symbol = symbol.replace("-", "11");
        } 
        return symbol;
      });
     const shortResult = decodedSymbols.join("");
     const result = shortResult.padStart(10, "0");
  
     return result;
     
   }
    
    
    // split string to tens
  function splitString(string, size) {
      let chunks = [];
      while (string.length > 0) {
          chunks.push(string.substring(0, size));
          string = string.substring(size, string.length);
      }
      return chunks;
  }
}

module.exports = {
    decode
}