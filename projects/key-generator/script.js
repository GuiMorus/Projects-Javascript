// Iniciando variáveis
const passwordBox = document.querySelector('#password')
const alerta = document.querySelector('#alerta')
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ"
const lowerCase = "abcdefghijklmnopqrstuvwxyzç"
const numeros = "0123456789"
const simbolos = "!@#$%&*()_+=-{}[]<>^~/\|?°:;,."
const all = upperCase + lowerCase + numeros + simbolos
const lenght = 16
let timeOut = null

// Gerando senha aleatória
function createKey(){
    let password = ""
    for(let i = 0; i < lenght; i++){
        password += all[Math.floor(Math.random() * all.length)]
    }

    // Adicionando senha no Input
    passwordBox.value = password
}

// Função para copiar o password do input

function copy() {

    navigator.clipboard.writeText(passwordBox.value);

    if (timeOut) {
        clearTimeout(timeOut);
        alerta.classList.remove("show");
        timeOut = null;
        return;
    }

    alerta.classList.add("show");

    timeOut = setTimeout(() => {
        alerta.classList.remove("show");
        timeOut = null;
    }, 3000);
}
