const Out = {
  posX: document.querySelector('.js-posx'),
  posY: document.querySelector('.js-posy'),
};

const rect = document.querySelector('.rect');

//rect.addEventListener('touchstart', (e) => {});

rect.addEventListener('touchmove', (e) => {
  let xPos = e.touches[0].clientX;
  let yPos = e.touches[0].clientY;
  
  Out.posX.textContent = 'X: ' + xPos.toFixed(2);
  Out.posY.textContent = 'Y: ' + yPos.toFixed(2);
  
  rect.style.transform = `translate(${xPos-50}px, ${yPos-50}px)`;
});