let context = new AudioContext();
let osc = context.createOscillator();
let  gain = context.createGain();

osc.type = 'sine';
osc.frequency.value = 130.8;

osc.connect(gain);
gain.connect(context.destination);
osc.start(0);
