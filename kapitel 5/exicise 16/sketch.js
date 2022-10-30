let navne;

function setup() {
  createCanvas(400, 400);
  background(220);
  navne = [
    "Frederik",
    "Katrine",
    "Vitus",
    "Artem",
    "Sebastian",
    "August",
    "Alexander",
    "Mick",
    "Aske",
    "Anders",
  ];

  for (let i = 0; i < navne.length; i++) {
    textSize(navne[i].length * 2);
    text(navne[i], random(0, width - 50), random(10, height - 10));
  }
}
