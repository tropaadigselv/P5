function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 100; i += 2) {
    fill(255);
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    fill(255, 0, 0);
    text(i, x, y);
  }
}
