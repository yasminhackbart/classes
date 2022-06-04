class paredes{
    constructor(x,y,width,height,cor){
        var config = {
            isStatic:true
        }
        this.cor = cor;
        this.parede = Bodies.rectangle(x,y,width,height,config);
        World.add(world, this.parede);

    }

    display(){
      var pos = this.parede.position;
      rectMode(CENTER);
      fill(this.cor);
      rect(pos.x,pos.y,this.width,this.height);
    }

}