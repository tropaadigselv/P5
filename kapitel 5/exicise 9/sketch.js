let x = 10;
let xSpeed = 0;
let y = 10;
let ySpeed = 0;
let c1;
let c2;

function setup() {
  createCanvas(400, 400);
  background(220);
  c1 = [random(0, 255), random(0, 255), random(0, 255)];
  c2 = [random(0, 255), random(0, 255), random(0, 255)];
}

function draw() {
  background(220);

  for (let i = 0; i < 10; i++) {
    stroke(c1[0], c1[1], c1[2]);
    line(x + xSpeed, 0, x + xSpeed, height);
    x += 25;
  }
  x = 0;
  xSpeed++;

  for (let i = 0; i < 10; i++) {
    stroke(c2[0], c2[1], c2[2]);
    line(0, y + ySpeed, width, y + ySpeed);
    y += 25;
  }
  y = 0;
  ySpeed += 2;

  if (xSpeed > width) {
    xSpeed = -250;
    c1 = [random(0, 255), random(0, 255), random(0, 255)];
  }

  if (ySpeed > height) {
    ySpeed = -250;
    c2 = [random(0, 255), random(0, 255), random(0, 255)];
  }
}
