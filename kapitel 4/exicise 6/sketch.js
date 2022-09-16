let x;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = height / 2;
} 

function draw() { 
  background(220);
  if (x > height - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(width/2,x, 50, 50);
}
