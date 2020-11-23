
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,tree;

function preload()
{treeImg=loadImage(tree,"Plucking mangoes/tree.png")
	
}

function setup() {
	createCanvas(800, 700);

tree=createSprite(200,400,50,100)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango=new Mango(200,500,50,50);
tree=createSprite(600,300,50,100)
tree.addImage(tree,"Plucking mangoes/tree.png");
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  mango.display();
  tree.display();
  drawSprites();
 
}



