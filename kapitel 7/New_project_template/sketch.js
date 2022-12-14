let stump;
let tre1;
let tre2;
let tre3;
let stjerne;
let kugle1;
let farve;

function setup() {
  createCanvas(400, 400);
  farve = [
    [255, 0, 0],
    [84, 191, 54],
    [0, 0, 255],
    [232, 144, 5],
    [99, 50, 110],
  ];
  stump = new treestump(175, 200, 50, 200);
  tre1 = new tree(200, 100, 125, 200, 275, 200);
  tre2 = new tree(200, 137, 100, 250, 300, 250);
  tre3 = new tree(200, 180, 75, 300, 325, 300);
  stjerne = new star(206, 100, 10, 25, 5);

  kugle1 = new balls(10);

  //if (isInside(0, 0, 20, 0, 10, 30, 10, 15)) document.write("Inside");
  //else document.write("Not Inside");
}

function draw() {
  background(220);
  stump.show();
  tre1.show();
  tre2.show();
  tre3.show();
  stjerne.show();
  frameRate(1.5);
  kugle1.show();
}

class treestump {
  constructor(tx, ty, tb, th) {
    this.x = tx;
    this.y = ty;
    this.h = th;
    this.b = tb;
  }
  show() {
    noStroke();
    fill(100, 38, 14);
    rect(this.x, this.y, this.b, this.h);
  }
}

class tree {
  constructor(tx1, ty1, tx2, ty2, tx3, ty3) {
    this.x1 = tx1;
    this.y1 = ty1;
    this.x2 = tx2;
    this.y2 = ty2;
    this.x3 = tx3;
    this.y3 = ty3;
  }
  show() {
    noStroke;
    fill(0, 66, 37);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

class star {
  constructor(tx, ty, tr1, tr2, tn) {
    this.x = tx;
    this.y = ty;
    this.r1 = tr1;
    this.r2 = tr2;
    this.n = tn;
  }
  show() {
    fill(255, 215, 0);
    s(this.x, this.y, this.r1, this.r2, this.n);
  }
}

class balls {
  constructor(tr) {
    this.x = random(150, 257);
    this.y = random(125, 300);
    this.r = tr;
  }
  show() {
    let c = random(0, farve.length);
    fill(farve[int(c)][0], farve[int(c)][1], farve[int(c)][2]);
    for (let i = 0; i < random(10, 30); i++) {
      this.y = random(150, 290);
      this.x = random(75, 325);
      if (
        isInside(200, 100, 125, 200, 275, 200, this.x, this.y) ||
        isInside(200, 137, 100, 250, 300, 255, this.x, this.y) ||
        isInside(200, 180, 75, 300, 325, 300, this.x, this.y)
      ) {
        circle(this.x, this.y, this.r);
      } else {
        continue;
      }
      print(c);
    }
  }
}

function s(x, y, radius1, radius2, npoints) {
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

function area(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

/* A function to check whether point P(x, y) lies inside the triangle formed
by A(x1, y1), B(x2, y2) and C(x3, y3) */
function isInside(x1, y1, x2, y2, x3, y3, x, y) {
  /* Calculate area of triangle ABC */
  let A = area(x1, y1, x2, y2, x3, y3);

  /* Calculate area of triangle PBC */
  let A1 = area(x, y, x2, y2, x3, y3);

  /* Calculate area of triangle PAC */
  let A2 = area(x1, y1, x, y, x3, y3);

  /* Calculate area of triangle PAB */
  let A3 = area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */
  return A == A1 + A2 + A3;
}
