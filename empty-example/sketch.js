let dots = [];

let mySound;

function preload() {
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('munch.wav');
}

function setup() {
  createCanvas(500, 400);
  	background(220);

}

function draw(){
	background(220);

  for (let i=0; i<dots.length; i++){
    dots[i].drawDot();
  }

}

function mousePressed() {
  mySound.setVolume(0.1);
  mySound.play();

  let d = new dot(mouseX,mouseY)
  dots.push(d);
  console.log(dots)
}

class dot {

    constructor(x,y){
      this.x = x;
      this.y = y;
    }

    drawDot(){
      fill("blue")
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
