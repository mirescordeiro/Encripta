const cipher = {
  
  // Cifrar

  encode: function (offset, word) {
    let encipher = "";
    let text = word.toUpperCase();
    let number = Number(offset);
    for (let l = 0; l < text.length; l++) {
      let ascii = text.charCodeAt(l);
      let letters = ((ascii - 65 + number) % 26) + 65;
      encipher += String.fromCharCode(letters);
    }
    return encipher;
  }, 

  // Decifrar
  decode: function (offset, word) {
    let decipher = "";
    let text = word.toUpperCase();
    let number = Number(offset);
    for (let l = 0; l < text.length; l++) {
      let ascii = text.charCodeAt(l);
      let letters = ((ascii - 90 - number) % 26) + 90;
      decipher += String.fromCharCode(letters);
    }
    return decipher;
  }

};

export default cipher;

/* should throw TypeError when invoked with wrong argument types (9ms)

/*
((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra

codigoASC => codigo0a25 => desloco => giro => codigoASC 
*/