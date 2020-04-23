let distance = 50;

function setup() {
  createCanvas(1400, 725);
}

function draw(){
	background("white");
  fill(227, 178, 54);
  noStroke();
  ellipse(700, 362, 450);

  fill(250, 215, 40)
  stroke(245, 19, 2);
  strokeWeight(8);
  ellipse(700, 362, 390);

  pepperoni(600, 400);
  pepperoni(800, 450);
  pepperoni(720, 200);
  pepperoni(680, 450);
  pepperoni(640, 280);

  stroke("black")
  strokeWeight(2);
  noFill();
  rect(400, 100, 600, 530);

  tablecloth(10,10);
}

function pepperoni(x,y){
  fill(245, 19, 2);
  noStroke();
  ellipse(x, y, 40);
}
