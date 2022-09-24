let Node1;
let Node2;
let Node3;
let Node4;
let Node5;
let Node6;
let Node7;
let Node8;
let Node9;
let Node10;
let Node11;
let Node12;
let Node13;
let Node14;
let Node15;
let Node16;
let Node17;
let Node18;
let Node19;
let Node20;
let Node21;
let Node22;
let Node23;
let Node24;
let Node25;

function preload() {
  // loader de lyde klaveret skal lave
  soundFormats("mp3", "ogg");
  Node1 = loadSound("noder/d3");
  Node2 = loadSound("noder/e3");
  Node3 = loadSound("noder/f3");
  Node4 = loadSound("noder/g3");
  Node5 = loadSound("noder/a3");
  Node6 = loadSound("noder/b3");
  Node7 = loadSound("noder/c4");
  Node8 = loadSound("noder/d4");
  Node9 = loadSound("noder/e4");
  Node10 = loadSound("noder/f4");
  Node11 = loadSound("noder/g4");
  Node12 = loadSound("noder/a4");
  Node13 = loadSound("noder/b4");
  Node14 = loadSound("noder/c5");
  Node15 = loadSound("noder/c-3");
  Node16 = loadSound("noder/d-3");
  Node17 = loadSound("noder/f-3");
  Node18 = loadSound("noder/g-3");
  Node19 = loadSound("noder/a-3");
  Node20 = loadSound("noder/c-4");
  Node21 = loadSound("noder/d-4");
  Node22 = loadSound("noder/f-4");
  Node23 = loadSound("noder/g-4");
  Node24 = loadSound("noder/a-4");
  Node25 = loadSound("noder/c-5");
}

function setup() {
  createCanvas(700, 250);
  background(220);

  //laver klaveret
  line(0, height / 2, width, height / 2);

  //de hvide tangenter
  fill(255);
  rect(0, height / 2, width, height / 2);
  for (let i = width; i > 0; i -= 50) {
    line(width - i, height / 2, width - i, height);
  }

  //prik på center c
  fill(255, 0, 0);
  circle(325, 240, 15);

  //de sorte tangenter
  fill(000);
  rect(width - 715, height / 2, 30, 80);
  rect(width - 665, height / 2, 30, 80);
  rect(width - 565, height / 2, 30, 80);
  rect(width - 515, height / 2, 30, 80);
  rect(width - 465, height / 2, 30, 80);
  rect(width - 365, height / 2, 30, 80);
  rect(width - 315, height / 2, 30, 80);
  rect(width - 215, height / 2, 30, 80);
  rect(width - 165, height / 2, 30, 80);
  rect(width - 115, height / 2, 30, 80);
  rect(width - 15, height / 2, 30, 80);

  //hjælpe text for tastaturet
  fill(255);
  text("1", 3, 200);
  text("2", 47, 200);
  text("4", 147, 200);
  text("5", 197, 200);
  text("6", 247, 200);
  text("8", 347, 200);
  text("9", 397, 200);
  text("0", 497, 200);
  text("S", 547, 200);
  text("D", 597, 200);
  text("F", 693, 200);

  fill(000);
  textStyle(BOLD);
  text("Q", 20, 230);
  text("W", 70, 230);
  text("E", 120, 230);
  text("R", 170, 230);
  text("T", 220, 230);
  text("Y", 270, 230);
  text("U", 320, 230);
  text("I", 370, 230);
  text("O", 420, 230);
  text("P", 470, 230);
  text("Å", 520, 230);
  text("Z", 570, 230);
  text("X", 620, 230);
  text("C", 670, 230);
}
function draw() {
  //tjekker hvilken tangent man trykker på med musen og spiller så den tilhørende node.
  //de hvide
  if (mouseIsPressed) {
    if (
      (mouseX > 0 && mouseX < 50 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 15 && mouseX < 35 && mouseY > 125 && mouseY < 205)
    ) {
      //q
      Node1.play();
    } else if (
      (mouseX > 50 && mouseX < 100 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 65 && mouseX < 100 && mouseY > 125 && mouseY < 205)
    ) {
      //w
      Node2.play();
    } else if (
      (mouseX > 100 && mouseX < 150 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 100 && mouseX < 135 && mouseY > 125 && mouseY < 205)
    ) {
      //e
      Node3.play();
    } else if (
      (mouseX > 150 && mouseX < 200 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 165 && mouseX < 185 && mouseY > 125 && mouseY < 205)
    ) {
      //r
      Node4.play();
    } else if (
      (mouseX > 200 && mouseX < 250 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 215 && mouseX < 235 && mouseY > 125 && mouseY < 205)
    ) {
      //t
      Node5.play();
    } else if (
      (mouseX > 250 && mouseX < 300 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 265 && mouseX < 300 && mouseY > 125 && mouseY < 205)
    ) {
      //y
      Node6.play();
    } else if (
      (mouseX > 300 && mouseX < 350 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 300 && mouseX < 335 && mouseY > 125 && mouseY < 205)
    ) {
      //u
      Node7.play();
    } else if (
      (mouseX > 350 && mouseX < 400 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 365 && mouseX < 385 && mouseY > 125 && mouseY < 205)
    ) {
      //i
      Node8.play();
    } else if (
      (mouseX > 400 && mouseX < 450 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 415 && mouseX < 450 && mouseY > 125 && mouseY < 205)
    ) {
      //o
      Node9.play();
    } else if (
      (mouseX > 450 && mouseX < 500 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 450 && mouseX < 485 && mouseY > 125 && mouseY < 205)
    ) {
      //p
      Node10.play();
    } else if (
      (mouseX > 500 && mouseX < 550 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 515 && mouseX < 535 && mouseY > 125 && mouseY < 205)
    ) {
      //å
      Node11.play();
    } else if (
      (mouseX > 550 && mouseX < 600 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 565 && mouseX < 585 && mouseY > 125 && mouseY < 205)
    ) {
      //z
      Node12.play();
    } else if (
      (mouseX > 600 && mouseX < 650 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 615 && mouseX < 650 && mouseY > 125 && mouseY < 205)
    ) {
      //x
      Node13.play();
    } else if (
      (mouseX > 650 && mouseX < 700 && mouseY > 205 && mouseY < 250) ||
      (mouseX > 650 && mouseX < 685 && mouseY > 125 && mouseY < 205)
    ) {
      //c
      Node14.play();
    }
    // de sorte
    else if (mouseX > 0 && mouseX < 15 && mouseY > 125 && mouseY < 205) {
      //1
      Node15.play();
    } else if (mouseX > 35 && mouseX < 65 && mouseY > 125 && mouseY < 205) {
      //2
      Node16.play();
    } else if (mouseX > 135 && mouseX < 165 && mouseY > 125 && mouseY < 205) {
      //4
      Node17.play();
    } else if (mouseX > 185 && mouseX < 215 && mouseY > 125 && mouseY < 205) {
      //5
      Node18.play();
    } else if (mouseX > 235 && mouseX < 265 && mouseY > 125 && mouseY < 205) {
      //6
      Node19.play();
    } else if (mouseX > 335 && mouseX < 365 && mouseY > 125 && mouseY < 205) {
      //8
      Node20.play();
    } else if (mouseX > 385 && mouseX < 415 && mouseY > 125 && mouseY < 205) {
      //9
      Node21.play();
    } else if (mouseX > 485 && mouseX < 515 && mouseY > 125 && mouseY < 205) {
      //0
      Node22.play();
    } else if (mouseX > 535 && mouseX < 565 && mouseY > 125 && mouseY < 205) {
      //s
      Node23.play();
    } else if (mouseX > 585 && mouseX < 615 && mouseY > 125 && mouseY < 205) {
      //d
      Node24.play();
    } else if (mouseX > 685 && mouseX < 700 && mouseY > 125 && mouseY < 205) {
      //f
      Node25.play();
    }
  }

  //tjekker hvilken tangent du trykker på med tastaturet og spiller så tilhørende node.
  if (keyIsDown(81)) {
    //q
    Node1.play();
  }
  if (keyIsDown(87)) {
    //w
    Node2.play();
  }
  if (keyIsDown(69)) {
    //e
    Node3.play();
  }
  if (keyIsDown(82)) {
    //r
    Node4.play();
  }
  if (keyIsDown(84)) {
    //t
    Node5.play();
  }
  if (keyIsDown(89)) {
    //y
    Node6.play();
  }
  if (keyIsDown(85)) {
    //u
    Node7.play();
  }
  if (keyIsDown(73)) {
    //i
    Node8.play();
  }
  if (keyIsDown(79)) {
    //o
    Node9.play();
  }
  if (keyIsDown(80)) {
    //p
    Node10.play();
  }
  if (keyIsDown(221)) {
    //å
    Node11.play();
  }
  if (keyIsDown(90)) {
    //z
    Node12.play();
  }
  if (keyIsDown(88)) {
    //x
    Node13.play();
  }
  if (keyIsDown(67)) {
    //c
    Node14.play();
  }
  if (keyIsDown(49)) {
    //1
    Node15.play();
  }
  if (keyIsDown(50)) {
    //2
    Node16.play();
  }
  if (keyIsDown(52)) {
    //4
    Node17.play();
  }
  if (keyIsDown(53)) {
    //5
    Node18.play();
  }
  if (keyIsDown(54)) {
    //6
    Node19.play();
  }
  if (keyIsDown(56)) {
    //8
    Node20.play();
  }
  if (keyIsDown(57)) {
    //9
    Node21.play();
  }
  if (keyIsDown(48)) {
    //0
    Node22.play();
  }
  if (keyIsDown(83)) {
    //s
    Node23.play();
  }
  if (keyIsDown(68)) {
    //d
    Node24.play();
  }
  if (keyIsDown(70)) {
    //f
    Node25.play();
  }
}
