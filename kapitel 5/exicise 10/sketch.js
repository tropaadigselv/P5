let q;
let a;
let x;
let y;

function setup() {
  createCanvas(800, 800);
  background(220);

  y = 50;
  x = 50;
  q = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
  ];
  a = 0;
  noStroke();
  rectMode(CENTER);
  while (a < 8) {
    for (let i = 0; i < 8; i++) {
      if (q[a][i] == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, 100, 100);
      x += 100;
    }
    a++;
    console.log(x, y, a);
    y += 100;
    x = 50;
  }
}
