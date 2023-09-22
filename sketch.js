const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg_img,food,bunny,bunny_img;
let button,button2,button3;
var fruit1

function preload(){
  bg_img = loadImage("bg.jpg")
  food = loadImage("fruit 1.png")
  bunny_img = loadImage("bunny 1.png")
  fruit1 = loadImage("mango.png")
  
}

function setup() 
{
  createCanvas(1500,800);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750,680,1500,20);

  button = createImg("button 1.png");
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop)

  //button2
  button2 = createImg("button 1.png");
  button2.position(1200,50);
  button2.size(50,50);
  button2.mouseClicked(drop)

  //button3
  button3 = createImg("button 1.png");
  button3.position(850,130);
  button3.size(50,50);
  button3.mouseClicked(drop)

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

   rope2 = new Rope(7,{x:850,y:130});
  fruit1 = Bodies.circle(300,300,20);
  Matter.Composite.add(rope2.body,fruit1);

  fruit_con = new Link(rope2,fruit1);


  // rope3 = new Rope(7,{x:1200,y:50});
  // fruit = Bodies.circle(300,300,20);
  // Matter.Composite.add(rope3.body,fruit);

  // fruit_con3 = new Link(rope3,fruit);

  bunny = createSprite(250,650,100,100)
  bunny.addImage(bunny_img)
 bunny.scale = 0.1;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode (CENTER)
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,1500,800)
  rope.show();
  rope2.show();
  // rope3.show();
  image (food,fruit.position.x,fruit.position.y,60,60)
  image (fruit1,fruit1.position.x,fruit1.position.y,100,60)
  // image (fruit1,fruit.position.x,fruit.position.y,60,60)
  if (keyDown("UP_ARROW")){
    bunny.velocityY=-10
  }
  bunny.velocityY=bunny.velocityY+0.5;
  
  //ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();

//bunny.collide(ground)
 drawSprites();
   
}
function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null
}
