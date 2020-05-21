let doughbutton;
let saucebutton;
let cheesebutton;
let pepperonibutton;
let eatingbutton;

let dough = false;
let pizzasauce = false;
let yummycheese = false;
let topping1 = false;
let eating = false;

let mySound;
let dots = [];

let timeToEat;
var timerValue = 10;
var startButton;

function preload() {
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('munch.wav');
}

function setup() {
  createCanvas(1400, 725);

  textAlign(CENTER);
  setInterval(timeIt, 1000);

  doughbutton = createButton('Dough');
  doughbutton.style('background-color', "lightblue");
  doughbutton.style('font-size', '40px');
  doughbutton.style('font-family', "Georgia");
  doughbutton.position(100, 100);
  doughbutton.size(200, 200);
  doughbutton.mousePressed(makecrust);

  saucebutton = createButton('Tomato Sauce');
  saucebutton.style('background-color', "lightblue");
  saucebutton.style('font-size', '40px');
  saucebutton.style('font-family', "Georgia");
  saucebutton.position(100, 430);
  saucebutton.size(200, 200);
  saucebutton.mousePressed(makesauce);

  cheesebutton = createButton('Cheese');
  cheesebutton.style('background-color', "lightblue");
  cheesebutton.style('font-size', '40px');
  cheesebutton.style('font-family', "Georgia");
  cheesebutton.position(1100, 100);
  cheesebutton.size(200, 200);
  cheesebutton.mousePressed(makecheese);

  pepperonibutton = createButton('Pepperoni');
  pepperonibutton.style('background-color', "lightblue");
  pepperonibutton.style('font-size', '40px');
  pepperonibutton.style('font-family', "Georgia");
  pepperonibutton.position(1100, 430);
  pepperonibutton.size(200, 200);
  pepperonibutton.mousePressed(makepepperoni);


  eatingbutton = createButton('Ready to eat?!');
  eatingbutton.style('background-color', "lightblue");
  eatingbutton.style('font-size', '20px');
  eatingbutton.style('font-family', "Georgia");
  eatingbutton.position(1100, 25);
  eatingbutton.size(200, 50);
  eatingbutton.mousePressed(readytoeat);
  eatingbutton.hide();
}

function draw(){
	background("white");
  crust();
  sauce();
  cheese();
  showpepperoni();
  eat();

  textSize(90);
  textFont('Georgia');
  textAlign(CENTER);
  fill("black");
  text('Pizzaria', 700, 80);

  stroke("black")
  strokeWeight(2);
  noFill();
  rect(400, 100, 600, 530);

  for (let i=0; i<dots.length; i++){
   dots[i].drawDot();
 }
if(eating==true){
  if (timerValue >=0) {
    fill("black");
    noStroke();
    text(timerValue + " SECONDS", width / 2, height/2);
  }
}

if(timerValue < 0){
  eating = false;
  print(timerValue + dots.length);
  fill("black");
  noStroke();
  text("You got "+dots.length+" bites",width/2,height-height/5)
}

}

function mousePressed() {
  if (eating == true){
  let d = new dot(mouseX,mouseY)
  dots.push(d);
  if (frameCount>timeToEat +5){
    mySound.setVolume(0.1);
    mySound.play();
  }

  }
}

function timeIt() {
  if (eating == true){
   //if (timerValue >0) {
    timerValue--;
    //}
 }
}

class dot {

    constructor(x,y){
      this.x = x;
      this.y = y;

    }

    drawDot(){
      fill("white")
      noStroke()
      ellipse(this.x,this.y,60,60)
      ellipse(this.x-25,this.y-25,60,60)
      ellipse(this.x+15,this.y+35,50,50)
      ellipse(this.x+50,this.y+25,65,65)
      ellipse(this.x+35,this.y,45,45)
      ellipse(this.x+15,this.y-20,65,65)
      ellipse(this.x+45,this.y-20,45,45)
    }
}

function pepperoni(x,y){
  fill(245, 19, 2);
  noStroke();
  ellipse(x, y, 50);
}

function showpepperoni(){
  if (topping1 == true && yummycheese == true && pizzasauce == true && dough == true ){
  pepperoni(600, 400);
  pepperoni(800, 450);
  pepperoni(720, 220);
  pepperoni(680, 450);
  pepperoni(640, 260);
  pepperoni(750, 340);
  pepperoni(680, 370);
  pepperoni(730, 500);
  pepperoni(740, 420);
  pepperoni(850, 380);
  pepperoni(820, 280);
  pepperoni(580, 325);
  pepperoni(610, 480);
  pepperoni(690, 305);
  }
  else{
    topping1 = false
  }
}

function crust(){
  if (dough == true){
    fill(227, 178, 54);
    noStroke();
    ellipse(700, 362, 460);
  }
  else{
    dough = false
  }
}

function sauce(){
  if (pizzasauce == true && dough == true){
    fill(245, 19, 2);
    noStroke();
    ellipse(700, 362, 398);
  }
  else{
    pizzasauce = false
  }
}

function cheese(){
  if (yummycheese == true && pizzasauce == true && dough == true){
    fill(250, 215, 40);
    noStroke();
    ellipse(700, 362, 378);
  }
  else{
    yummycheese = false
  }
}

function eat(){
  if (yummycheese == true && pizzasauce == true && dough == true && topping1 == true){
    eatingbutton.show();
  }
}

function makecrust(){
  dough = true;
}

function makesauce(){
  pizzasauce = true;
}

function makecheese(){
  yummycheese = true;
}

function makepepperoni(){
  topping1 = true;
}

function  readytoeat(){
  eating = true;
  timeToEat = frameCount;
}
