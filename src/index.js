import cipher from './cipher.js';

// Mensagem

let message = document.getElementById("message");


// Deslocamento

let offset = document.getElementById("offset");


// Botão Cifrar

const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    document.getElementById("displayOutcome").innerHTML = `<strong>Pista</strong><br> ${cipher.encode(offset.value, message.value)}`;
}

buttonCipher.addEventListener("click", encipher);


// Botão Decifrar

const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    document.getElementById("displayOutcome").innerHTML = `<strong>Solução</strong><br> ${cipher.decode(offset.value, message.value)}`;
}

buttonDecipher.addEventListener("click", decipher);

