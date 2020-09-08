var ball;

var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 800);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paperball(200, 750, 20)
	ground = Bodies.rectangle(600, 780, 1200, 10, { isStatic: true })

	bottomWall = new dustbin(900, 760, 180, 20)
	rightwall = new dustbin(820, 680, 20, 150)
	leftwall = new dustbin(980,680,20,150)
	World.add(world, ground)
	Engine.run(engine);

}


function draw() {

	background(0);
	Engine.update(engine)
	ball.display()
	leftwall.display()
	rightwall.display()
	bottomWall.display()
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y, 1200, 10);
	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, { x: 60, y: -60 });

	}
}


