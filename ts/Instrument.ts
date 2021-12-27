abstract class Instrument {
  public manufacture: string;
  public model: string;
  public color: string;

  constructor(manufacture: string, model: string, color: string) {
    this.manufacture = manufacture;
    this.model = model;
    this.color = color;
  }

  displayDetales(){
      console.log(this)
  }
  
}
