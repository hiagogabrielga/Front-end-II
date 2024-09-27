const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];
function estruturarBase(){
    const body = document.querySelector('body');
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    body.appendChild(header)
    header.appendChild(nav)
    nav.appendChild(ul)
}

function estruturacaoAncora(){
    itensMenu.forEach(item => {
        const ul = document.querySelector('ul');
        const li = document.createElement('li')
        ul.appendChild(li)
        const ancora = document.createElement('a');
        ancora.setAttribute('href', item.url);
        ancora.setAttribute('target', '_blank')
        ancora.textContent = item.nome;
        li.appendChild(ancora)
        ancora.style.color = "white"
        ancora.style.textDecoration = "none"
        ancora.style.textTransform = "uppercase"
    })
}

function estilizacao(){
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    header.style.backgroundColor = "#071D41";
    header.style.fontFamily = "Arial";
    ul.style.display = "flex";
    ul.style.alignItems = "center";
    ul.style.justifyContent = "center";
    ul.style.height = "40px";
    ul.style.gap = "20px";
    ul.style.listStyleType = "none";
}

function main(){
    estruturarBase();
    estruturacaoAncora();
    estilizacao();
}
