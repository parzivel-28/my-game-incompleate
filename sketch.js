var riverimg,river,boy,boyimg,boat1img,boat1;
var obsticleGrp,fishGrp;
var obsticle1img,obsticle,obsticle2img,bombimg;
var fish,fish1,fish2,fish3,fish4;
var heart1,heart2,heart3,heartsimg;
var score=0;
function preload(){
riverimg=loadImage("images/riverimgp2.jpg");

boat1img=loadImage("images/cartoonimg.png");

boyimg=loadImage("images/sadboy3.png");

obsticle1img=loadImage("images/wood1.png");

obsticle2img=loadImage("images/wood2.png");

bombimg=loadImage("images/bomb.png")

heartsimg=loadImage("images/heart.png")

fish1i=loadImage("images/fish1b.png");
fish2i=loadImage("images/fish2.png");
fish3i=loadImage("images/fish3.png");
fish4i=loadImage("images/fish4.png");
}

function setup(){
createCanvas(800,600);
river=createSprite(500,300,10,10);
river.addImage(riverimg);
river.scale=1.25
river.velocityX=2;

boat1=createSprite(600,450);
boat1.addImage(boat1img);
boat1.scale=0.75
boat1.debug=true;
boat1.setCollider("rectangle",0,0,170,50);
boy=createSprite(600,400);
boy.addImage(boyimg);
boy.scale=0.25

heart1=createSprite(80,50);
heart1.addImage(heartsimg)
heart1.scale=0.1;

heart2=createSprite(120,50);
heart2.addImage(heartsimg)
heart2.scale=0.1;

heart3=createSprite(160,50);
heart3.addImage(heartsimg)
heart3.scale=0.1;

obsticleGrp = createGroup();
fishGrp=createGroup();

}
function draw(){
  background("red");
 
if(river.x>600){
 river.x=200;
}
if(keyDown(DOWN_ARROW)&&boat1.y<=550){
boat1.y=boat1.y+2;
boy.y=boat1.y-50;
}
if(keyDown(UP_ARROW)&&boat1.y>=350){
  boat1.y=boat1.y-2;
  boy.y=boat1.y-50;
  }

  if(boat1.isTouching(obsticleGrp)){
    if(heart3.visible===true){
      heart3.visible=false;
     
    }else if(heart2.visible===true){
      heart2.visible=false;
    }else if(heart1.visible===true){
      heart1.visible=false;
    }   
    obsticleGrp.destroyEach();   
  }
  if(boat1.isTouching(fishGrp)){
score=score+20;
fishGrp.destroyEach();
  }
 
spawnFish();
spawnObstacles();
  drawSprites();
  textSize(22);
  fill("black");
text("score= "+score,600,50);
}
  function spawnObstacles(){
    if (frameCount % 120 === 0){
      var obsticle = createSprite(0,350,10,40);
      obsticle.velocityX = 5;
      
       //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: obsticle.addImage(obsticle1img);
                 obsticle.scale = 0.5;
                 break;
         case 2: obsticle.addImage(obsticle2img);
                 obsticle.scale = 0.5;
                 break;
         case 3: obsticle.addImage(bombimg);
                 obsticle.scale=0.25;
                 break;
       
       }
       obsticle.y=Math.round(random(350,500));
      
       //assign scale and lifetime to the obstacle           
       
       obsticle.lifetime = 300;
      
      //add each obstacle to the group
       obsticleGrp.add(obsticle);

       obsticle.depth= boy.depth;
       boy.depth+=1;
      
    }
   }

   function spawnFish(){
    if (frameCount % 150 === 0){
      var fish = createSprite(0,350,10,40);
      fish.velocityX = 5;
      
       //generate random obstacles
       var rand = Math.round(random(1,4));
       switch(rand) {
         case 1: fish.addImage(fish1i);
                 break;
         case 2: fish.addImage(fish2i);
                 break;
         case 3: fish.addImage(fish3i);
                 break;
         case 4: fish.addImage(fish4i);
                 break;
       
       }

       fish.y=Math.round(random(350,500));
      
       //assign scale and lifetime to the obstacle           
       fish.scale = 0.25;
       fish.lifetime = 300;
      
      //add each obstacle to the group
       fishGrp.add(fish);
       fish.depth= boy.depth;
       boy.depth+=1;
       boat1.depth=boy.depth;
    }
   }
   
