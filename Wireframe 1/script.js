var bar = document.querySelector('#bars');
var hidden = document.querySelector('.list');

bar.addEventListener('click', e =>{
    hidden.classList.toggle('show');
});