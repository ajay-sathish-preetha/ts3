const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17,block18;
var polygon,polyogn_img,slingshot,bg,backgroundImg,score = 0;

function preload(){
   polyogn_img = loadImage("polygon.png");
   getBackgroundImg();
}

function setup() {
  createCanvas(1200,300);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  
   //create the Bodies here:
    ground = new Ground(400,290,2400,20);
    base1 = new Ground(390,235,200,10);
    base2 = new Ground(705,165,200,10);

    block1 =  new Block(390,125,30,40);
    
    block2 = new Block(330,205,30,40);
    block3= new Block(360,205,30,40);
    block4 = new Block(390,205,30,40);
    block5 = new Block(420,205,30,40);
    block6 = new Block(450,205,30,40);

    block7 = new Block(360,165,30,40);
    block8 = new Block(390,165,30,40);
    block9 = new Block(420,165,30,40);

    block10 =  new Block(700,55,30,40);
    
    block11 = new Block(640,135,30,40);
    block12= new Block(670,135,30,40);
    block13 = new Block(700,135,30,40);
    block14 = new Block(730,135,30,40);
    block15 = new Block(760,135,30,40);

    block16 = new Block(670,95,30,40);
    block17 = new Block(700,95,30,40);
    block18 = new Block(730,95,30,40);

    
    polygon = Bodies.circle(90,180,20);
    World.add(world,polygon);
    slingshot = new SlingShot(this.polygon,{x:100,y:180});

     Engine.run(engine);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  fill("white");
  stroke("black");
  strokeWeight(2);
  textSize(20);
  text("Drag The Polygon To Shoot At The Blocks To Destroy It",10,30);
  fill("white");
  stroke("black");
  strokeWeight(2);
  textSize(20);
  text("Press Space To Get Another Chance",10,50);

  fill("white");
  stroke("black");
  strokeWeight(2);
  textSize(20);
  text("SCORE: "+score,750,40);

ground.display();
  fill("red");
 base1.display();
 base2.display();
 fill("skyblue");
 block1.display();
 block1.Score();
 fill("pink");
 block2.display();
 block2.Score();
 block3.display();
 block3.Score();
 block4.display();
 block4.Score();
 block5.display();
 block5.Score();
 block6.display();
 block6.Score();
 fill("green");
 block7.display();
 block7.Score();
 block8.display();
 block8.Score();
 block9.display();
 block9.Score();
 fill("pink");
 block10.display();
 block10.Score();
 fill("blue");
 block11.display();
 block11.Score();
 block12.display();
 block12.Score();
 block13.display();
 block13.Score();
 block14.display();
 block14.Score();
 block15.display();
 block15.Score();
 fill("red");
 block16.display();
 block16.Score();
 block17.display();
 block17.Score();
 block18.display();
 block18.Score();

 imageMode(CENTER);
 image(polyogn_img,polygon.position.x,polygon.position.y,40,40); 
 slingshot.display();

 getBackgroundImg();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON =  await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);

   if(hour > 06 && hour < 18){
       bg = "bg1.jpg";
   }
   else{
      bg = "bg2.png";
   }
  backgroundImg = loadImage(bg);
  console.log(responseJSON);

}