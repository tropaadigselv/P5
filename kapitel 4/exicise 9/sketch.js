function setup() {
  createCanvas(400,400);
  strokeWeight(5);
  stroke(0);
  background(220);
}

function draw() {
  

  if(keyIsPressed){
    if((key == 'a')||(key == 'A')){
      background(220);
      line(0,height,width/2,0);
      line(width/2,0,width,height);
      line(100,height/2,width-100,height/2);
      }
    if((key == 'v')||(key == 'V')){
      background(220);
      line(0,0,width/2,height);
      line(width/2,height,width,0);
    }
  }
}
