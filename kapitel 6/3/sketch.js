let x1, y1, r1, x2, y2, r2;

function setup() {
  createCanvas(400, 400);
  background(220);
  x1 = random(0 + 100, width - 100);
  x2 = random(0 + 100, width - 100);
  y1 = random(0 + 100, height - 100);
  y2 = random(0 + 100, height - 100);
  r1 = random(10, 100);
  r2 = random(10, 100);

  circle(x1, y1, r1);
  circle(x2, y2, r2);

  print(touch(x1, x2, y1, y2, r1, r2));
  print(r1 / 2, r2 / 2);
}

function touch(x1, x2, y1, y2, r1, r2) {
  let d1 = dist(x1, y1, x2, y2);
  print(d1);
  if (d1 < (r1 + r2) / 2) {
    return true;
  } else {
    return false;
  }
}
