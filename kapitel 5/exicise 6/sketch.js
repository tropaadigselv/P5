let a;
function setup() {
  createCanvas(400, 400);
  a = 0;
  frameRate(1);
  while (a < 10) {
    for (let i = 0; i < 22; i += 2) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      ellipse(
        random(0, width),
        random(0, height),
        random(10, 50),
        random(10, 50)
      );
      a++;
      print(i);
    }
  }
}
