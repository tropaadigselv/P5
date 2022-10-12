//tegner cirkler tilfældege steder med tilfældige størrelser og numrer den så alt efter hvad i er i while-loopet

function setup() {
  let i = 0;
  createCanvas(400, 400);
  while (i < 100) {
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
    i = i + 1;
  }
}
