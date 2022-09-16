function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(mouseX>250){
    rectMode(CENTER);
    rect(width/2,width/2,50);
  }else{
    circle(width/2,height/2,50);
  }
  
}
