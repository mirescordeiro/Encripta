import cipher from './cipher.js';

// Palavra

let word = document.getElementById("word");


// Deslocamento

let offset = document.getElementById("offset");


// Botão Cifrar

const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    document.getElementById("displayOutcome").innerHTML = `<strong>Pista</strong><br> ${cipher.encode(offset.value, word.value)}`;
}

buttonCipher.addEventListener("click", encipher);


// Botão Decifrar

const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    document.getElementById("displayOutcome").innerHTML = `<strong>Solução</strong><br> ${cipher.decode(offset.value, word.value)}`;
}

buttonDecipher.addEventListener("click", decipher);

