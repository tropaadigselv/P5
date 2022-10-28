let i;

function setup() {
  i = 0;
  createCanvas(400, 400);

  while (i < 100) {
    if (i % 2) {
      fill(255);
      let x = random(400);
      let y = random(400);
      let r = random(100);
      circle(x, y, r);
      fill(0, 0, 255);
      text(i, x, y);
    }
    i = i + 1;
  }

  for (let i = 0; i < 100; i += 2) {
    fill(255);
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    fill(255, 0, 0);
    text(i, x, y);
  }

  print(i);
}
