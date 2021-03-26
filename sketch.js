var car,wall;

var speed,weight

var car1,car2,car3,car4;

function preload(){

  car1 = loadImage("purple_car.png");  

  car2 = loadImage("red_car.png");  

  car3 = loadImage("yellow_car.png");  

  car4 = loadImage("green_car.png");  

}


function setup() {
    createCanvas(1600,600);

    speed = random(55,90);
    weight = random(400,1500);

    car = createSprite(125,300,250,250);
    car.scale = 0.5;
    car.addImage("PC",car1);
    car.addImage("RC",car2);
    car.addImage("YC",car3);
    car.addImage("GC",car4);
    car.velocityX = speed;
    car.shapeColor = "white";

    wall = createSprite(1500,300,60,height/2);
    wall.shapeColor = "white";
   
}

function draw() {
  background("black"); 
    
  if(wall.x - car.x < (car.width + wall.width/2)){
  car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;

    if( deformation > 180){
    car.changeImage("RC",car2);
    text("deformation"+deformation,800,300);
    }

    if(deformation<180 && deformation>100){
    car.changeImage("YC",car3);
    text("deformation"+deformation,800,300);
    }

    if(deformation < 100){
     car.changeImage("GC",car4);
     text("deformation"+deformation,800,300);
    }

  }

  drawSprites();

}