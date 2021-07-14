const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(1200,900);
  engine= Engine.create();
  world = engine.world;
  var ball_options = {
	isStatic:false,
    restitution:0.3,
    friction:0,
	desity:1.2,
  }
  
  ground = new Ground(width/2,670,width,20);
  leftside = new Ground(1100,600,20,120);
  rightside = new Ground(1000,600,20,120)
  ball = Bodies.circle(600,400,10,ball_options);
  World.add(world,ball);
  
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  leftside.display();
  rightside.display();
  ground.display();
}
function keyPressed(){
	if(keyCode==UP_ARROW){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-(0.01)});
	}
  }


