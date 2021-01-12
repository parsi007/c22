const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object;
var ground,ball;

function setup()
 {

  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create();
world=engine.world;
 object=Bodies.rectangle(200,200,50,50);
 World.add(world,object);

 var ground_option={
   isStatic:true
 }

 var ball_option = {
   restitution:1
 }
ground=Bodies.rectangle(200,380,400,10,ground_option);
World.add(world,ground);

ball=Bodies.circle(300,100,20,ball_option);
World.add(world,ball);

}

function draw() 
{
 
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50); 
  rect(ground.position.x,ground.position.y,400,10);
  circle(ball.position.x,ball.position.y,20);

 // drawSprites();
}