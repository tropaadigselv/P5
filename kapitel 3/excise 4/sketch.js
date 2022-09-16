function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if(key === 'f'){
    rectMode(CENTER);
    rectMode(CENTER);
    rect(mouseX,mouseY,50);
  }
  if(key === 'c'){
    circle(mouseX,mouseY,50);
  }
  if(key === 'e'){
    ellipse(mouseX,mouseY,50,40);
  }
}
