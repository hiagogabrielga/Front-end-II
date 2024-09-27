function click(){
    const urlParams = new URLSearchParams(window.location.search)
    const page = urlParams.get("nome")
    const titulo = document.createElement('h1')
    titulo.textContent = page
    body.appendChild(titulo)
}