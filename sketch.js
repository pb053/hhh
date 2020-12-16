
var fixedRect, movingRect;
var gameObject1, gameObject2;
var divyanshrect;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  divyanshrect = createSprite(300,300,50,20);
  divyanshrect.shapeColor = "blue";
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = 0,0,255;
  }
  else {
    movingRect.shapeColor = "green";
    divyanshrect.shapeColor = 0,255,0;
    fixedRect.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2

    ) {
    
    return true;
  }
  else {
    return false;
  } 
}


