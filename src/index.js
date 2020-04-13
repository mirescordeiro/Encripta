import cipher from './cipher.js';

// Mensagem
let message = document.getElementById("message");

// Deslocamento
let offset = document.getElementById("offset");

// Botão Reset
const buttonReset = document.getElementById("buttonReset");
buttonReset.addEventListener("click", function(){location.reload()});

// Botão Decifrar
const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    let outcomeDecipher = cipher.decode(offset.value, message.value);
    document.getElementById("displayOutcome").innerHTML = outcomeDecipher;
}

buttonDecipher.addEventListener("click", decipher);

