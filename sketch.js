
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, paper2, paper3;
var trash1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(600, 800, 100, 20);
	paper2 = new Paper(650, 650, 20, 100);
	paper3 = new Paper(750, 650, 20, 100);
	trash1 = new Trash(250, 800, 20, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  paper2.display();
  paper3.display();
  drawSprites();
 }
 function keyDown()
 {
	 if(keyCode === UP_ARROW)
	 {
		 Matter.Body.applyforce
	 }
 }



