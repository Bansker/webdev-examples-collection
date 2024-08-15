const btnPlay = document.querySelector('.btn-play');
const sound = document.querySelector('.sound');
btnPlay.textContent = 'PLAY';

/* let context = new AudioContext();
let osc = context.createOscillator();
let gain = context.createGain();

osc.type = 'sine';
osc.frequency.value = 130.8;

osc.start(0); */

btnPlay.addEventListener('click', () => {
  sound.addEventListener('mouseover', () => gain.connect(context.destination));

  sound.addEventListener('mouseout', () => gain.disconnect(context.destination));

  let context = new AudioContext();
  let osc = context.createOscillator();
  osc.type = 'sine';
  let gain = context.createGain();
  osc.connect(gain);
  osc.frequency.value = 261.63; //Play middle C
  osc.start();
});



/* btnPlay.addEventListener('click', (e) =>{

  if(e.target.textContent == 'PLAY') {
    e.target.textContent = 'STOP';
    osc.connect(gain);
    gain.connect(context.destination);


  } else {
    e.target.textContent = 'PLAY';
    osc.disconnect(gain);
    gain.disconnect(context.destination);

  }
}); */
