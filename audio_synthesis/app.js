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

  

  
  let context = new AudioContext();

  // OSC 1
  let osc1 = context.createOscillator();
  let gain = context.createGain();
  let osc1BaseNote = 261.63; // Middle C

  osc1.type = 'sine';
  osc1.connect(gain);
  osc1.frequency.value = osc1BaseNote; 
  gain.gain.value = 0;
  gain.connect(context.destination);
  osc1.start();


  // OSC 2
  let osc2 = context.createOscillator()
  let osc2Gain = context.createGain()
  let osc2BaseNote = 261.63; // Middle C

  osc2.type = 'triangle';
  osc2.connect(osc2Gain);
  osc2.frequency.value = osc2BaseNote;
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
      osc1.frequency.value = calculateFreq(osc1BaseNote, keyPosNumber);
      gain.gain.linearRampToValueAtTime(1, context.currentTime + volumeRampTime);
    } 

    // Octave up/down Transporting
    if(e.key === 'y') {
      if(osc1BaseNote > 65.41) osc1BaseNote /= 2;
    }

    if(e.key === 'x') {
      if(osc1BaseNote < 1046.52) osc1BaseNote *= 2;
    }
  });
  
  document.addEventListener('keyup', (e) => {
    if(e.key) {
      gain.gain.linearRampToValueAtTime(0.00001, context.currentTime + volumeRampTime)
      osc2Gain.gain.value = 0;
    }
  });
});

