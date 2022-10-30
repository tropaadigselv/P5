let x;
function setup() {
  createCanvas(400, 400);
  x = 0;
  for (let i = 0; i < 101; i++) {
    x += i;
    print(x);
  }
}
