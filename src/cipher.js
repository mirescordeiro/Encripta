const cipher = {
  
  // CIFRAR
  encode: function (offset, message) {
    let encipher = "";
    // Validar parâmetros
    if (offset !== 0 && message !== ""){
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

/* should throw TypeError when invoked with wrong argument types (9ms)

/*

TENTATIVA 1

      for (let l = 0; l < message.length; l++) {
      let ascii = message.charCodeAt(l);
      let punctuation = (32 <= ascii && ascii <= 47) || 58 <= ascii <= 64 || 91 <= ascii <= 96 || 123 <= ascii <= 126;
      let letters = 0;

      // Maiúsculas
      if (65 <= ascii && ascii <= 90){
        letters = ((ascii - 65 + number) % 26) + 65;
      }
      
      // Minúsculas
      else if (97 <= ascii && ascii <= 122){
        letters = ((ascii - 97 + number) % 26) + 97;
      }
      
      // Pontuação
      if (ascii == punctuation){
        letters = ascii;
      }

      // Espaço
      else {
        letters = 32;
      }

TENTATIVA 2

      for (let l = 0; l < message.length; l++) {
      let ascii = message.charCodeAt(l);
      let uppercase = 0;
      let lowercase = 0;
      let space = 32;

      if (65 <= ascii <= 90){
        uppercase = ((ascii - 65 + number) % 26) + 65;
      } else if (97 <= ascii <= 122){
        lowercase = ((ascii - 97 + number) % 26) + 97;
      } else {
        space;
      }
      
      let letters = uppercase + lowercase + space;

TENTATIVA 3

      for (let l = 0; l < message.length; l++) {
      let ascii = message.charCodeAt(l);
      let letters = 0;

      // Maiúsculas
      if (65 <= ascii <= 90){
        letters = ((ascii - 65 + number) % 26) + 65;
      }
      
      // Minúsculas
      else if (97 <= ascii <= 122){
        letters = ((ascii - 97 + number) % 26) + 97;
      }
      
      // Pontuação
      else {
        letters = ascii;
      }

TENTATIVA 4

      for (let l = 0; l < message.length; l++) {
      let ascii = message.charCodeAt(l);
      let letters = 0;
      
      if (97 <= ascii <= 122){
        letters = ((ascii - 97 + number) % 26) + 97;
      } else if (65 <= ascii <= 90){
        letters = ((ascii - 65 + number) % 26) + 65;
      }


TENTATIVA 5

      // Maiúscula ou minúscula e espaço
      for (let l = 0; l < message.length; l++) {
      let number = Number(offset);
      let ascii = message.charCodeAt(l);

      // Maiúscula
      if (65 <= ascii <= 90){
        letters = ((ascii - 65 + number) % 26) + 65;
      }
      // Minúsculas
      else if (97 <= ascii <= 122){
        letters = ((ascii - 97 + number) % 26) + 97;
      }
      else {
        letters = 32;
      }

TENTATIVA 6 
    for (let l = 0; l < message.length; l++) {
      let ascii = message.charCodeAt(l);
      let uppercase = [];
      let lowercase = [];
      let letters = [];

      if (65 <= ascii <= 90){
        uppercase = ((ascii - 65 + number) % 26) + 65;
      } 
      
      if (97 <= ascii <= 122){
        lowercase = ((ascii - 97 + number) % 26) + 97;
      } 
      
      letters.concat(uppercase, lowercase);
      letters.join("");
*/