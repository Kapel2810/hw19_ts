class Drum extends Instrument {
    constructor(manufacture, model, color, diameter) {
        super(manufacture, model, color);
        this.diameter = diameter;
    }
    displayDetales() {
        super.displayDetales();
        console.log(`the snare diameter is: ${this.diameter}`);
    }
}
