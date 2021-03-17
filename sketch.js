var soldire;
var bullet;


function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-20);

    soldire = createSprite(displayWidth/2,displayHeight/2,10,10);
    soldire.scale=3.5;
    
  

   /* zombie= new Zombie(displayWidth,displayHeight);
    zombie2= new Zombie(displayWidth,displayHeight);
    zombie3= new Zombie(displayWidth,displayHeight);
    zombie4= new Zombie(displayWidth,displayHight);
    zombie5= new Zombie(displayWidth,displayHight);
    zombie6= new Zombie(displayWidth,displayHight);
    zombie7= new Zombie(displayWidth,displayHight);
    zombie8= new Zombie(displayWidth,displayHight);
    zombie9= new Zombie(displayWidth,displayHight);
    zombie10= new Zombie(displayWidth,displayHight);*/

    
   
}

function draw(){
    background(230,230,230);
  
    if(keyDown("space")){
        bullet();
    }
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-2,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(2,0);
        
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-2);
        
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+2);
    }

  

    
   /* zombie.display();
    zombie2.display();
    zombie3.display();
    zombie4.display();
    zombie5.display();
    zombie6.display();
    zombie7.display();
    zombie8.display();
    zombie9.display();
    zombie10.display();*/
    ZombieLeft();
    //ZombieRight();
   // ZombieUp();
   // ZombieDown();

    drawSprites();
}

function changePosition(x,y){
    soldire.x = soldire.x + x;
    soldire.y = soldire.y + y;
  }

 /* function ZombieRight(){
      if (World.frameCount%65===0){
          var Zombie = new zombie(displayWidth,Math.round(random(0,displayHeight-20)));
          Zombie.display();
      }
      
  }*/

  function ZombieLeft(){
      if (World.frameCount%50===0){
        //for(i= 1;i<500;i++){
          var Zombie2 = new zombieRight(0,Math.round(random(0,displayHeight-20)));
          Zombie2.display();
        //  }
      }
  }

  /*function ZombieUp(){
    if (World.frameCount%80===0){
        var Zombie = new zombieUp(Math.round(random(0,displayWidth-20)),0);
        Zombie.display();
    }
  
  }*/


 /* function ZombieDown(){
    if (World.frameCount%100===0){
        var Zombie = new zombieDown(Math.round(random(0,displayWidth-20)),displayHeight);
        Zombie.display();
    }
  
  }*/



  function bullet(){
      var bullet = createSprite (displayWidth/2,displayHeight/2,10,10);
      soldire.y = bullet.y;
      bullet.velocityX = -4;
      
  }