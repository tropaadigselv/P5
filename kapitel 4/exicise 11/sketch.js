let mus1X;
let mus1Y;
let mus2X;
let mus2Y;


function setup() {
  createCanvas(400, 400);
  mus1X = random(0,400);
  mus1Y = random(0,400);
  mus2X = random(0,400);
  mus2Y = random(0,400);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    mus1X -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    mus1X += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    mus1Y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    mus1Y += 5;
  }
//d
  if (keyIsDown(65)) {
    mus2X -= 5;
  }
//a
  if (keyIsDown(68)) {
    mus2X += 5;
  }
//w
  if (keyIsDown(87)) {
    mus2Y -= 5;
  }
//s
  if (keyIsDown(83)) {
    mus2Y += 5;
  }



  clear();
  fill(255,0,0);
  ellipse(mus1X,mus1Y,50,50);
  fill(0,255,0);
  rectMode(CENTER);
  rect(mus2X,mus2Y,50,50);
}
