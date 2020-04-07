const cipher = {
  
  // Cifrar

  encode: function (word, offset) {
    const encipher = "";
    for (let l = 0; l < word.length; l++) {
      let ascii = word.charCodeAt(l);
      let letters = ((ascii - 65 + offset) % 26) + 65;
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

/*
((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

codigoASC => codigo0a25 => desloco => giro => codigoASC 
*/