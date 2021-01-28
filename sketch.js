
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	groundObject=new ground(width/2,680,width,20);
	paperObject = new Paper(200,450,50);
	dustbinObj=new dustbin(1200,650);

	   //Create a Ground

	var render =Render.create({
		element: document.body,
		engine: engine,
		options: {
			width:600,
			height:700,
			wireframe:false
		}
	})

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 


  
   
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-140});
		

	}
}


