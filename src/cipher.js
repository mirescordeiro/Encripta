const cipher = {
  
  // Cifrar

  encode: function encode(word, offset) {
    let encipher = "";
    let letters = "";
    for (let l = 0; l < word.length; l++) {
      letters = ((word[l].charCodeAt() - 65 + offset) % 26) + 65;
      encipher += String.fromCharCode(letters);
    }
    return encipher;
  } 
  
  // Decifrar

  //decode: function decode(word, offset) {
  //  const decipher = word  offset;
  //  return decipher;
  //}

};

export default cipher;


// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

// codigoASC => codigo0a25 => desloco => giro => codigoASC 
