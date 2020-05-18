let mySound;
let dots = [];

let eating=false;

var timerValue = 10;
var startButton;

function preload() {
  soundFormats('mp3', 'ogg','wav');
  mySound = loadSound('munch.wav');
}

function setup() {
  createCanvas(700, 700);
  fill("red")
  ellipse(100,100,50,50)
  createCanvas(500, 400);
  	background(220);
    textAlign(CENTER);
  setInterval(timeIt, 1000);

}

function draw(){
	background(100);
	background(220);

  for (let i=0; i<dots.length; i++){
    dots[i].drawDot();
  }

  if (timerValue >=0) {
    text(timerValue + " SECONDS", width / 2, height / 2);
  }

}


function mousePressed() {
  if (eating==true){
  mySound.setVolume(0.1);
  mySound.play();


  let d = new dot(mouseX,mouseY)
  dots.push(d);
  console.log(dots)
  }
}


function timeIt() {
  if (eating==true){
   if (timerValue >0) {
    timerValue--;
    }
 }
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
