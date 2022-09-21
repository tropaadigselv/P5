let CircleY;
let CircleSpeed;
let SquareY;
let SquareSpeed;
let CircleY2;
let CircleSpeed2;
let score;

let note1;
let note2;
let note3;

function preload() {
  soundFormats("WAV", "mp3");
  note1 = loadSound("Notes/C_Major7ShortGuitar_725");
  note2 = loadSound("Notes/Gm_Minor7ShortGuitar_725");
  note3 = loadSound("Notes/Em_Minor7Short1Guitar_725");
}

function setup() {
  createCanvas(500, 600);
  CircleY = 50;
  CircleSpeed = random(1, 5);
  SquareY = 50;
  SquareSpeed = random(1, 5);
  CircleY2 = 50;
  CircleSpeed2 = random(1, 5);
  score = 0;
}

function draw() {
  CircleY += CircleSpeed;
  SquareY += SquareSpeed;
  CircleY2 += CircleSpeed2;

  background(220);
  //guitar strenge
  strokeWeight(5);
  for (let i = 100; i < 400; i += 50) {
    line(i, 0, i, height);
  }
  stroke(180);
  line(0, 500, width, 500);

  circle(100, CircleY, 50);
  rectMode(CENTER);
  rect(200, SquareY, 50);
  circle(300, CircleY2, 50);

  if (CircleY > height + 25) {
    CircleY = -50;
    CircleSpeed = random(1, 5);
    score--;
  }
  if (CircleY2 > height + 25) {
    CircleY2 = -50;
    CircleSpeed2 = random(1, 5);
    score--;
  }
  if (SquareY > height + 25) {
    SquareY = -50;
    SquareSpeed = random(1, 5);
    score--;
  }

  strokeWeight(0);
  fill(0);
  text(score, 50, 100);
}

function keyPressed() {
  // for den første cirkle
  if (keyCode == "81" && CircleY < 500) {
    score--;
    CircleY = -50;
    CircleSpeed = random(1, 5);
  }
  if (CircleY > 500 && CircleY < height && keyCode == "81") {
    CircleY = -50;
    CircleSpeed = random(1, 10);
    score++;
    note1.play();
  }
  // for firkanten
  if (keyCode == "87" && SquareY < 500) {
    SquareY = -50;
    SquareSpeed = random(1, 5);
    score--;
  }
  if (SquareY > 500 && SquareY < height && keyCode == "87") {
    SquareY = -50;
    SquareSpeed = random(1, 10);
    score++;
    note2.play();
  }
  //for den anden cirkle
  if (keyCode == "69" && CircleY2 < 500) {
    score--;
    CircleY2 = -50;
    CircleSpeed2 = random(1, 5);
  }
  if (CircleY2 > 500 && CircleY2 < height && keyCode == "69") {
    CircleY2 = -50;
    CircleSpeed2 = random(1, 10);
    score++;
    note3.play();
  }
}
