const titulo = document.querySelector('h1');

console.log(titulo.innerHTML)
console.log(titulo.innerText)
console.log(titulo.textContent)

titulo.textContent = "The João Bento is a good friend"



const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.setAttribute('href', 'https://www.ifro.edu.br');
ancora.setAttribute('target', '_blank')
ancora.textContent = 'ifro';
ancora.style.color = 'f00'
body.appendChild(ancora)