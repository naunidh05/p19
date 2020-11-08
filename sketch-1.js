var PLAY=1
var END=0
var gameState=PLAY
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0
var gravity
var bananaGroup;
var obstacleGroup;
var gameover;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  var bananagroup
  monkey=createSprite(59 ,350,30,30)
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1
  
  
 // banana=createSprite(100,250,30,30)
 // banana.addImage(bananaimage);
 // banana.scale=0.1
  
 // obstacle=createSprite(100,350,30,30)
 // obstacle.addImage(obstacleimage)
  //obstacle.scale=0.1
  
   ground = createSprite(350,390,400,10);
  
  ground.x = ground.width /2;
  ground.velocityX = -4
  
  
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
   
}


function draw() {
background("white")
  
   if(gameState===PLAY)  {
     
   
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  if(keyDown("space")&& monkey.y >= 350)   {
   monkey.velocityY=-14
  }
    monkey.velocityY=monkey.velocityY+0.8
     
     if(bananaGroup.isTouching(monkey) )     {
  bananaGroup.destroyEach();
  survivaltime=survivaltime+2
  }
   if(obstacleGroup.isTouching(monkey))  {
     gameState=END
   }
    
 spawnbanana();
  spawnobstacles();
   }
  else{
    
  if(gameState===END)  {
     bananaGroup.destroyEach();
    obstacleGroup.destroyEach();

   monkey.destroy();
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    ground.VelocityX=0;
    monkey.VelocityY=0;
    fill("red")
    text("game over",200,200)
    
  }
  }  
    
    
    
    
    monkey.collide(ground);
  
     
   
    
   
  
   
  
    

  
  
  drawSprites();
  text("survival time: "+ survivaltime, 500,50);
}

function spawnobstacles() {
   if(frameCount%80===0) {
     var obstacle = createSprite(600,365,10,40);
     obstacle.velocityX = -(6 + 3*survivaltime/100);
    obstacle.addImage(obstacleimage)
     obstacle.scale=0.1
     obstacleGroup.add(obstacle)
}
} 
 
function spawnbanana() {
  if(frameCount%80===0) {
  var banana=createSprite(600,270,10,40)
  banana.velocityX=-(6 + 3*survivaltime/100);
    banana.addImage(bananaimage)
    banana.scale=0.1 
    bananaGroup.add(banana)
}
}
    





