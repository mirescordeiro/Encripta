import cipher from './cipher.js';

// Palavra

const word = document.getElementById("word").value;


// Deslocamento

const offset = document.getElementById("offset").value;


// Botão Cifrar

const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    document.getElementById("displayOutcome").innerHTML = `PISTA: ${cipher.encode(word, offset)}`;
}

buttonCipher.addEventListener("click", encipher);


// Botão Decifrar

const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    document.getElementById("displayOutcome").innerHTML = `SOLUÇÃO: ${cipher.decode(offset, string)}`;
}

buttonDecipher.addEventListener("click", decipher);

