// Iniciando variáveis
const questions = [
    // Primeira Questão
    {
        question: "Qual o maior mamifero do mundo?",
        answers: [
            {text: "Tubarão", correct: false},
            {text: "Baleia Azul", correct: true},
            {text: "Elefante", correct: false},
            {text: "Girafa", correct: false}
        ]
    },

    // Segunda Questão 
    {
        question: "Qual a menor cidade do mundo?",
        answers: [
            {text: "Vaticano", correct: true},
            {text: "Nepal", correct: false},
            {text: "Acre", correct: false},
            {text: "Portugal", correct: false}
        ]
    },

    // Terceira Questão 
    {
        question: "Qual o maior deserto do mundo?",
        answers: [
            {text: "Bahia", correct: false},
            {text: "Saara", correct: false},
            {text: "Gobi", correct: false},
            {text: "Antartida", correct: true}
        ]
    },

    // Quarta Questão 
    {
        question: "Qual o menor continente do mundo?",
        answers: [
            {text: "Estados Unidos", correct: false},
            {text: "Africa", correct: false},
            {text: "Acre", correct: false},
            {text: "Austrália", correct: true}
        ]
    },
]

const questionElement = document.querySelector('#question')
const respostasBtn = document.querySelector('#respostas-buttons')
const nextBtn = document.querySelector('#next-btn')

let currentQuestionIndex = 0
let score = 0

// Funções
function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let number = currentQuestionIndex + 1

    // Mostrando Pergunta
    questionElement.innerHTML = number + ". " + currentQuestion.question

    // Gerando botões
    for(let answer of currentQuestion.answers){
    let button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = answer.text
    
    respostasBtn.appendChild(button)
    
    // Colocando data-correct dentro do botão
    if(answer.correct){
        button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selecionarResposta)
    }
}

// Resetar botões
function resetState(){
    nextBtn.style.display = 'none'
    respostasBtn.innerHTML = ''
}

// Selecionando a resposta, bloqueando botões e mostrando a correta
function selecionarResposta(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++
    }else{
        selectedBtn.classList.add('incorrect')
    }

    // Travando botões ao responder
    Array.from(respostasBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add('correct')
        }
        button.disabled = true
        button.style.cursor = 'not-allowed'
    })
    nextBtn.style.display = 'block'
}

// Mostrando proxima questão ou score final
function handleNextBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

// Mostrar página de pontuação final
function showScore(){
    resetState()
    questionElement.innerHTML = `Você acertou ${score} questões de ${questions.length}`
    nextBtn.innerHTML = "Jogar Novamente"
    nextBtn.style.display = 'block'
}

// Evento Listener no botão Next
nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextBtn()
    }else{
        startQuiz()
    }
})

// Iniciar
startQuiz()
