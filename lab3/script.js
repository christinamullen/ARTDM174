const go_1 = document.querySelector('.go1');
const go_2 = document.querySelector('.go2');
const h1 = document.querySelector('.horse1');
const h2 = document.querySelector('.horse2');

go_1.addEventListener('click', (e) => { 
    h1.classList.toggle('mover1');});
go_2.addEventListener('click', (e) => { 
    h2.classList.toggle('mover2');});