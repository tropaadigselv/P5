let figur1;
let figur2;
let flyt;
let difX;
let difY;

class Figur_1 {
  constructor() {}

  draw() {
    //tegner parabel
    for (let i = 0; i <= 20; i += 0.001) {
      let y1 = (1 / 4) * sq(i) - 2 * i;
      let y2 = (1 / 4) * sq(i - 1) - 2 * (i - 1);
      line(i + difX, y1 - difY, i - 1 + difX, y2 - difY);
      //print(dist(i + difX, y1 - difY, i - 1 + difX, y2 - difY));
    }
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

    //tegner 5 grads polynumie
    for (let i = 25; i >= 11; i--) {
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
    }
  }
  colider1() {
    if (mouseX > 100 && mouseX < 225) {
      if (mouseY > 175 && mouseY < 260) {
        newton_raphson1();
      }
    }
  }
  colider2() {
    if (mouseX > 100 && mouseX < 190) {
      if (mouseY > 195 && mouseY < 270) {
        //newton_raphson2();
      }
    }
  }
  colider3() {
    if (mouseX > 190 && mouseX < 205) {
      if (mouseY > 197 && mouseY < 260) {
        //newton_raphson3();
      }
    }
  }
}

function setup() {
  createCanvas(800, 600);
  flyt = 200;
  difX = mouseX - flyt;
  difY = mouseY - flyt;
  figur1 = new Figur_1();
  figur2 = new Figur_2();
}

function draw() {
  //print(mouseX, mouseY);
  difX = mouseX - flyt;
  difY = mouseY - flyt;
  background(220);
  translate(200, 200);
  strokeWeight(1);
  stroke(0);
  scale(1, -1);
  figur2.draw();
  figur2.colider1();
  figur2.colider2();
  figur2.colider3();
  figur1.draw();
  strokeWeight(3);
  stroke("blue");
  point(0, 0);
}

function newton_raphson1() {
  x1 = 10;
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
  print(hdd);
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
    hdd = 1 / 2 + (5 * sin(x1 / 4 + 11)) / 8;
    print(hdd, hd);
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
