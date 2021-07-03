var bow , arrow,  background,red_balloon,green_balloon,blue_balloon,pink_balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,balloonGroup,arrowGroup;

 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);  
  //creating background
  background = createSprite(0,0,800,800);
  background.addImage(backgroundImage);
  background.scale = 25;
  
  
  bow = createSprite(1350,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 3;
  
 score=0;
  red_balloon= new Group();
  green_balloon= new Group();
  blue_balloon= new Group();
  pink_balloon= new Group();
  arrowGroup= createGroup();
}

function draw(){
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  bow.y = World.mouseY
  
  
  if (keyWentDown("space")) {
    createArrow();
  }
  
  var select_balloon=Math.round(random(1,4)); 
 
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      spawnRedBalloon();
    } else if (select_balloon == 2) {
      spawnGreenBalloon();
    } else if (select_balloon == 3) {
      spawnGreenBalloon();
    } else {
      spawnPinkBalloon();
    }
  }
  
   if(arrowGroup.isTouching(red_balloon)){
    red_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    
  }
  if(arrowGroup.isTouching(pink_balloon)){
   pink_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    
  }
  if(arrowGroup.isTouching(blue_balloon)){
    blue_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    
  }
  if(arrowGroup.isTouching(green_balloon)){
    green_balloon.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    
  }
  drawSprites();
  fill ("black")
  textSize(30)
  text("Score:"+score,265,30);
}


function spawnRedBalloon() {
  var red = createSprite(0,Math.round(random(40, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 6;
  red.lifetime = 200;
  red.scale = 0.3
  red_balloon.add(red);
  return red;
}

function spawnBlueBalloon() {
  var blue = createSprite(0,Math.round(random(40, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 6;
  blue.lifetime = 200;
  blue.scale = 0.3
  blue_balloon.add(blue);
   return red;
}

function spawnGreenBalloon() {
  var green = createSprite(0,Math.round(random(40, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 6;
  green.lifetime = 150;
  green.scale = 0.3
  green_balloon.add(green);
   return green;
}

function spawnPinkBalloon() {
  var pink = createSprite(0,Math.round(random(40, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 200;
  pink.scale = 5;
  pink_balloon.add(pink);
   return pink;
}

function createArrow() {
 var arrow= createSprite(1350, 100, 5, 10);
  arrow.addImage(arrowImage)
  arrow.x=1350;
  arrow.y=bow.y;
  arrow.velocityX = -15;
  arrow.scale = 0.9;
  arrow.lifetime=200;
   arrowGroup.add(arrow);
  return arrow;
}


