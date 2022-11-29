let inp;

function setup() {
  createCanvas(400, 400);
  inp = createInput();
}

function draw() {
  inp.position(200, 200);
  inp.size(100);

  if (inp.value() == 12) {
    print(inp.value());
  }
}
