const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var dustbin;
var ball;

function preload(){
  dustbin=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
  
  ball = new Ball(150,380);
  ground = new Ground(500,450,1000,10);
  box1 = new Box(700,390,10,100);
  box2 = new Box(750,440,100,10);
  box3 = new Box(800,390,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(242,238,237);
  
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  imageMode(CENTER);
  image(dustbin,750,380,130,130);

}

function keyPressed(){
  if( keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:67,y:-65})
  }
}