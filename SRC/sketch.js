let figur1;
let figur2;
let flyt;
let difX;
let difY;

class Figur_1 {
  constructor() {}

  draw() {
    //tegner parabel
    for (let i = 0; i <= 20; i++) {
      let y1 = (1 / 4) * sq(i) - 2 * i;
      let y2 = (1 / 4) * sq(i - 1) - 2 * (i - 1);
      line(i + difX, y1 - difY, i - 1 + difX, y2 - difY);
    }
    /*
    //tegner ekspotienal funktion
    for (let i = 0; i <= 3; i++) {
      let y1 = pow(5, i);
      let y2 = pow(5, i - 1);
      line(i + difX, y1 - difY, i - 1 + difX, y2 - difY);
    }
    //tegner skrå linje
    for (let i = 3; i <= 20; i++) {
      let a = ((1 / 4) * sq(20) - 2 * 20 - pow(5, 3)) / (20 - 3);
      let b = -a * 3 + pow(5, 3);
      let y1 = a * i + b;
      let y2 = a * (i - 1) + b;
      line(i + difX, y1 - difY, i - 1 + difX, y2 - difY);
    }
    */
  }
}

class Figur_2 {
  constructor() {}

  draw() {
    angleMode(RADIANS);
    //tegner en sinus funnktion
    for (let i = 0; i <= 25; i++) {
      let y1 = 10 * sin(i / 4 + 11) + 10;
      let y2 = 10 * sin((i - 1) / 4 + 11) + 10;
      line(i, y1, i - 1, y2);
    }
    /*
    //tegner 5 grads polynumie
    for (let i = 25; i >= 10; i--) {
      let y1 = (pow(i / 10 - 5, 5) + 10) / 100;
      let y2 = (pow((i - 1) / 10 - 5, 5) + 10) / 100;
      line(i, y1, i - 1, y2);
    }
    //tegner en ret linje
    for (let i = 0; i <= 10; i++) {
      let a =
        ((pow(10 / 10 - 5, 5) + 10) / 100 - (10 * sin(0 / 4 + 11) + 10)) /
        (10 - 0);
      let b = -a * 0 + (10 * sin(0 / 4 + 11) + 10);
      let y1 = a * i + b;
      let y2 = a * (i - 1) + b;
      line(i, y1, i - 1, y2);
    }*/
  }
  colider() {
    if (mouseX > 180 && mouseX < 225) {
      if (mouseY < 200 + 60 && mouseY > 180 - 4) {
        newton_raphson();
      }
    }
  }
}

function setup() {
  createCanvas(800, 800);
  flyt = 200;
  difX = mouseX - flyt;
  difY = mouseY - flyt;
  figur1 = new Figur_1();
  figur2 = new Figur_2();
}

function draw() {
  difX = mouseX - flyt;
  difY = mouseY - flyt;
  background(220);
  translate(200, 200);
  strokeWeight(1);
  stroke(0);
  scale(1, -1);
  figur2.draw();
  figur2.colider();
  figur1.draw();
  strokeWeight(3);
  stroke("blue");
  point(0, 0);
}

function newton_raphson() {
  x1 = 20;
  f = ((1 / 4) * sq(x1) - 2 * x1) * -1;
  g = (10 * sin(x1 / 4 + 11) + 10) * -1;
  h = ((1 / 4) * sq(x1) - 2 * x1) * -1 - (10 * sin(x1 / 4 + 11) + 10) * -1;
  hd =
    ((1 / 4) * sq(x1 + 0.1) -
      2 * (x1 + 0.1) -
      10 * sin((x1 + 0.1) / 4 + 11) +
      10 -
      ((1 / 4) * sq(x1 - 0.1) -
        2 * (x1 - 0.1) -
        10 * sin((x1 - 0.1) / 4 + 11) +
        10)) /
    (x1 + 0.1 - (x1 - 0.1));
  print(hd);
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
    hd =
      (((1 / 4) * sq(x1 + 0.1) - 2 * (x1 + 0.1)) * -1 -
        (10 * sin((x1 + 0.1) / 4 + 11) + 10) * -1 -
        ((1 / 4) * sq(x1 - 0.1) - 2 * (x1 - 0.1)) * -1 -
        (10 * sin((x1 - 0.1) / 4 + 11) + 10) * -1) /
      (x1 + 0.1 - (x1 - 0.1));
    score = abs(h * hdd) / abs(sq(hd));
    print("score er " + score);
  }
  while (done == false) {
    f = ((1 / 4) * sq(x1) - 2 * x1) * -1;
    g = (10 * sin(x1 / 4 + 11) + 10) * -1;
    h = ((1 / 4) * sq(x1) - 2 * x1) * -1 - (10 * sin(x1 / 4 + 11) + 10) * -1;
    hd =
      (((1 / 4) * sq(x1 + 0.1) - 2 * (x1 + 0.1)) * -1 -
        (10 * sin((x1 + 0.1) / 4 + 11) + 10) * -1 -
        ((1 / 4) * sq(x1 - 0.1) - 2 * (x1 - 0.1)) * -1 -
        (10 * sin((x1 - 0.1) / 4 + 11) + 10) * -1) /
      (x1 + 0.1 - (x1 - 0.1));
    x2 = x1 - h / hd;
    if (abs(x2 - x1) < 0.000000001) {
      done = true;
      print(
        "Der er en skæring i punktet " +
          "(" +
          x1 +
          "," +
          (10 * sin(x1 / 4 + 11) + 10 + ")")
      );
      stroke("white");
      strokeWeight(3);
      point(x1, 10 * sin(x1 / 4 + 11) + 10);
      strokeWeight(1);
      stroke(0);
    } else {
      x1 = x2;
    }
  }
}
