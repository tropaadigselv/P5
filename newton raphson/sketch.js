let f;
let g;
let h;
let hd;
let hdd;
let x1;
let x2;
let x3;

function setup() {
  createCanvas(800, 400);

  newton_raphson();
}

function draw() {
  background(220);
  //scale(1, -1);
  translate(400, 200);
  //tegner parabel
  strokeWeight(1);
  for (let i = 0; i <= 23; i++) {
    let y1 = ((1 / 4) * sq(i) - 2 * i) * -1;
    let y2 = ((1 / 4) * sq(i - 1) - 2 * (i - 1)) * -1;
    line(i, y1, i, y2);
  }
  angleMode(RADIANS);
  //tegner en sinus funnktion
  for (let i = 0; i <= 25; i++) {
    let y1 = (10 * sin(i / 4 + 11) + 10) * -1;
    let y2 = (10 * sin((i - 1) / 4 + 11) + 10) * -1;
    line(i, y1, i - 1, y2);
  }
}

function newton_raphson() {
  x1 = 3;
  f = ((1 / 4) * sq(x1) - 2 * x1) * -1;
  g = (10 * sin(x1 / 4 + 11) + 10) * -1;
  h = ((1 / 4) * sq(x1) - 2 * x1) * -1 - (10 * sin(x1 / 4 + 11) + 10) * -1;
  hd = x1 / 2 - 2 - (5 * cos(x1 / 4 + 11)) / 2;
  hdd = 1 / 2 + (5 * sin(x1 / 4 + 11)) / 8;
  let score = abs(h * hdd) / abs(sq(hd));
  print("score er " + score);
  let done = false;
  while (score > 1) {
    x1 = x1 - 1;
    print(x1);
    f = ((1 / 4) * sq(x1) - 2 * x1) * -1;
    g = (10 * sin(x1 / 4 + 11) + 10) * -1;
    h = ((1 / 4) * sq(x1) - 2 * x1) * -1 - (10 * sin(x1 / 4 + 11) + 10) * -1;
    hd = x1 / 2 - 2 - (5 * cos(x1 / 4 + 11)) / 2;
    hdd = 1 / 2 + (5 * sin(x1 / 4 + 11)) / 8;
    score = abs(h * hdd) / abs(sq(hd));
    print("score er " + score);
  }
  while (done == false) {
    h = abs(
      ((1 / 4) * sq(x1) - 2 * x1) * -1 - (10 * sin(x1 / 4 + 11) + 10) * -1
    );
    print("h er" + h);
    hd = x1 / 2 - 2 - (5 * cos(x1 / 4 + 11)) / 2;
    print("h' er" + hd);
    x2 = x1 - h / hd;
    if (abs(x2 - x1) < 0.000000001) {
      done = true;
    } else {
      x1 = x2;
    }
    print(x1);
  }
}
