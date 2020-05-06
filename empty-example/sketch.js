let distance = 50;

let doughbutton;
let saucebutton;
let cheesebutton;
let pepperonibutton;

let dough = false;
let pizzasauce = false;
let yummycheese = false;
let topping1 = false;

function setup() {
  createCanvas(1400, 725);

  doughbutton = createButton('Dough');
  doughbutton.position(100, 100);
  doughbutton.size(200, 200);
  doughbutton.mousePressed(makecrust);

  saucebutton = createButton('Tomato Sauce');
  saucebutton.position(100, 430);
  saucebutton.size(200, 200);
  saucebutton.mousePressed(makesauce);

  cheesebutton = createButton('Cheese');
  cheesebutton.position(1100, 100);
  cheesebutton.size(200, 200);
  cheesebutton.mousePressed(makecheese);

  pepperonibutton = createButton('Pepperoni');
  pepperonibutton.position(1100, 430);
  pepperonibutton.size(200, 200);
  pepperonibutton.mousePressed(makepepperoni);
}

function draw(){
	background("white");
  crust();
  sauce();
  cheese();
  showpepperoni();

  textSize(90);
  textFont('Georgia');
  textAlign(CENTER);
  fill("black");
  text('Pizzaria', 700, 80);

  stroke("black")
  strokeWeight(2);
  noFill();
  rect(400, 100, 600, 530);
}

function pepperoni(x,y){
  fill(245, 19, 2);
  noStroke();
  ellipse(x, y, 50);
}

function showpepperoni(){
  if (topping1 == true){
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
  }
}

function crust(){
  if (dough == true){
    fill(227, 178, 54);
    noStroke();
    ellipse(700, 362, 460);
  }
  else{
  }
}

function sauce(){
  if (pizzasauce == true){
    fill(245, 19, 2);
    noStroke();
    ellipse(700, 362, 398);
  }
  else{
  }
}

function cheese(){
  if (yummycheese == true){
    fill(250, 215, 40);
    noStroke();
    ellipse(700, 362, 378);
  }
  else{
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
