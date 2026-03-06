// Iniciando variáveis
const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const alerta = document.querySelector('#alerta')
let timeOut = null

// Carregando os dados
showTask()

// Função para adicionar tarefa na lista
function addTask(){
    if(inputBox.value.trim() == ''){
        // Mostrando notificação caso o input esteja vazio
        alerta.classList.add("show")
        if(timeOut === null){
            timeOut = setTimeout(() => {
                alerta.classList.remove("show")
                timeOut = null
            }, 3000)
        }

    }else{
        // Criando item na lista
        let li = document.createElement('li')
        li.innerHTML = inputBox.value.trim()
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputBox.value = ''     // Limpando o input
    salvarDados()           // Salvando os dados
}

// Verificando click na lista
listContainer.addEventListener('click', (e) => {
    // Alternar a classe dentro da <li>
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('self-checked')
        salvarDados()
    }

    // Apagando li referente
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        salvarDados()
    }
})

// Verificando se apertou Enter no input
inputBox.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTask()
    }
})

// Salvando dados locais
function salvarDados(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
