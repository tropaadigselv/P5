function setup() {
  createCanvas(windowHeight, windowWidth);
  background(220);
}

function draw() {
  noStroke();
  fill(100,200,100);


  if (mouseIsPressed == true){
    if (mouseButton == LEFT){
      ellipse(mouseX,mouseY,50,50);
    }else if(mouseButton == RIGHT){
      rect(mouseX,mouseY,50,50);
    }
 
}
}
