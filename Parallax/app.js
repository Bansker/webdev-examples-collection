const wrapper = document.querySelector('.plx-wrapper');
const out = document.querySelector('.out');
 
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

const colors = ['red', 'green', 'blue', 'orange', 'cornflowerblue', 'rebeccapurple'];

function getRand(range) {
  posNegRand = Math.random() > 0.5 ? 1: -1;
  randRange = Math.floor(Math.random() * range);
  return posNegRand * randRange;
}

out.textContent = getRand(15);

let dots = [];
for(let i = 0; i < 10; i++) {
  let dimension = 30;
  let randColor = colors[Math.floor(Math.random() * colors.length)]
  let randWidth = Math.floor(Math.random() * winWidth);
  let randHeight = Math.floor(Math.random() * winHeight);
  
  dots[i] = document.createElement('div');
  dots[i].setAttribute('value', `${getRand(15)}`);
  dots[i].setAttribute('style', `width: ${dimension}px;
                                 height: ${dimension}px;
                                 transform: translate(${randWidth}px, ${randHeight}px);
                                 background-color: ${randColor};
                                 border-radius: 1rem;`);
  wrapper.appendChild(dots[i]);
}

wrapper.addEventListener('touchmove', (event) => {
  dots.forEach((dot) => {
    const position = dot.getAttribute('value');
    const x = (winWidth - event.touches[0].pageX * position) / 90;
    const y = (winHeight - event.touches[0].pageY * position) / 90;
    
    dot.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});


