class GrandPiano extends Instrument {
    constructor(manufacture, model, color, totalKey, length) {
        super(manufacture, model, color);
        this.totalKey = totalKey;
        this.length = length;
    }
    displayDetales() {
        super.displayDetales();
        console.log(`tre total number of keys is: ${this.totalKey} and the length is ${this.length}`);
    }
}
