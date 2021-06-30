//burger bars
let navBarLinks = document.getElementById('links');
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click',function(){
    navBarLinks.classList.toggle('active');
})