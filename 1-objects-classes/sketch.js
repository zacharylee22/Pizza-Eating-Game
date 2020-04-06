//create a variable to hold one ball
let b;
let anotherBall;
let banana;
let arrow1;
let arrow2

function setup() {
  createCanvas(800, 400);
  b = new Apple(0, 100,"red",30); //make a new ball from the Ball class and call it b.
  anotherBall = new Apple(200,20,"green",20);
  banana = new Apple(20,50,"orange",30)
  arrow1 = new Arrow(100,75,"blue",10)
  arrow2 = new Arrow(35,35,"purple",15)
}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    banana.drawBall();
    banana.moveBall();
    arrow1.drawArrow();
    arrow1.moveArrow();
    arrow2.drawArrow();
    arrow2.moveArrow();
}



//ball class from which to create new balls with similar properties.
class Apple {

	constructor(x,y,color,diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter= diameter;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+3;
		this.y = this.y+2;
	}
}

  class Arrow {
  constructor(x,y,color,diameter){
      this.x = x;
      this.y = y;
      this.color= color;
      this.diameter= diameter;
}
      drawArrow(){  // draw a ball on the screen at x,y
        		stroke(0);
        		fill(this.color);
    		    ellipse(this.x,this.y,this.diameter,10);
            rect(this.x,this.y,10,10)
    	}
    	moveArrow(){ //update the location of the ball, so it moves across the screen
    		this.x = this.x+3;
    		this.y = this.y+2;



    }
  }
