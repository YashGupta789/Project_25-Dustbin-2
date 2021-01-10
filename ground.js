class Ground{
    constructor(x,y,width,height){
        var Option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,Option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("silver");
        rect(pos.x,pos.y,this.width,this.height);
    }
}
