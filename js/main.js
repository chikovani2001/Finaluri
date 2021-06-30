//slider
const gallery = document.querySelector('#gallery')
const images = document.querySelectorAll('#gallery img')
const prev = document.querySelector('.buttons .prev')
const next = document.querySelector('.buttons .next')

let i = 0;

prev.onclick = function(){
    images[i].style.display = 'none';
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block' 


}

next.onclick = function(){
    images[i].style.display = 'none'
    i++;
    if(i === images.length){
        i = 0;
    }
    images[i].style.display = 'block' 
}
//go to contacts page from button
let contact = document.getElementById('contact');
contact.onclick = function(){
    window.location.pathname = "html/contact.html";
}






