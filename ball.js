class Ball{
    constructor(x,y){
       var option={
           isStatic:false,
           restitution:0.3,
           friction:5,
           density:1.2
       }
       this.body = Bodies.circle(x,y,20,option);
       this.image=loadImage("paper.png");
       World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,55,55);
    }
} 