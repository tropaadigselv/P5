let n;

let mennesker = [];

class Mennesker {
  //parameter som der skal bruges for at lave et menneske
  constructor(x, y, radius, ret_x, ret_y, r, g, b) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ret_x = ret_x;
    this.ret_y = ret_y;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  //gør så menneskerne kan tegne og har en farve
  draw() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius * 2);
  }

  //tjekker efter kolision med kanten a canvas
  collision(width, height) {
    if (this.x + this.radius > width) {
      this.ret_x = -this.ret_x;
    }
    if (this.x - this.radius <= 0) {
      this.ret_x = -this.ret_x;
    }
    if (this.y + this.radius > height) {
      this.ret_y = -this.ret_y;
    }
    if (this.y - this.radius <= 0) {
      this.ret_y = -this.ret_y;
    }
    this.x = this.x + this.ret_x;
    this.y = this.y + this.ret_y;
  }
  // tjekker for kolision mellem ander mennekser
  hit(other_x, other_y, other_r) {
    if (dist(this.x, this.y, other_x, other_y) < other_r + this.radius) {
      print("hit");
    }
  }
}

function setup() {
  createCanvas(800, 400);

  n = 50;
  //sættter mennekser i et array
  for (let i = 0; i < n; i++) {
    mennesker.push(
      new Mennesker(
        random(0, width),
        random(0, height),
        random(5, 20),
        random(-2, 2),
        random(-2, 2),
        random(0, 255),
        random(0, 255),
        random(0, 255)
      )
    );
  }
}

function draw() {
  background(220);
  //tegner mennekserne og tjekker for kolisoner
  for (let i = 0; i < n; i++) {
    mennesker[i].draw();
    mennesker[i].collision(width, height);
    // skriv så den tjekker kolisoner
    //mennesker[i].hit()
  }
}
