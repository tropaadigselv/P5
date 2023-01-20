/*
der tegnes en bil som som tager i mod parameter; x og y koordinater, en længde og bredde, en hastighed, en farve og et mærke
*/
class Car {
  #x;
  #y;
  #width;
  #length;
  #maksspeed;
  #c;
  #brand;
  #finished;
  #acc;
  #tank;
  #speed;

  constructor(
    PosX,
    PosY,
    Width,
    Length,
    maksSpeed,
    Color,
    Brand,
    Acceleration,
    TankSize,
    RealSpeed
  ) {
    this.#x = PosX;
    this.#y = PosY;
    this.#width = Width;
    this.#length = Length;
    this.#maksspeed = maksSpeed;
    this.#c = color(Color);
    this.#brand = Brand;
    this.#finished = false;
    this.#acc = Acceleration;
    this.#tank = TankSize;
    this.#speed = RealSpeed;
  }

  move() {
    //for den til at bevæge sig
    if (this.#x % 20 == 0 && this.#tank > 0) {
      this.#tank -= 1;
    }
    if (this.#tank == 0) {
      this.#x += 0;
      print(this.#brand + "'s tank is empty");
    } else {
      this.#x += this.#speed;
    }
    while (this.#speed <= this.#maksspeed) {
      this.#speed += this.#acc;
    }
  }

  display() {
    //tegner den
    fill(this.#c);
    rect(this.#x, this.#y, this.#width, this.#length);
  }

  finish() {
    // når den kører over målstregen og der skrives hvilket mærke der vinder
    if (this.#x >= 1000 && !this.#finished) {
      this.#finished = true;
      console.log(this.#brand + " hit the finish-line!");
    }
  }
}

class EvCar extends Car {
  constructor(Type) {
    super();
    this.type = Type;
  }
}

let tesla;
let volvo;
let audi;

function setup() {
  createCanvas(1000, 400);
  //new car(posX, posY, width, height, speed, color, name)
  tesla = new Car(0, 20, 90, 50, 4, "blue", "Tesla", 2, 100, 0);
  volvo = new Car(0, 100, 50, 50, 2, "yellow", "Volvo", 1, 300, 0);
  audi = new Car(0, 200, 90, 80, 3, "green", "Audi", 1.5, 150, 0);
}

function draw() {
  background(220);
  tesla.move();
  tesla.display();
  tesla.finish();

  volvo.move();
  volvo.display();
  volvo.finish();

  audi.move();
  audi.display();
  audi.finish();
}
