const track1  = document.querySelector('.track1');
const track2  = document.querySelector('.track2');
const point = document.querySelector('#point');

var horse1 = document.getElementById('horse1');
var horse2 = document.getElementById('horse2');

track1.addEventListener('click', (e) => {
    horse1.style.transform = `translateX(${e.clientX - 38}px)`;
    console.log(e.clientX, e.clientY);
    console.log(e);
});

horse2.addEventListener('dblclick', (e) => {
   horse2.style.transform = 'rotate(270deg)';
    //horse2.target.classList.toggle('spin');

//}); 
}, false);

track1.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY);
    point.innerHTML = `${e.offsetX}, ${e.offsetY}`;
});
