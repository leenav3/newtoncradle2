
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var roof;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;


function preload()
{
	
}

function setup() {

	createCanvas(1600, 700);
	background("black")


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof(900,200);

	bob1= new Bob(750,450,70);
	bob2= new Bob(820,450,70);
	bob3= new Bob(890,450,70);
	bob4= new Bob(960,450,70);
	bob5= new Bob(1030,450,70);

	//chain1 = new Chain(roof.body,bob1.body,0,0);  
        chain1 = new Chain(bob3.bob,roof.body,0,0);  //in your bob class you have given the property name as this.bob. So you need to use bob1.bob, instead of bob1.body
	chain2 = new Chain(bob2.bob,roof.body,-70,0); // also I have written bob first to avoid tangling of the rope. 
	chain3 = new Chain(bob4.bob,roof.body,70,0);  //also notice arrangement of the bobs. The bob in the middle is attached with chain1 at position 0,0.
	chain4 = new Chain(bob1.bob,roof.body,-140,0); 
	chain5 = new Chain(bob5.bob,roof.body,140,0);
	

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(204, 242, 255));

  Engine.update(engine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();

  


  
  drawSprites();
 
}



