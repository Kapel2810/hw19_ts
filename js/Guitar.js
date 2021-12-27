class Guitar extends Instrument {
    constructor(manufacture, model, color, totalStrings) {
        super(manufacture, model, color);
        this.totalStrings = totalStrings;
    }
    displayDetales() {
        super.displayDetales();
        console.log(`total amoumt strings: ${this.totalStrings}`);
    }
}
