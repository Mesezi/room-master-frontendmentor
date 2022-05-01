let left = document.getElementById('left');
let right = document.getElementById('right');
let leftS = document.getElementById('leftS');
let rightS = document.getElementById('rightS');
let heroImage = document.getElementById('hero');
let brand = document.getElementsByClassName('hero-brand')
let index = 0
let openButton = document.getElementsByClassName('open');
let closeButton = document.getElementsByClassName('close');
let menu = document.getElementById('nav');
let menuS = document.getElementById('navS');
let body = document.body
let width = window.innerWidth;
console.log (width);


openButton[0].onclick = () => {
menuS.style.display = "inline";
menu.style.display = "none" 

}

closeButton[0].onclick = () => {
menuS.style.display = "none"
menu.style.display = "inline" 
}


function change(){

if (index == 0){
if (width > 768){
    heroImage.style.backgroundImage = 'url(images/desktop-image-hero-1.jpg)'
}
else  {
    heroImage.style.backgroundImage = 'url(images/mobile-image-hero-1.jpg)'
}



for(var i = 0; i < brand.length; i++){
    brand[i].classList.remove('show');
}
brand[index].classList.add('show');
}
else if (index == 1){
    if (width > 768){
        heroImage.style.backgroundImage = 'url(images/desktop-image-hero-2.jpg)'
    }
    else  {
        heroImage.style.backgroundImage = 'url(images/mobile-image-hero-2.jpg)'
    }
    for(var i = 0; i < brand.length; i++){
        brand[i].classList.remove('show');
    }
    brand[index].classList.add('show');
    } 

    else{
        if (width > 768){
            heroImage.style.backgroundImage = 'url(images/desktop-image-hero-3.jpg)'
        }
        else  {
            heroImage.style.backgroundImage = 'url(images/mobile-image-hero-3.jpg)'
        }
        for(var i = 0; i < brand.length; i++){
            brand[i].classList.remove('show');
        }
        brand[index].classList.add('show');
        } 

}

left.onclick = () => {
    
    if (index == 0){
        index = 2
    }
    else {
        index--
    }
    change();
}

right.onclick = () => {
    if (index == 2) {
       index = 0;
    }
    else{
        index++
    } 
    change();
    }


    leftS.onclick = () => {
    
    if (index == 0){
        index = 2
    }
    else {
        index--
    }
    change();
}

rightS.onclick = () => {
    if (index == 2) {
       index = 0;
    }
    else{
        index++
    } 
    change();
    }