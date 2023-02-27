const baseURL = '/images/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const cats = ['tomasina.jpg', 'seuss.jpg', 'felix.jpg', 'sylvester.jpg', 'cheshire.jpg'];
let index = 0;

nxt.onclick = function(e) {
  e.preventDefault();
  
  slide.src = baseURL + cats[index];
  index += 1;
  console.log(index);
 
  //if end of array, start at beginning [0] again
  if(index >= cats.length) {
    index = 0;
  }
}
//Previous button event listener
prev.onclick = function(e) {
  e.preventDefault();
  
  slide.src = baseURL + cats[index];
  console.log(index);
  index -= 1;
  
//conditional if beginning of array is reached, go to end
  if(index < 0 ) {
    index = cats.length;
  }
}
