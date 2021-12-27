class Piano extends Instrument {
    constructor(manufacture, model, color, totalKey) {
        super(manufacture, model, color);
        this.totalKey = totalKey;
    }
    displayDetales() {
        super.displayDetales();
        console.log(`the total number of keys is: ${this.totalKey}`);
    }
}
