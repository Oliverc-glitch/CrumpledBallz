//I have no idea how to add the images
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);




	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(600,370,1200,20);
	 paper = new Paper(200,150,70);
	 dustbin = new Dustbin(1000,360);


  
}


function draw() {
  background(180);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-80});
	}
}