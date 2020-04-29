function setup() {
  createCanvas(700, 600);
}

function draw(){
	background(100);
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
  pepperoni(800, 260);
  pepperoni(800, 320);
  pepperoni(700, 320);

//pepperoni makin thing https://www.youtube.com/watch?v=XATr_jdh-44
  for (var i = 0; i < 50; i++) {
    var x = random(width);
    var y = random(height);
    var r = 200
    ellipse(x, y, r*2, r*2)



  stroke("black")
  strokeWeight(2);
  noFill();
  rect(400, 100, 600, 530);

  tablecloth(10,10);
}
>>>>>>> Stashed changes

}
