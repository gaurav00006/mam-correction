
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	bob1 = new Bob(360,300,20);
	bob2 = new Bob(380,300,20);
	bob3 = new Bob(400,300,20);
	bob4 = new Bob(420,300,20);
	bob5 = new Bob(440,300,20,{restitution:4});

	

	roof=new Ground(300,200,500,50);
    
    


	rope1 = new rope(bob1.body,roof.body,-80,0);
	rope2 = new rope(bob2.body,roof.body,-40,0);
	rope3 = new rope(bob3.body,roof.body,0,0);
	rope4 = new rope(bob4.body,roof.body,40,0);
	rope5 = new rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  






  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}



function keyPressed() {
	if(keyCode === UP_ARROW)
	 {
		Body.applyForce(bob1.body,bob5.body.position,{x:-20,y:-20})
	}

	
}
