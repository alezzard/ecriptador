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
const codigo = [["e","enter"],
                ["i","imes"],
                ["a","ai"],
                ["o","ober"],
                ["u","ufat"],];