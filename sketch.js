const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var base ;
function setup() {
  createCanvas(800,400);
base = new Ground (200,150,10,50); 
block1 = new Box ();



}

function draw() {
  background(255,255,255);  
 base.display();
}