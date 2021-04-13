var bgImg;
var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png")
catImg = loadAnimation("images/cat1.png");
mouseImg = loadAnimation("images/mouse1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3 = loadAnimation("images/cat4.png");
mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800,600,20,20);
cat.addAnimation("catSleeping",catImg);
cat.scale = 0.2;

mouse = createSprite(200,600,10,10);
mouse.addAnimation("mouseStanding",mouseImg);
mouse.scale = 0.15;


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addAnimation("catSitting",catImg3);
    cat.changeAnimation("catSitting");
    mouse.addAnimation("mouseZoom",mouseImg3);
    mouse.changeAnimation("mouseZoom");
    cat.velocityX = 0;
    cat.x = 300;
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 5;
}

if(keyCode === LEFT_ARROW){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.velocityX = -4;
}

}
