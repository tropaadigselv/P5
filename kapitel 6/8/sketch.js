let inp;
let but;
let val = 0;

function setup() {
  createCanvas(400, 400);
  inp = createInput();
  but = createButton("submit");
  but.mousePressed(n);
}

function n() {
  val = int(inp.value());
  print(val);
  numbers = [];
  let a = 0;
  let b = 1;
  while (numbers.length < val) {
    a = b;
    b = a + b;
    numbers.push(a);
  }
  console.log("Fibonacci tal", numbers);
}
