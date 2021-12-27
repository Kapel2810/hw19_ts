//////////////////////////////////////
//----------ex 1 ------------

const getRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max);
};

let instrument: Instrument;
let randomInstrument = getRandomNumber(10);
if (randomInstrument % 2 === 0) {
  let guitar = new Guitar("Martin", "classic", "natural", 6);
  instrument = guitar;
  console.log(instrument.displayDetales());
} else if (randomInstrument % 3 === 0) {
  let drum = new Drum("Pearl", "snare", "metalic", 36);
  instrument = drum;
  console.log(instrument.displayDetales());
} else if (randomInstrument % 5 === 0) {
  let piano = new Piano("Yamaha", "electronic", "black", 88);
  instrument = piano;
  console.log(instrument.displayDetales());
} else {
  let grandPiano = new GrandPiano("Yamaha", "grand", "black", 88, 1.5);
  instrument=grandPiano
  console.log(grandPiano.displayDetales())
}
