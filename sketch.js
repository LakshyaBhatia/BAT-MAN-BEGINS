  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];

var thunder, thunder1,thunder2,thunder3,thunder4;
var thunderDuration=0;
var rand;

var Bruce;
var BruceAnimation;

var umbrellaObject;

var scenery;
var backgroundImage;

var rainSound;

function preload(){
        rainSound = loadSound("rain-and-thunder.wav");
       backgroundImage = loadImage("background.jpg");

       thunder1 = loadImage("images/thunderbolt/1.png");
       thunder2 = loadImage("images/thunderbolt/2.png");
       thunder3 = loadImage("images/thunderbolt/3.png");
       thunder4 = loadImage("images/thunderbolt/4.png");
   
    BruceAnimation = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_5.png"
    ,"images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");

}

function setup(){
   createCanvas(800,700);
   rainSound.loop();
    rainSound.play();
    

    engine = Engine.create();
    world = engine.world

    umbrellaObject = new Umbrella(400,435);

    scenery = createSprite(800,350,800,700);
    scenery.addImage(backgroundImage);
    scenery.scale= 3;
    scenery.velocityX = -3;

    Bruce = createSprite(400,500,50,50);
    Bruce.addAnimation("label",BruceAnimation);
    Bruce.scale = 0.5;

   if(frameCount % 200 === 0){

    for(var i=0; i<60; i++){
        drops.push(new WaterDrops(random(0,800), random(0,800)));
    }

}


}

function draw(){

    background(0);

    Engine.update(engine);
    if(scenery.x < 0){
        scenery.x = 800;
    }
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunder = createSprite(random(10,770), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 40;
    }
    drawSprites();

     for(var i = 0; i<60; i++){
        drops[i].display();
        drops[i].update_Y_Position();
    
    }
}   

