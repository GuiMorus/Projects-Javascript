// Iniciando variáveis
const btn = document.querySelector('#btn')
const btnX = document.querySelector('#btnx')
const quote = document.querySelector('blockquote')
const span = document.querySelector('span')
let autor = ''
let traduzida = ''

// Iniciando frase ao primeiro loading
gerarFrase()

// Listening Botão
btn.addEventListener('click', gerarFrase)
btnX.addEventListener('click', share)

// API de quotes
async function gerarFrase() {
    try{
        // Consultando API de frases
        const res = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random")
        const data = await res.json()

        const frase = data.quote
        autor = data.author

        // Traduzindo citação
        traduzida = await traduzirTexto(frase)

        // Mostrando frases no app
        quote.innerHTML = traduzida
        span.innerHTML = autor

    }catch(erro){
        console.error("Erro: ", erro)
    }
}

// API de tradução
async function traduzirTexto(texto) {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt-br`)
    const data = await res.json()

    return data.responseData.translatedText
}

// API para postar no X
function share(){
    const texto = `"${traduzida}"\n\n— ${autor}`
    const url = `https://x.com/intent/post?text=${encodeURIComponent(texto)}`
    window.open(url, "_blank", "noopener, noreferrer, width=600, height=400")
}
