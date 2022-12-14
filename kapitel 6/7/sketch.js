let ord = "hej";
let inp;
let but;
let fejl = 0;
let vind = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  inp = createInput();
  but = createButton("submit");
  but.mousePressed(myInput);

  line(100, 100, 100, 300);
  line(100, 100, 250, 100);
  line(250, 100, 250, 150);

  for (let i = 0; i < ord.length; i++) {
    let x = i * 20;
    line(10 + x, 350, 25 + x, 350);
    print(i);
  }
}

function draw() {
  if (fejl == 1) {
    circle(250, 175, 50);
  } else if (fejl == 2) {
    ellipse(250, 235, 50, 75);
  } else if (fejl == 3) {
    line(235, 265, 230, 300);
  } else if (fejl == 4) {
    line(265, 265, 270, 300);
  } else if (fejl == 5) {
    line(231, 210, 210, 250);
  } else if (fejl == 6) {
    line(269, 210, 290, 250);
    text("Du har tabt ordet er " + ord, 10, 30);
  }
  if (vind == true) {
    text("Du har vundet! Ordet er " + ord, 10, 30);
  }
}

function myInput() {
  let t = str(inp.value());
  let m = match(ord, t);
  print(m);
  if (m == ord) {
    print(m);
    vind = true;
  } else {
    fejl++;
  }
}
