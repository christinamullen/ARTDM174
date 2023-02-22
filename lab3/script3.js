const track1  = document.querySelector('.track1');
const track2  = document.querySelector('.track2');
const point = document.querySelector('#point');

track1.addEventListener('mousedown', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
});
track2.addEventListener('mousedown', (e) => {
    point2.innerHTML = e.offsetX + ', ' + e.offsetY;
});

var horse1 = document.getElementById('horse1');
document.body.addEventListener('click', (e) => {
    horse1.style.transform += `translateX(${e.clientX - 50}px)`;
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
}, false);
var horse2 = document.getElementById('horse2');
document.body.addEventListener('click', (e) => {
    horse2.style.transform = `translateX(${e.clientX - 50}px)`;
    
}, false);