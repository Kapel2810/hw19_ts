class Piano extends Instrument{
    totalKey:number

    public constructor(manufacture: string, model: string, color: string, totalKey:number) {
        super(manufacture,model,color)
        this.totalKey = totalKey
    }

    displayDetales(){
        super.displayDetales()
        console.log(`the total number of keys is: ${this.totalKey}`)
    }
}