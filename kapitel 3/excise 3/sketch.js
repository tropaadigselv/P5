function setup() {
  createCanvas(windowHeight, windowWidth);
  background(220);
}

function draw() {
  noStroke();
  if(mouseIsPressed == true){
    if(mouseButton == LEFT){
      fill(0);
      circle(mouseX,mouseY,50);
    }
    else if(mouseButton == RIGHT){
      fill(255,0,0);
      circle(mouseX,mouseY,50);
    }
  }

  if(keyCode === DELETE){
    background(220);
  }
}
