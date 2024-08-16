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
  osc.frequency.value = 261.63; // Middle C
  gain.gain.value = 0;
  gain.connect(context.destination);
  osc.start();



  let lfo = context.createOscillator()
  let lfoGain = context.createGain()

  lfo.type = 'triangle';
  lfo.connect(lfoGain);
  lfo.frequency.value = 329.6; // Middle E
  lfoGain.gain.value = 0;
  lfoGain.connect(context.destination);
  lfo.start()




  document.addEventListener('keydown', (e) => {
    if(e.key == 'a') {
      gain.gain.linearRampToValueAtTime(1, context.currentTime + 0.05)
      lfoGain.gain.linearRampToValueAtTime(0.5, context.currentTime + 0.05)
    }
  });
  
  document.addEventListener('keyup', (e) => {
    if(e.key) {
      gain.gain.linearRampToValueAtTime(0.00001, context.currentTime + 0.05)
      lfoGain.gain.linearRampToValueAtTime(0.00001, context.currentTime + 0.05)
    }
  });

  rangeFreq.addEventListener('input', (e) => {
    outFreq.textContent = e.target.value;
    osc.frequency.value = e.target.value;
    lfo.frequency.value = e.target.value;
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
