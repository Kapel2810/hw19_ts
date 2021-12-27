class Guitar extends Instrument {
    totalStrings: number

    public constructor(manufacture: string, model: string, color: string, totalStrings:number){
        super(manufacture,model,color)
        this.totalStrings=totalStrings
    }

    displayDetales(){
        super.displayDetales()
        console.log(`total amoumt strings: ${this.totalStrings}`)
    }

}