var ballx=300;
var bally=300;
var ballSize=40; 
var score=0;
var gameState="L1";
var img;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://kaylee-g01.github.io/images/cat.png');
 //   img = loadImage('https://kaylee-g01.github.io/images/cat.png');
}


function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
}//end of setup ===============================


function draw() {
  background(220);
  // cursor(img); 
  if(gameState =="L1"){
  levelOne();
  }
  if(gameState=="L2"){
    levelTwo();
  }
  if(gameState=="L3"){
    levelThree();
  }
  if (gameState== "win"){
    winGame();
  }
  text(("Score:" +score),width/2,40);
}//end of draw =================================

function levelOne(){
  text("Level 1", width/2,height-20);
  var disToBall= dist(ballx,bally,mouseX,mouseY);
  if(disToBall< ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  
  if(score>=5){
  gameState="L2";
  }

  line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
}//end of level 1 ===================================

function levelTwo(){
  background(200,100,0);
  text("Level Two!", width/2,height-20);
  var disToBall= dist(ballx,bally,mouseX,mouseY);
  if(disToBall< ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  
  if(score>=10){
gameState="L3";
  }

  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
  
}//end of level 2 ===================================

function levelThree(){
  background(0,100,0);
  text("Level Three!", width/2,height-20);
  var disToBall= dist(ballx,bally,mouseX,mouseY);
  if(disToBall< ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    ballSize=ballSize-5;
  }
  
  if(score>=49){
   //level 4
   gameState="win";
    //background(random(255));
  }

  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx,bally, ballSize, ballSize);
   image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
}//end of level 3 ===================================

function winGame(){
background(img);
  
    text(("Winner!!"), width/2, 60);
    
} // end winGame
