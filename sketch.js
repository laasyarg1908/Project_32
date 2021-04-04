const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var ball, engine, world;
var ground, board;
var hoopImg, hoop;
//var score = 0;

function preload()
{
  hoopImg = loadImage("Images/hoop.png");
}

function setup()
{
  createCanvas(1400, 700);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //creating bodies
  ball = new Ball(1200, 600, 35);
  ground = new Ground(width/2, 680, width, 10);

  board = new Ground(140, 385, 10, 600);

  
}

function draw()
{
  background(225);
  
  fill("red");
  textSize(20);
  //text("Score:" + score, 700, 100);
  text("Press the space key to shoot!", 600, 100);
  
//displaying bodies
  ground.display();
  ball.display();
  board.display();

  //adding image to hoop
  imageMode(CENTER);
  image(hoopImg, 100, 370, 700, 700);
  
  drawSprites();
 
}

//moving the ball up
function keyPressed()
{
	if (keyCode === 32)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x: -110, y: -85});
	}
}
