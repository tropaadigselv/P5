let lige;
let ulige;

function setup() {
  createCanvas(400, 400);
  background(220);

  lige = [];
  ulige = [];

  for (let i = 0; i < 100; i++) {
    if (i % 2) {
      ulige.push(i);
    } else {
      lige.push(i);
    }
  }
  for (let i = 0; i < lige.length; i++) {
    text(lige[i], random(width / 2 + 10, width), random(0, height));
  }
  for (let i = 0; i < ulige.length; i++) {
    text(ulige[i], random(0, width / 2 - 10), random(0, height));
  }
}
