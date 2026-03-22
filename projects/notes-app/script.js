// Iniciando Variáveis e Funções
const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector("#btn")
const lista = document.querySelector('#lista')
let notes = document.querySelectorAll(".input-box")
showNotes()

// Salvando dados localmente
function updateStorage(){
    localStorage.setItem("dataNotes", lista.innerHTML)
}

// Carregando dados
function showNotes(){
    lista.innerHTML = localStorage.getItem("dataNotes")
}

// Criando elemento (nota)
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement('li')
    let btn = document.createElement('button')
    let texto = document.createElement('p')
    inputBox.className = "input-box"
    texto.setAttribute("contenteditable", "true")
    texto.className = "parag"
    inputBox.appendChild(texto)
    inputBox.appendChild(btn)
    lista.appendChild(inputBox)
})

// Remover elemento (nota)
notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName === 'P'){
        // Salvando dados a cada dígito no elemento
        notes = document.querySelectorAll('.parag')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})
