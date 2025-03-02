const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   
    box1 = new Box(200,300,50,50);
    box2 = new Box(220,50,40,50);
    box3 = new Box(180,60,40,60);

    ground = new Ground(200,380,400,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    fill ("red");
    box1.display();
    fill ("blue");
    box2.display();
    box3.display();
    fill ("green");
    ground.display();

}