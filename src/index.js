import cipher from './cipher.js';

let message = document.getElementById("message");

let offset = document.getElementById("offset");

const buttonReset = document.getElementById("buttonReset");
buttonReset.addEventListener("click", function(){location.reload()});

const buttonDecipher = document.getElementById("buttonDecipher");

function decipher() {
    let outcomeDecipher = cipher.decode(offset.value, message.value);
    
    if (offset.value === "") {
        return alert ("Parece que você esqueceu de preencher o deslocamento.");
    } else {
        document.getElementById("displayOutcome").innerHTML = outcomeDecipher;
    }
}

buttonDecipher.addEventListener("click", decipher);

