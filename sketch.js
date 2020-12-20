var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1, box2, box3, packageBody,ground,world;
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
	createCanvas(800, 700);
	rectMode(CENTER);

	box1 = createSprite (300,600,20,100);
	box2 = createSprite (500,600,20,100);
	box3 = createSprite (400,650,200,20);

	box1.shapeColor="red";
	box2.shapeColor="red";
	box3.shapeColor="red";

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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  if (box3.isTouching(packageSprite)){

	Matter.Body.setStatic(packageBody,true);

  }

  drawSprites();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyDown (DOWN_ARROW)) {
	
	Matter.Body.setStatic(packageBody,false);
	
  }
}