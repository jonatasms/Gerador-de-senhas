//aqui são variáveis globais que estão sendo utilizadas em contextos intrinsecos
const inputEl = document.querySelector("#password")
const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#number-check")
const symbolCheckEl = document.querySelector("#symbol-check")

let passwordLength = 16

//aqui a equação principal que gera os caracteres amistosos com um evento laço de repetição "for". 
function generatePassword() {
    let chars = 
    "abcdefghjkmnpqrstuvwxyz"
    
    const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numberChars = "123456789"
    const symbolChars = "?!@&*()[]"
    
    if(upperCaseCheckEl.checked){
        chars += upperCaseChars
    }
    if(numberCheckEl.checked){
        chars += numberChars
    }
    
    if(symbolCheckEl.checked) {
        chars += symbolChars
    }

    let password =""

    for (let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber +1)
    }

    
    inputEl.value = password

    

}

/*nesse momento as senhas já estão sendo feradas e agora vai ser posta no input range e 
..a cada deslize do range uma nova senha é posta pela função principal
*/
const passwordLengthEl = document.querySelector("#password-length")
passwordLengthEl.addEventListener("input", function(){
    passwordLength = passwordLengthEl.value
    document.querySelector("#password-length-text").innerText = passwordLength
    generatePassword()


})
upperCaseCheckEl.addEventListener("click", generatePassword)
numberCheckEl.addEventListener("click", generatePassword)
symbolCheckEl.addEventListener("click", generatePassword)

//criando uma função para o botão copiar baseado na api do navegador
function copy (){
    navigator.clipboard.writeText(inputEl.value)
}

//adicionando um evento ao ato de clicar o botão ele copiar o valor da função copy
document.querySelector("#copy1").addEventListener("click", copy)
document.querySelector("#copy2").addEventListener("click", copy)
//adicionando um evento ao clicar no botão com a imagem de recarregar ele gere uma nova senha 
document.querySelector("#renew").addEventListener("click", generatePassword)




generatePassword()