let la, lb, lc;

function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);
  la = 200;
  lb = 150;
  lc = 260;

  drawTriangel(la, lb, lc);
}

function drawTriangel(la, lb, lc) {
  x1 = width / 2;
  y1 = width / 2;
  x2 = x1 + la;
  y2 = 0;
  let va = acos((sq(lb) + sq(lc) - sq(la)) / (2 * lb * lc));

  x3 = lb * cos(va);
  y3 = lb * sin(va);

  triangle(x1, y1, x2, y2, x3, y3);
}
