var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,rec2Body,ground,rec1,rec2,rec3,rec1B,rec3B;
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
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
   rec1=createSprite(350,590, 20,150);
	rec2=createSprite(430,650, 150,20);
	
	rec3=createSprite(500,590, 20,150);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	rec1Body= Bodies.rectangle(350,590,150,20,{isStatic:true});
    World.add(world,rec1Body)
    rec3Body= Bodies.rectangle(500,590,150,20,{isStatic:true});
    World.add(world,rec3Body)
    rec2Body= Bodies.rectangle(430,650,150,20,{isStatic:true});
    World.add(world,rec2Body)
	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
   
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
 
 /* if(packageSprite.isTouching(rec2)){
  	packageBody.collide(rec2)
  }*/
  rec2.x=rec2Body.position.x
  rec2.y=rec2Body.position.y
   rec1.x=rec1Body.position.x
  rec1.y=rec1Body.position.y
   rec3.x=rec3Body.position.x
  rec3.y=rec3Body.position.y
    packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

   Matter.Body.setStatic(packageBody,false);
    
  }
}




