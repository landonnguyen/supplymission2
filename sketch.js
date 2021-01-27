var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	fill ("red");
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	var options = {
		isStatic:true
	}
	leftbody = Bodies.rectangle(500,610,20,100,options)
	rightbody = Bodies.rectangle(600,610,20,100,options)
	bottombody = Bodies.rectangle(550,650,100,20,options)
	World.add(world,leftbody)
	World.add(world,rightbody)
	World.add(world,bottombody)
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect (leftbody.position.x,leftbody.position.y,20,100)
  rect (rightbody.position.x,rightbody.position.y,20,100)
  rect (bottombody.position.x,bottombody.position.y,100,20)
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false)
    
  }

    if (keyCode ===LEFT_ARROW) {
	  helicopterSprite.x = helicopterSprite.x - 20
	  translation = {x:-20,y:0}
	  Matter.Body.translate(packageBody,translation)
  }
  if (keyCode ===RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x + 20
	translation = {x:+20,y:0}
	Matter.Body.translate(packageBody,translation)
  }
}
