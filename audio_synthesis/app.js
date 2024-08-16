function l(x) {
  console.log(x);
}

const btnActivate = document.querySelector('.btn-activate');
const outFreq = document.querySelector('.out-freq');

function calculateFreq(rootNoteFreq, targetNoteDelta) {
  return rootNoteFreq * Math.pow(2, targetNoteDelta / 12);
}


btnActivate.addEventListener('click', (e) => {

  let baseNote = 261.63; // Middle C

  e.target.textContent = 'Active';

  let context = new AudioContext();
  let osc = context.createOscillator();
  let gain = context.createGain();

  osc.type = 'sine';
  osc.connect(gain);
  osc.frequency.value = baseNote; 
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

  
  const volumeRampTime = 0.05;

  document.addEventListener('keydown', (e) => {
    
    switch(e.key) {
      case 'a': // C
        osc.frequency.value = baseNote; 
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'w': // C#
        osc.frequency.value = calculateFreq(baseNote, 1);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 's': // D
        osc.frequency.value = calculateFreq(baseNote, 2);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'e': // D#
        osc.frequency.value = calculateFreq(baseNote, 3);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'd': // E
        osc.frequency.value = calculateFreq(baseNote, 4);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'f': // F
        osc.frequency.value = calculateFreq(baseNote, 5);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 't': // F#
        osc.frequency.value = calculateFreq(baseNote, 6);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'g': // G
        osc.frequency.value = calculateFreq(baseNote, 7);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'z': // G#
        osc.frequency.value = calculateFreq(baseNote, 8);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'h': // A
        osc.frequency.value = calculateFreq(baseNote, 9);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'u': // A#
        osc.frequency.value = calculateFreq(baseNote, 10);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'j': // B
        osc.frequency.value = calculateFreq(baseNote, 11);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'k': // C'
        osc.frequency.value = calculateFreq(baseNote, 12);
        gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
        break;

      case 'y':
        if(baseNote > 65.41) baseNote /= 2;
        break;

      case 'x':
        if(baseNote < 1046.52) baseNote *= 2;
        break;
    }

    outFreq.textContent = osc.frequency.value + ' Hz';


/*     if(e.key == 'a') {
      gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime)
    } */
  });
  
  document.addEventListener('keyup', (e) => {
    if(e.key) {
      gain.gain.linearRampToValueAtTime(0.00001, context.currentTime + volumeRampTime)
      lfoGain.gain.value = 0;
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
