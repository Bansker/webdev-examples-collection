function l(x) {
  console.log(x);
}

const btnActivate = document.querySelector('.btn-activate');
const outFreq = document.querySelector('.out-freq');

function calculateFreq(rootNoteFreq, targetNoteDelta) {
  return rootNoteFreq * Math.pow(2, targetNoteDelta / 12);
}



btnActivate.addEventListener('click', (e) => {
  e.target.textContent = 'Active';

  let baseNote = 261.63; // Middle C

  
  let context = new AudioContext();

  // OSC 1
  let osc1 = context.createOscillator();
  let gain = context.createGain();

  osc1.type = 'sine';
  osc1.connect(gain);
  osc1.frequency.value = baseNote; 
  gain.gain.value = 0;
  gain.connect(context.destination);
  osc1.start();


  // OSC 2
  let osc2 = context.createOscillator()
  let osc2Gain = context.createGain()

  osc2.type = 'triangle';
  osc2.connect(osc2Gain);
  osc2.frequency.value = 329.6; // Middle E
  osc2Gain.gain.value = 0;
  osc2Gain.connect(context.destination);
  osc2.start()

  
  const volumeRampTime = 0.05;



  const keys = ['a',      // C  Pos 0 (Root note)
                    'w',  // C# Pos 1
                's',      // D  etc..
                    'e',  // D#
                'd',      // E
                'f',      // F
                    't',  // F#
                'g',      // G
                    'z',  // G#
                'h',      // A
                    'u',  // A#
                'j',      // B
                'k']      // C' Pos 12 (Root octave)

  document.addEventListener('keydown', (e) => {

    let keyPosNumber = keys.indexOf(e.key);

    if(keyPosNumber !== -1) {
      osc1.frequency.value = calculateFreq(baseNote, keyPosNumber);
      gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
    } 

    // Octave up/down Transporting
    if(e.key === 'y') {
      if(baseNote > 65.41) baseNote /= 2;
    }

    if(e.key === 'x') {
      if(baseNote < 1046.52) baseNote *= 2;
    }
  });
  
  document.addEventListener('keyup', (e) => {
    if(e.key) {
      gain.gain.linearRampToValueAtTime(0.00001, context.currentTime + volumeRampTime)
      osc2Gain.gain.value = 0;
    }
  });
});

