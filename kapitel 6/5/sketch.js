let inp, but, b;

function setup() {
  createCanvas(400, 400);
  background(220);

  inp = createInput("");
  inp.position(0, 50);
  inp.size(100);

  but = createButton("convert");
  but.position(inp.width, 50);
  but.mousePressed(convert);
}

function convert() {
  let g = int(inp.value());
  let d;
  d = (g / 360) * 2 * PI;
  print(inp.value() + " grader bliver til " + d + " radianer");
  return d;
}
