var gameState="play"

var tower,towerimage
var monkey,monkeyimage
var doorimage


function preload () {
towerimage=loadImage("tower.png")
monkeyimage=loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
doorimage=loadImage("door.png")

}


function setup()  {
  createCanvas(600,600)
  
  tower=createSprite(300,200,20,20)
  tower.addImage(towerimage)
  tower.velocityY=3
  
  monkey=createSprite(200,200,20,20)
  monkey.addImage(monkeyimage)
  monkey.scale=0.2
  
  doorGroup=new Group();
  
  
  
  }


function draw() {
background(0)
  
  
  if(gameState==="play")  {
  if(tower.y>600)  {
    tower.y=300
  }
   
  
  if(keyDown("left_arrow"))  {
    
    monkey.x=monkey.x-3
  }
  
  if(keyDown("right_arrow"))  {

monkey.x=monkey.x+3
}
     if(keyDown("space"))  {
      monkey.velocityY=-10
      
    }
    monkey.velocityY=monkey.velocityY+0.8
  
    
       spawndoors() ;
    if(monkey.y>600)  {
      
      gameState="end"
      }
    
    
    if(monkey.isTouching(doorGroup))  {
      
      gameState="end"
      
      
    }
    
  }
    else{ if(gameState==="end")  {
      textSize(40,40)
text("game over",200,300)
    
    
    }
  }
     drawSprites();      
}



function spawndoors(){
  if(frameCount%80===0)  {
    var door=createSprite(200,-50)
    door.addImage(doorimage)
    door.velocityY=2
    door.x=Math.round(random(120,400))
    doorGroup.add(door)
    monkey.depth=door.depth
    monkey.depth=monkey.depth+1
    
  }
  }
