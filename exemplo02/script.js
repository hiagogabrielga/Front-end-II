function entrar() {
    const div = document.querySelector('#container')
    div.style.backgroundColor = 'red'
    const texto = document.querySelector('#texto')
    texto.style.color = 'white'
    texto.innerHTML = "tchau"
}

function saida(){
    const div = document.querySelector('#container')
    div.style.backgroundColor = "white"
    const texto = document.querySelector('#texto')
    texto.style.color = 'black'
    texto.innerHTML = "oi"
}