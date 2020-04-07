const cipher = {
  
  // Cifrar

  encode: function (offset, word) {
    let encipher = "";
    let number = Number(offset);
    for (let l = 0; l < word.length; l++) {
      let ascii = word.charCodeAt(l);
      let letters = ((ascii - 65 + number) % 26) + 65;
      encipher += String.fromCharCode(letters);
    }
    return encipher;
  } 
  
  /* Decifrar

  decode: function (word, offset) {
    const decipher = word  offset;
    return decipher;
  */
                      
};

export default cipher;

/* should throw TypeError when invoked with wrong argument types (9ms)

/*
((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

codigoASC => codigo0a25 => desloco => giro => codigoASC 
*/