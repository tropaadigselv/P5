/*
der tegnes en bil som som tager i mod argumenterne; x og y koordinater, en længde og bredde, en hastighed, en farve og et mærke
*/

class Car {
  #x;
  #y;
  #width;
  #length;
  #speed;
  #c;
  #brand;
  #finished;
  constructor(PosX, PosY, Width, Length, Speed, Color, Brand) {
    this.#x = PosX;
    this.#y = PosY;
    this.#width = Width;
    this.#length = Length;
    this.#speed = Speed;
    this.#c = color(Color);
    this.#brand = Brand;
    this.#finished = false;
  }

  move() {
    //for den til at bevæge sig
    this.#x += this.#speed;
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
