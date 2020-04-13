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

    if (offset.value === "") {
        // Mensagem de alerta
        return alert ("Parece que você esqueceu de preencher o deslocamento.");
    } else {
        document.getElementById("displayOutcome").innerHTML = outcomeCipher;
    }
}

buttonCipher.addEventListener("click", encipher);
