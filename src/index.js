import cipher from './cipher.js';

// Palavra

const word = document.getElementById("word");


// Deslocamento

const offset = document.getElementById("offset");


// Botão Cifrar

const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    document.getElementById("displayOutcome").innerHTML = `PISTA: ${cipher.encode(word,offset)}`;
}

buttonCipher.addEventListener("click", encipher);


// Botão Decifrar

const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    document.getElementById("displayOutcome").innerHTML = `SOLUÇÃO: ${cipher.decode(word,offset)}`;
}

buttonDecipher.addEventListener("click", decipher);