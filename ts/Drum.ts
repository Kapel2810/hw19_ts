class Drum extends Instrument {
    diameter: number

    public constructor(manufacture: string, model: string, color: string, diameter:number){
        super(manufacture,model,color)
        this.diameter=diameter
    }

    displayDetales(){
        super.displayDetales()
        console.log(`the snare diameter is: ${this.diameter}`)
    }

}