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
const textOutput = document.querySelector(".textOutput");
const message = document.querySelector(".message");
const buttonCopy = document.querySelector(".copy")
const codigo = [["e", "enter"],
                ["i", "imes"],
                ["a", "ai"],
                ["o", "ober"],
                ["u", "ufat"],];

function btnEncrypt(){
    const textEncrypted = encrypt(textInput.value);
    textOutput.value = textEncrypted;
    console.log("textEncrypted: "+typeof textEncrypted.value)
    // textOutput.style.backgroundImage = "none";
    message.style.display = "none";
    buttonCopy.style.display = "flex";
    textInput.value = "";    
}

function btnDecrypt(){
    const textDencrypted = decrypt(textInput.value);
    textOutput.value = textDencrypted;
    message.style.display = "none";
    textOutput.style.backgroundImage = "none";
    textInput.value = ""; 
}

function copy() {
    textOutput.select();
    navigator.clipboard.writeText(textOutput.value)
    console.log("textOutput.value : "+textOutput.value)
    textInput.value = textOutput.value;
    textOutput.value = "";
    message.style.display = "block";
    // textOutput.style.backgroundImage = "url(assets/Muñeco.png)";
}

function encrypt(textInput) {
    if(textInput){
        let textOutput = textInput
                            .toLowerCase()
                            .replace(/[^a-z ]/g, "");
        for (let i = 0; i < codigo.length; i++) {
            console.log("vuelta nº"+i+" del for : textInput: "+textInput+" textOutput :"+textOutput)
            if (textOutput.includes(codigo[i][0])) {
                textOutput = textOutput
                .replaceAll(codigo[i][0], codigo[i][1]);
            }
        }
        return textOutput;
    }
    return "";
}

function decrypt(textInput) {
    if(textInput){
        let textOutput = textInput
                            .toLowerCase()
                            .replace(/[^a-z ]/g, "");
        for (let i = 0; i < codigo.length; i++) {
            if (textOutput.includes(codigo[i][1])) {
                textOutput = textOutput
                                .replaceAll(codigo[i][1], codigo[i][0]);
            }
        }
        return textOutput;
    }
    return "";
}
