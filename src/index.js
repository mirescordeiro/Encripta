import cipher from './cipher.js';

// Palavra

let word = document.getElementById("word");

// Deslocamento

let offset = document.getElementById("offset");


// Botão Cifrar

let buttonCipher = document.getElementById("buttonCipher");

buttonCipher.addEventListener("click", cipher.encode);


// Botão Decifrar

let buttonDecipher = document.getElementById("buttonDecipher");

buttonDecipher.addEventListener("click", cipher.decode);


// Resultado

let outcome = cipher;

document.getElementById("displayOutcome").innerHTML = outcome;