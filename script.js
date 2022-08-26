/* **Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 
 */

/* `La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

const textInput = document.querySelector(".textInput");
let textOutput = document.querySelector(".textOutput");
const codigo = [["e", "enter"],
["i", "imes"],
["a", "ai"],
["o", "ober"],
["u", "ufat"],];

function btnEncrypt(){
    const textEncrypted = encrypt(textInput.value);
    textOutput.value = textEncrypted;
    textOutput.style.backgroundImage = "none";
    textInput.value = "";    
}

function btnDecrypt(){
    const textDencrypted = decrypt(textInput.value);
    textOutput.value = textDencrypted;
    textOutput.style.backgroundImage = "url(assets/Muñeco.png)";
    textInput.value = ""; 
}

function copy() {
    textOutput.select();
    navigator.clipboard.writeText(textOutput.value)
    textInput.value = textOutput.value;
    textOutput.value = "";
    textOutput.style.backgroundImage = "url(assets/Muñeco.png)";
}

function encrypt(textInput) {
    textOutput = textInput
        .toLowerCase()
        .replace(/[^a-z ]/g, "");
        console.log("antes del for : textOutput :"+textOutput+" textInput: "+textInput)
    for (let i = 0; i < codigo.length; i++) {
        console.log("vuelta nº"+i+" del for : textOutput :"+textOutput+" textInput: "+textInput)
        if (textOutput.includes(codigo[i][0])) {
            console.log("if")
            textOutput = textOutput.replaceAll
                (codigo[i][0], codigo[i][1]);
        }
    }
    return textOutput;
}

function decrypt(textInput) {
    textOutput = textInput
        .toLowerCase()
        .replace(/[^a-z ]/g, "");
    for (let i = 0; i < codigo.length; i++) {
        if (textOutput.includes(codigo[i][1])) {
            textOutput = textOutput.replaceAll
                (codigo[i][1], codigo[i][0]);
        }
    }
    return textOutput;
}
