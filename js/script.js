//aqui são variáveis globais que estão sendo utilizadas em contextos intrinsecos
const inputEl = document.querySelector("#password")

let passwordLength = 16

//aqui a equação principal que gera os caracteres amistosos com um evento laço de repetição "for". 
function generatePassword() {
    const chars = 
    "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"
    
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
    generatePassword()


})

//criando uma função para o botão copiar baseado na api do navegador
function copy (){
    navigator.clipboard.writeText(inputEl.value)
}

//adicionando um evento ao ato de clicar o botão ele copiar o valor da função copy
const copyButtonEl = document.querySelector("#copy")
copyButtonEl.addEventListener("click", copy)


generatePassword()