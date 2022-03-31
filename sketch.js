const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope;

var score = 0;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
   
    box1 = new Box(600, 100, 70, 70);
    box2 = new Box(600, 100, 70, 70);
    box3 = new Box(600, 100, 70, 70);
    box4 = new Box(700, 100, 70, 70);
    box5 = new Box(700, 100, 70, 70);
    box6 = new Box(700, 100, 70, 70);
    box7 = new Box(800, 100, 70, 70);
    box8 = new Box(800, 100, 70, 70);
    box9 = new Box(800, 100, 70, 70);

    ball = new Ball(200, 200, 80, 80);


    rope = new Rope(ball.body,{x:500, y:50});
}

function draw(){
   
        background("grey");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ball.display();

    rope.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}

