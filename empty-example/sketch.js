let distance = 50;
let value = "white";
let c;
let button;

function setup() {
createCanvas(1400, 725);
c = color(227, 178, 54);
button = createButton('dough');
  button.position(19, 19);
  button.mousePressed(crust);
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

function mousePressed() {
  if (value === "white") {
    value = (c);
  } else {
    value = "white";
  }
}

function pepperoni(x,y){
  fill(245, 19, 2);
  noStroke();
  ellipse(x, y, 40);
}

function crust(){
  fill(value);
  noStroke();
  ellipse(700, 362, 450);

}

function sauz(){
  fill(245, 19, 2);
  ellipse(700, 362, 398);
}

function cheez(){
  fill(250, 215, 40)
  ellipse(700, 362, 378);
}
