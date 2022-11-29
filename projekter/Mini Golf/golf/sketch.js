let ballX;
let ballY;
let speed;

let start;
let h;
let v;
let box;

function setup() {
  createCanvas(800, 500);
  background(220);

  ballX = 200;
  ballY = 350;
  speed = 2;
  v = true;
  h = true;
  box = false;

  noStroke();
  fill(0, 255, 0);
  rect(150, 300, 250, 100);
  rect(400, 150, 100, 250);
  fill(0);
  circle(450, 175, 15);
}

function draw() {
  stroke(0);
  fill(255);
  circle(ballX, ballY, 10);

  if (ballX >= 400) {
    box = true;
  }
  if (ballX <= 400 && ballY >= 300) {
    box = false;
  }

  if (box == false || v == true)
    if (v == true || ballX <= 150) {
      v = true;
      ballX += speed;
    }

  if (ballX >= 500 || v == false) {
    v = false;
    ballX -= speed;
  }

  if (ballX >= 400 && box == true) {
    ballX += speed;
  }

  if (box == false || h == true) {
    if (ballY <= 300 || h == true) {
      h = true;
      ballY += speed;
    }
  }

  if (ballY >= 400 || h == false) {
    h = false;
    ballY -= speed;
  }

  print(ballY);
}
