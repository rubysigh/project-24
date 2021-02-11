const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(850,750);
    engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(100,100);
    ground = new Ground(600,height,1200,20)
	stone = new Stone(700,600,80,90);
	 rubber = new Rubber(400,300,50);
	 sand = new Sand(500,390,10); 
	 sand1 = new Sand(500,390,10); 
	 sand2 = new Sand(300,390,10); 
	 sand3 = new Sand(300,390,10); 
	 sand4 = new Sand(350,390,10); 
	 sand5 = new Sand(50,390,10); 
	 sand6 = new Sand(100,390,10); 
	 sand7 = new Sand(700,390,10); 
	 iron = new Stone(300,600,80,60);
}

function draw(){
    background('lightblue');
    Engine.update(engine);
	ground.display();
    hammer.display();
	stone.display();
	rubber.display();
	sand.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	iron.display();
}



