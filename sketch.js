var garden, gardenImg;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;

function preload() {
gardenImg = loadImage("images/garden.png");
catImg = loadImage("images/cat1.png");
catImg2 = loadImage("images/cat2.png");
catImg3 = loadImage("images/cat4.png");
mouseImg = loadImage("images/mouse2.png");
mouseImg2 = loadImage("images/mouse3.png");
mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(600,600);
    garden = createSprite(300,300,20,20);
    garden.addImage(gardenImg);

    cat = createSprite(500,500,20,20);
    cat.addImage(catImg);
    cat.scale = 0.1;
    

    mouse = createSprite(100,500,20,20);
    mouse.addImage(mouseImg);
    mouse.scale = 0.1;
//mouse.debug = true;
//cat.debug = true;
}

function draw() {
s
    background(0);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
cat.addImage(catImg3);
mouse.addImage(mouseImg3);
cat
} else {
    keyPressed();
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT_ARROW")){
cat.x = cat.x - 5;
cat.addImage(catImg2);
mouse.addImage(mouseImg2);
}
else {
cat.addImage(catImg);
mouse.addImage(mouseImg);
}

}
