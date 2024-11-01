function selecionarImagem(e) {
    document.querySelectorAll(".miniatura").forEach(miniatura => { miniatura.style.opacity = "0.4" });
    const elemento = e.target;
    document.querySelector(`#${elemento.id}`).style.opacity = "1"
    const imagemGrande = document.querySelector("#imgAmpliada");
    imagemGrande.setAttribute('src', `${elemento.src}`)
    imagemGrande.style.display = "block"
}