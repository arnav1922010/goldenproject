var bgImg, ground;
var heroImg, heroImg1,hero;
var vilImg,villian;
var invisibleGround;
var villianGroup;

function preload(){
    bgImg= loadImage("background.jpg");
    heroImg=loadAnimation("heroImg/herorunning1.png","heroImg/herorunning2.png","heroImg/herorunning3.png");
    vilImg=loadAnimation("villan_airslash1.png", "villan_airslash2.png", "villan_airslash3.png"
    ,"villan_airslash4.png","villan_airslash5.png","villan_airslash6.png","villan_airslash7.png")
    heroImg1=loadAnimation("heroImg/heroJumping1.png","heroImg/heroJumping2.png","heroImg/heroJumping3.png","heroImg/heroJumping4.png"
    ,"heroImg/heroJumping5.png","heroImg/heroJumping6.png","heroImg/heroJumping7.png")
    
}

function setup(){
    createCanvas(800,400);
    ground= createSprite(400,200,100,100);
    ground.scale=1.95;
    ground.addImage(bgImg);

    hero=createSprite(80,280,100,100);
    hero.addAnimation("herostanding",heroImg);
    hero.scale=1.50;

    ground.velocityX=-5;

    invisibleGround = createSprite(30,350,150,8);
    invisibleGround.visible = false;

    hero.setCollider("circle",0 ,0 ,40)
    hero.debug = true;

    villianGroup=createGroup();

}

function draw(){
    background(0);
    drawSprites();


    if(ground.x<ground.width/4)
    {
        ground.x=ground.width/2;
    }
    
    

    if(keyDown("space")){
        hero.velocityY=-5;
        hero.changeAnimation("heroJumping",heroImg1);
    }
    hero.velocityY=hero.velocityY+0.25;

    hero.collide(invisibleGround);

    spawnVillian();

}

function spawnVillian(){
    if(frameCount % 180===0){
        villian=createSprite(810,299);
        villian.addAnimation("villianRunning",vilImg);
        villian.scale=2.5;
        villian.velocityX=-5;
        villian.lifetime=300;
    }
    villianGroup.add(villian);
    
}