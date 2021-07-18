var running;
var trackImage;
var leftBoundary, rightBoundary;
var track;
var runner;

function preload(){
  //pre-load images
running = loadAnimation("Runner-1.png","Runner-2.png");
trackImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImage);
  track.velocityY = 4;
    track.scale = 1.2;
  
 runner = createSprite(180,340,30,30);
  runner.addAnimation("run",running);
  runner.scale = 0.1

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

  if (track.y > 400) {
    track.y = height/2;
  }   
  
    


}

function draw() {
  background(0);
track.velocityY = 4;
runner.x = World.mouseX;
edges = createEdgeSprites;
runner.collide(edges[3]);
runner.collide(leftBoundary);
runner.collide(rightBoundary);
  

  if (track.y > 400) {
    track.y = height/2;
  }    

  drawSprites();

}
