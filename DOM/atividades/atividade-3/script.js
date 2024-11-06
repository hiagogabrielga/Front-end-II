function clique() {
    console.log("Botão clicado")
}


const p = document.querySelector('#meu-paragrafo')
p.onclick = () => {
    alert('Meu nome é ninguem, vim de Belém, você deu o cu para quem?')
}

function sortearElemento() {
    const listaDeImagem = [
        'https://th.bing.com/th/id/OIP.5NfLHQA3OxG0l-y1ARg7xAHaL7?w=820&h=1321&rs=1&pid=ImgDetMain', 
        'https://i.pinimg.com/736x/ae/73/db/ae73db018da07ec2d6e754a84277c5cf.jpg',
        'https://c.tenor.com/rIRtW_mQtgEAAAAC/he-man-mirrored.gif',
        'https://media1.tenor.com/images/5d56317e6dd02b3f90f0bb710d720340/tenor.gif?itemid=14769054',
        'https://i.pinimg.com/originals/3b/da/c5/3bdac5deca40585e496f229a22a28d18.gif',
        'https://i.pinimg.com/originals/8b/11/df/8b11df878794b77f3d6d6f1302d54e8f.gif',
        'https://i.makeagif.com/media/8-18-2016/58M7aO.gif',
        'https://media1.tenor.com/images/2621db7909722047cea21439c96fa529/tenor.gif?itemid=18344105',
        'https://i.pinimg.com/originals/71/2e/46/712e46bf2f71cbbc49ad5b154fc48419.jpg',
        'https://media.giphy.com/media/bC0caT4xYU8qQ/giphy.gif',
        'https://static.wikia.nocookie.net/f98eae7c-189f-413b-9b3a-518a58dff505/scale-to-width/755',
    ];

    // Sorteia um número de 1 a 10
    let numeroSorteado = Math.floor(Math.random() * 11);
    let novoNumero;
    
    do {
      novoNumero = Math.floor(Math.random() * 11);
    } while (novoNumero === numeroSorteado);
    
    numeroSorteado = novoNumero;
    
    // Pega o elemento correspondente na lista
    const elemento = listaDeImagem[numeroSorteado];
    
    // Cria o elemento de imagem
    const imagem = document.querySelector('#imagmeFodasse')
    imagem.setAttribute('src', elemento);
    imagem.setAttribute('alt', 'Imagem sorteada');
    
}