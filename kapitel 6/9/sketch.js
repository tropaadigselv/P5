let inpVægt;
let inpHøjde;
let but;

function setup() {
  createCanvas(400, 400);
  background(220);

  text("Din vægt", 50, 40);
  inpVægt = createInput("");
  inpVægt.position(25, 50);
  inpVægt.size(90);

  text("Din Hødje", 50, 90);
  inpHøjde = createInput("");
  inpHøjde.position(25, 100);
  inpHøjde.size(90);

  but = createButton("Beregn BMI");
  but.position(25, 130);
  but.size(100);
  but.mousePressed(bmi);
}

function bmi() {
  let v = int(inpVægt.value());
  let h = int(inpHøjde.value());

  let bmi = (v / sq(h)) * 10000;

  print(bmi);
}
