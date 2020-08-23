const cipher = {
  
  encode: function (offset, message) {
    let encipher = "";
    if (offset !== 0 && message !== ""){
      for (let l = 0; l < message.length; l++) {
        let number = Number(offset);
        let ascii = message.charCodeAt(l);
        let letters = [];
        if (65 <= ascii && ascii <= 90){
          letters = ((ascii - 65 + number) % 26) + 65;
        }
        else if (97 <= ascii && ascii <= 122){
          letters = ((ascii - 97 + number) % 26) + 97;
        }
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

  decode: function (offset, message) {
    let decipher = "";
    if (offset !== 0 && message !== ""){
      for (let l = 0; l < message.length; l++) {
        let number = Number(offset);
        let ascii = message.charCodeAt(l);
        let letters = [];
        if (65 <= ascii && ascii <= 90){
          letters = ((ascii - 90 - number) % 26) + 90;
        }
        else if (97 <= ascii && ascii <= 122){
          letters = ((ascii - 122 - number) % 26) + 122;
        }
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
