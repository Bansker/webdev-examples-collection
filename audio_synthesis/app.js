function l(x) {
  console.log(x);
}

const btnActivate = document.querySelector('.btn-activate');
const rangeFreq = document.querySelector('.range-freq');
const outFreq = document.querySelector('.out-freq');




btnActivate.addEventListener('click', (e) => {
  e.target.textContent = 'Active';

  let context = new AudioContext();
  let osc = context.createOscillator();
  let gain = context.createGain();

  osc.type = 'sine';
  osc.connect(gain);
  osc.frequency.value = 261.63; //Play middle C
  gain.gain.value = 0;
  gain.connect(context.destination);
  osc.start();



/*   let lfo = context.createOscillator()
  let lfoGain = context.createGain()

  lfo.type = 'sine';
  lfo.connect(lfoGain);
  lfo.frequency.value = .5;
  lfoGain.connect(context.destination);
  lfo.start() */




  document.addEventListener('keydown', (e) => {
    if(e.key == 'a') {
      gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.05)
      l(osc.frequency.value);
    }
  });
  
  document.addEventListener('keyup', (e) => {
    if(e.key) {
      gain.gain.linearRampToValueAtTime(0.00001, context.currentTime + 0.05)
    }
  });

  rangeFreq.addEventListener('input', (e) => {
    outFreq.textContent = e.target.value;
    osc.frequency.value = e.target.value;
  });
});




/* btnActivate.addEventListener('click', (e) =>{

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
