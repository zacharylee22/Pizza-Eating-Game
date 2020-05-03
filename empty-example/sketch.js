let distance = 50;
let value = "white";
let c;
let s;
let button;

function setup() {
createCanvas(1400, 725);
c = color(227, 178, 54);
s = color(245, 19, 2);

button = createButton('Dough');
  button.position(19, 19);
  button.mousePressed(makecrust);

  button = createButton('Tomato Sauce');
    button.position(19, 39);
    button.mousePressed(makesauz);

    button = createButton('Cheese');
      button.position(19, 59);
      button.mousePressed(cheez);
}

function draw(){
	background("white");
  crust();
  sauz();
  cheez();

  pepperoni(600, 400);
  pepperoni(800, 450);
  pepperoni(720, 200);
  pepperoni(680, 450);
  pepperoni(640, 280);

  stroke("black")
  strokeWeight(2);
  noFill();
  rect(400, 100, 600, 530);
}

function pepperoni(x,y){
  fill(245, 19, 2);
  noStroke();
  ellipse(x, y, 40);
}

function crust(){
  fill(value);
  noStroke();
  ellipse(700, 362, 460);

}

function makecrust(){
    if (value === "white") {
      value = (c);
    } else {
      value = "white";
    }
}

function sauz(){
  fill(value);
  ellipse(700, 362, 398);
}

function makesauz(){
  if (value === "c") {
    value = (s);
  } else {
    value = "c";
  }
}

function cheez(){
  fill(250, 215, 40)
  ellipse(700, 362, 378);
}
