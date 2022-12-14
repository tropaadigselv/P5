let a;

function setup() {
  createCanvas(400, 400);
  a = new s(100, 100, 30, 70, 5);
}

function draw() {
  background(220);
  a.show();
}

class s {
  constructor(tx, ty, tr1, tr2, tn) {
    this.x = tx;
    this.y = ty;
    this.r1 = tr1;
    this.r2 = tr2;
    this.n = tn;
  }
  show() {
    star(this.x, this.y, this.r1, this.r2, this.n);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
