

let imagens = ['src/assets/img/bike-laranja.png', 'src/assets/img/bike-vermelha.png']; 
let index = 0; 
let time = 3000; 

function slideShow () {
    document.getElementById("product-image").src=imagens[index]; 
    index++; 

    if (index == imagens.length) {
        index = 0; 
    }

    setTimeout('slideshow()', time); 
}
slideShow(); 
