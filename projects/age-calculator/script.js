// Iniciando variável
let userInput = document.querySelector('#date')
let result = document.querySelector('#result')

// Colocando data máxima no input
userInput.max = new Date().toISOString().split("T")[0]

// Calculando a idade
function calcular(){
    // Armazenando data atual
    let today = new Date()
    let dia = today.getDate()
    let mes = today.getMonth() + 1
    let ano = today.getFullYear()

    // Armazenando aniversário do usuário
    let aniversario = new Date(userInput.value)
    let diaA = aniversario.getDate()
    let mesA = aniversario.getMonth() + 1
    let anoA = aniversario.getFullYear()

    // Fazendo calculo da idade
    let d, m, y     // dia, mes, ano da idade

    y = ano - anoA
    if(mes >= mesA){
        m = mes - mesA
    }else{
        y--
        m = 12 + mes - mesA
    }

    if(dia >= diaA){
        d = dia - diaA
    }else{
        m--
        d = getDaysInMonth(anoA, mesA) + dia - diaA
    }

    if(m < 0){
        m = 11
        y--
    }

    // Mostrar resultado da idade
    result.innerHTML = `Você têm <strong>${y} anos</strong>, <strong>${m} meses</strong> e <strong>${d} dias</strong>.`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}
