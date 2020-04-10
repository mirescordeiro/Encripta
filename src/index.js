import cipher from './cipher.js';

// Mensagem
let message = document.getElementById("message");

// Deslocamento
let offset = document.getElementById("offset");

// Botão Cifrar
const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    let outcomeCipher = cipher.encode(offset.value, message.value);
    document.getElementById("displayOutcome").innerHTML = `<strong>Pista</strong><br> ${outcomeCipher}`;
}

buttonCipher.addEventListener("click", encipher);

// Botão Decifrar
const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    let outcomeDecipher = cipher.decode(offset.value, message.value);
    document.getElementById("displayOutcome").innerHTML = `<strong>Solução</strong><br> ${outcomeDecipher}`;
}

buttonDecipher.addEventListener("click", decipher);

