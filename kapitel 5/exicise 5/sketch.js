let a;
function setup() {
  createCanvas(400, 400);
  a = 0;
  frameRate(1);
  while (a < 30) {
    for (let i = 0; i < 60; i += 2) {
      circle(width / 2, height / 2, i);
      a++;
      print(i);
    }
  }
}
