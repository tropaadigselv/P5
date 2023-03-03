//for at se værdierne for skærngerne skal konsolen åbens

let g1;
let g2;
let g3;
let difx;
let dify;

// drawFunction og class Parable er skrevet med hjælp fra Vitus AB
class mathFunc {
  //tegner grafferne med brug af a,b og c værdier, funktions forskriften, intervallet og ændring i position
  drawFunction(a, b, c, func, min, maks, difX, difY) {
    for (let i = min; i <= maks; i++) {
      let y1 = func(a, b, c, i);
      let y2 = func(a, b, c, i - 1);
      line(i + difX, y1 - difY, i - 1 + difX, y2 - difY);
    }
  }
  //laver newton raphson
  newton_raphson(func2, a, b, c, x) {
    for (let i = 0; i < 10; i++) {
      let p = (1 / 4) * sq(x - difx) - 2 * (x - difx) - dify;
      let h = p - func2(a, b, c, x);
      //differensere den nye funktion ved at finde hældningen for punktet
      let hd =
        ((1 / 4) * sq(x + 0.1) -
          2 * (x + 0.1) -
          func2(a, b, c, x + 0.1) -
          ((1 / 4) * sq(x - 0.1) - 2 * (x - 0.1) - func2(a, b, c, x - 0.1))) /
        (x + 0.1 - (x - 0.1));

      let x2 = x - h / hd;
      print(x2);
      //hvis der er en lille forskel stoppes den og punkt tegnes på skæring
      if (abs(x - x2) < 0.00001) {
        stroke("blue");
        strokeWeight(3);
        point(x, func2(a, b, c, x));
        stroke(0);
        strokeWeight(1);
        break;
      }
      x = x2;
    }
  }
}
//klasser der nedarver funktionerne fra mathFunc og definere graftypen
class Parabel extends mathFunc {
  constructor(a, b, c, min, maks, difX, difY) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.min = min;
    this.maks = maks;
    this.difX = difX;
    this.difY = difY;
  }
  //funktionsforskrift
  parabel(a, b, c, x) {
    return a * sq(x) + b * x + c;
  }
  //tegner funktion
  draw(difX, difY) {
    super.drawFunction(
      this.a,
      this.b,
      this.c,
      this.parabel,
      this.min,
      this.maks,
      difX,
      difY
    );
  }
}

class N_Grads extends mathFunc {
  constructor(a, b, c, min, maks, difX, difY) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.min = min;
    this.maks = maks;
    this.difX = difX;
    this.difY = difY;
  }
  //funktions forskrift
  n_grads(a, b, c, x) {
    return (pow(x / a + b, 5) + c) / 100;
  }
  draw() {
    //tegner funktion
    super.drawFunction(
      this.a,
      this.b,
      this.c,
      this.n_grads,
      this.min,
      this.maks,
      this.difX,
      this.difY
    );
    //tjekker om den er inde for Dm og Vm og kalder NR hvis den er
    if (mouseX > 190 && mouseX < 227) {
      if (mouseY > 196 && mouseY < 270) {
        super.newton_raphson(this.n_grads, this.a, this.b, this.c, 20);
      }
    }
  }
}

class Sinus extends mathFunc {
  constructor(a, b, c, min, maks, difX, difY) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
    this.min = min;
    this.maks = maks;
    this.difX = difX;
    this.difY = difY;
  }
  //funktionsforskrift
  sinus(a, b, c, x) {
    return 10 * sin(x / a + b) + c;
  }

  draw() {
    //tegner funktion
    super.drawFunction(
      this.a,
      this.b,
      this.c,
      this.sinus,
      this.min,
      this.maks,
      this.difX,
      this.difY
    );
    ////tjekker om den er inde for Dm og Vm og kalder NR hvis den er
    if (mouseX > 180 && mouseX < 227) {
      if (mouseY > 175 && mouseY < 260) {
        super.newton_raphson(this.sinus, this.a, this.b, this.c, 20);
      }
    }
  }
}

function setup() {
  createCanvas(800, 400);
  //siden mouseX og mouseY ikke bliver ramt a translate skal de ændres når funktionen skal rykkes på med musen
  difx = mouseX - 200;
  dify = mouseY - 200;
  //laver objekterne
  g1 = new Parabel(1 / 4, -2, 0, 0, 20, difx, dify);
  g2 = new N_Grads(10, -4, 10, 11, 25, 0, 0);
  g3 = new Sinus(4, 11, 10, 0, 25, 0, 0);
}

function draw() {
  background(220);
  difx = mouseX - 200;
  dify = mouseY - 200;
  translate(200, 200);
  scale(1, -1);
  //kalder funktionerne i objekterne så de bliver tegnet
  g1.draw(difx, dify);
  g2.draw();
  g3.draw();
}
