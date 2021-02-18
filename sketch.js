
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;
var gameState
var PLAY
var END
var score=0; 


function preload(){
  
  
  monkey_running=loadAnimation            ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
}



function setup() {
  
//Monkey
  monkey = createSprite(50, 250, 10, 10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
 

//ground
  ground=createSprite(70,350,800,20)
  ground.velocityX=-3
  ground.x=ground.width /2;
  
 
  
}


function draw() {
  banana();
obstacles();
  createCanvas(400,400)
  background("white")
  
  monkey.collide(ground)
  
  //displaying survivaltime
  stroke("black");
  fill("black");
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+  survivalTime, 100, 50);
  
    
  //displaying score
  stroke("white");
    fill("white");
      textSize(20);
  text("Score:"+  score, 100, 80);
  
  if (gameState===PLAY)
    
  
     
  // //jump when the space key is pressed
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    
  
   
      
      
      
     
  
    //add gravity
    monkey.velocityY =monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
       
    }

  
  
  drawSprites();
}

function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(250,325,10,10);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.1 ;
     obstacleGroup.add(obstacle);
  }

}
