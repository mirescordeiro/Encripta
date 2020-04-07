import cipher from './cipher.js';

// Palavra

let word = document.getElementById("word");


// Deslocamento

let offset = document.getElementById("offset");


// Botão Cifrar

const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    document.getElementById("displayOutcome").innerHTML = `PISTA: ${cipher.encode(offset.value, word.value)}`;
}

buttonCipher.addEventListener("click", encipher);

/*
// Botão Decifrar

const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    document.getElementById("displayOutcome").innerHTML = `SOLUÇÃO: ${cipher.decode(offset, string)}`;
}

buttonDecipher.addEventListener("click", decipher);

*/