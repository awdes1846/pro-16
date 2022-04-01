
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
    
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(665,480)
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1
  
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
   
  
  score=0
  
}


function draw() {
background("white");
  
   text("Score:" +score,410,50)
  
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime" +survivalTime,410,60)
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach(-1)
    FoodGroup.setLifetimeEach(-1)
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  spawnObsticle(); 
   spawnFood();
  
monkey.collide(ground);
 
   

  
 drawSprites(); 
}

function spawnObsticle(){
  if (frameCount % 150 === 0) {
  obstacle=createSprite(665,325,20,20);
    
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4
  obstacle.scale=0.1
    obstacle.lifetime=200
    obstacleGroup.add(obstacle)
  }
}


function spawnFood(){
  if (frameCount % 100 === 0) {
    banana=createSprite(665,200,20,20);
  banana.addImage(bananaImage);
    banana.y=random(Math.round(200,220));
  banana.scale=0.06
  banana.velocityX=-4
    banana.lifetime=200
    FoodGroup.add(banana)
  }  
}

