/* dette program for en bold/cirkel til at hoppe frem og tilbage på skræmen*/ 

let x;
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2;
} 

function draw() { 
  background(220);
  //tjekker for hvornår burde ramme den ene eller anden side af væggen og ændre hastigheden
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  
  //Move
  x += xspeed;
  ellipse(x, height/2, 50, 50);

}
