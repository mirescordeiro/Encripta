const cipher = {
  
  // CIFRAR
  encode: function (offset, message) {
    let encipher = "";
    // Validar parâmetros
    if (offset !== 0 && message !== ""){
      // Loop da string
      for (let l = 0; l < message.length; l++) {
        let number = Number(offset);
        let ascii = message.charCodeAt(l);
        let letters = [];
        // Maiúsculas
        if (65 <= ascii && ascii <= 90){
          letters = ((ascii - 65 + number) % 26) + 65;
        }
        // Minúsculas
        else if (97 <= ascii && ascii <= 122){
          letters = ((ascii - 97 + number) % 26) + 97;
        }
        // Caracteres especiais
        else {
          letters = ascii;
        }
        encipher += String.fromCharCode(letters);
      }
      return encipher;
    } else {
      throw new TypeError;
    }
  }, 


  // DECIFRAR
  decode: function (offset, message) {
    let decipher = "";
    // Validar parâmetros
    if (offset !== 0 && message !== ""){
      // Loop da string
      for (let l = 0; l < message.length; l++) {
        let number = Number(offset);
        let ascii = message.charCodeAt(l);
        let letters = [];
        // Maiúsculas
        if (65 <= ascii && ascii <= 90){
          letters = ((ascii - 90 - number) % 26) + 90;
        }
        // Minúsculas
        else if (97 <= ascii && ascii <= 122){
          letters = ((ascii - 122 - number) % 26) + 122;
        }
        // Caracteres especiais
        else {
          letters = ascii;
        }
        decipher += String.fromCharCode(letters);
      }
      return decipher;
    } else {
      throw new TypeError;
    }
  },

};

export default cipher;
