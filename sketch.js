const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var bgImg
var engine, world

var snow = []

function preload(){

  bgImg = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < 300; i ++ ){
    snow.push(new Snow(random(0,800),random(0,800)));
  }
  

}

function draw() {
  background(bgImg);
  Engine.update(engine);

  for(var i = 0; i<200; i++){
    snow[i].snowDrop();
    snow[i].updateY()
  }

  drawSprites();


}