const ME = Matter.Engine;
const MW = Matter.World;
const MBS = Matter.Bodies;
const MB = Matter.Body;
const MC = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, boat;

var cBalls = [];

var boatAnimation = [];
var boatJSON, boatPNG;

var brkBoatAnimation = []
var brkBoatJSON, brkBoatPNG;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boatPNG = loadImage("./assets/boat/boat.png");
  boatJSON = loadJSON("./assets/boat/boat.json")

  brkBoatPNG = loadImage("./assets/boat/broken_boat.png")
  brkBoatJSON = loadJSON("./assets/boat/broken_boat.json")

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = ME.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  boat = new Boat(width,height-100,200,200,0,boatAnimation);


  for(var i = 0; i < boatJSON.frames.length; i++) {
    var pos = boatJSON.frames[i].position;
    var img = boatPNG.get(pos.x,pos.y,pos.w,pos.h);
    boatAnimation.push(img);
  }

  for(var i = 0; i < brkBoatJSON.frames.length; i++) {
    var pos = brkBoatJSON.frames[i].position;
    var img = brkBoatPNG.get(pos.x,pos.y,pos.w,pos.h);
    brkBoatAnimation.push(img);
  }


}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  MB.setVelocity(boat.body, {x: -2,y: 0})

  ME.update(engine);
  ground.display();
  cannon.display();
  tower.display();
  boat.display();
  boat.animate();

  for(var i = 0; i < cBalls.length; i++) {
    showCBalls(cBalls[i],i)
  }
}

function showCBalls(ball, index) {
  ball.display();
  if(ball.body.position.x > width || ball.body.position.y > height-50) {
    MW.remove(world, ball.body);
    cBalls.splice(index, 1)
  }
} 
  
function keyReleased() {
  if(keyCode == 32){
    cBalls[cBalls.length -1].shoot();
  }
}

function keyPressed() {
  if(keyCode == 32){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    cBalls.push(cannonBall);
  }
}
