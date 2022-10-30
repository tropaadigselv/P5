//tegner en blomst

function setup() {
  createCanvas(720, 400);
  background(200);
  translate(200, 100);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 4);
  }
}
