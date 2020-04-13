import cipher from './cipher.js';

// Mensagem
let message = document.getElementById("message");

// Deslocamento
let offset = document.getElementById("offset");

// Botão Reset
const buttonReset = document.getElementById("buttonReset");
buttonReset.addEventListener("click", function(){location.reload()});

// Botão Cifrar
const buttonCipher = document.getElementById("buttonCipher");

function encipher() {
    let outcomeCipher = cipher.encode(offset.value, message.value);
    document.getElementById("displayOutcome").innerHTML = outcomeCipher;
}

buttonCipher.addEventListener("click", encipher);
