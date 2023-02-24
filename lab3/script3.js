const track1  = document.querySelector('.track1');
const track2  = document.querySelector('.track2');
const point = document.querySelector('#point');

var horse1 = document.getElementById('horse1');

track1.addEventListener('click', (e) => {
    horse1.style.transform = `translateX(${e.clientX - 38}px)`;
    console.log(e.clientX, e.clientY);
    console.log(e);
});
//track2.addEventListener('mousedown', (e) => {
 //   point2.innerHTML = e.offsetX + ', ' + e.offsetY;
//});



/*document.body.addEventListener('click', (e) => {
    horse1.style.transform += `translateX(${e.clientX - 50}px)`;
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
}, false);*/

var horse2 = document.getElementById('horse2');
horse2.addEventListener('dblclick', (e) => {
    horse2.style.transform = 'rotate(270deg)';

    
}, false);

track1.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY);
    point.innerHTML = `${e.offsetX}, ${e.offsetY}`;
});
