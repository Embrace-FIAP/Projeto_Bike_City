

let images = ['src/assets/img/bike-laranja.png', 'src/assets/img/bike-bege.png', 'src/assets/img/bike-branca.png']; 
let imageInd = 0; 
let intervalId = null; 

/* 
function slideShow () {
    document.getElementById("product-image").src=imagens[index]; 
    index++; 

    if (index == imagens.length) {
        index = 0; 
    }

    setTimeout(slideShow, time); 
} 
slideShow(); 
*/ 


function nextSlide() {
    imageInd++; 
    if(imageInd >= images.length) {
        imageInd = 0; 
    }
    updateImageDisplay(); 
}

function prevSlide(){
    imageInd--; 
    if(imageInd < 0) {
        imageInd = images.length - 1
    }
    updateImageDisplay(); 
}

function updateImageDisplay(){
    const imageElement = document.getElementById("product-image"); 
    if(imageElement) {
        imageElement.src=images[imageInd]
    }
}

function initializeImage(){
    updateImageDisplay(); 
}

document.addEventListener("DOMContentLoaded", initializeImage); 

function changeColor(){
    let textColor = document.getElementById("product-title"); 
    if(textColor){
        
    }

}