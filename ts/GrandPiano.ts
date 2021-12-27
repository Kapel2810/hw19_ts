class GrandPiano extends Instrument  {
  totalKey: number;
  length: number;

  public constructor(
    manufacture: string,
    model: string,
    color: string,
    totalKey: number,
    length: number
  ) {
    super(manufacture, model, color);
    this.totalKey = totalKey
    this.length= length
  }

  displayDetales() {
    super.displayDetales();
    console.log(`tre total number of keys is: ${this.totalKey} and the length is ${this.length}`);
    
  }
}
