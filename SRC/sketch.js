let figur1;
let figur2;
let flyt;

class Figur_1 {
  constructor() {}

  draw() {
    //tegner parabel
    for (let i = 0; i <= 20; i++) {
      let y1 = (1 / 4) * sq(i) - 2 * i;
      let y2 = (1 / 4) * sq(i - 1) - 2 * i;
      line(
        i + mouseX - flyt,
        y1 - mouseY + flyt,
        i - 1 + mouseX - flyt,
        y2 - mouseY + flyt
      );
      print(i + mouseX);
    }
    //tegner ekspotienal funktion
    for (let i = 0; i <= 3; i++) {
      let y1 = pow(5, i);
      let y2 = pow(5, i - 1);
      line(
        i + mouseX - flyt,
        y1 - mouseY + flyt,
        i - 1 + mouseX - flyt,
        y2 - mouseY + flyt
      );
    }
    //tegner skrå linje
    for (let i = 3; i <= 20; i++) {
      let a = ((1 / 4) * sq(20) - 2 * 20 - pow(5, 3)) / (20 - 3);
      let b = -a * 3 + pow(5, 3);
      let y1 = a * i + b;
      let y2 = a * (i - 1) + b;
      line(
        i + mouseX - flyt,
        y1 - mouseY + flyt,
        i - 1 + mouseX - flyt,
        y2 - mouseY + flyt
      );
      //tegner firkant rundt omm figurens (slettes senere)
      line(
        0 + mouseX - flyt,
        -4 - mouseY + flyt,
        0 + mouseX - flyt,
        127 - mouseY + flyt
      );
      line(
        0 + mouseX - flyt,
        127 - mouseY + flyt,
        20 + mouseX - flyt,
        127 - mouseY + flyt
      );
      line(
        20 + mouseX - flyt,
        127 - mouseY + flyt,
        20 + mouseX - flyt,
        -4 - mouseY + flyt
      );
      line(
        20 + mouseX - flyt,
        -4 - mouseY + flyt,
        0 + mouseX - flyt,
        -4 - mouseY + flyt
      );
    }
  }
  colider() {}
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
    }
    line(0, -10.14, 0, 20);
    line(0, 20, 25, 20);
    line(25, 20, 25, -10.14);
    line(25, -10.14, 0, -10.14);
  }
}

function setup() {
  createCanvas(800, 400);
  flyt = 200;
  figur1 = new Figur_1();
  figur2 = new Figur_2();
}

function draw() {
  background(220);
  translate(200, 200);
  strokeWeight(1);
  scale(1, -1);
  figur2.draw();
  figur1.draw();
  strokeWeight(5);
  point(0, 0);
}
